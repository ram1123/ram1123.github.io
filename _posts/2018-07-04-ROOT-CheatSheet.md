---
layout: post
title: "ROOT CheatSheet"
date: 2018-07-04
categories: root cpp pyroot
---

* Do not remove this line (it will not be displayed)
{:toc}

# Redirecting output (ROOT-6)

```c++
$root -l
root [0] TFile f("hsimple.root");
root [0] ntuple->Scan("px:py:pz");
root [0] .> a.log
root [0] ntuple->Scan("px:py:pz");
root [0] .>
root [0] .q
```
 
There is some issue so that it can not saves output by just running it once. So, before `.> a.log` you have to run the same command then after `.> a.log` run it again then it will save the output to external file.

Reference: [https://root-forum.cern.ch/t/redirecting-output-root-6/18668/12?u=ramkrishna](https://root-forum.cern.ch/t/redirecting-output-root-6/18668/12?u=ramkrishna)

**To fill full output of scan command do this**:

Use `tree->SetScanField(0);`  to see all raw of the tree. Reference: [link](https://root.cern.ch/root/htmldoc/guides/users-guide/Trees.html#simple-analysis-using-ttreedraw)

```c++
$root -l
root [0] TFile f("hsimple.root");
root [0] ntuple->SetScanField(0);  
root [0] ntuple->Scan("px:py:pz");
root [0] .> a.log
root [0] ntuple->Scan("px:py:pz");
root [0] .>
root [0] .q
```

# Draw a line on Histogram

```c++
TCanvas *c1= new TCanvas;

TLine *l=new TLine(c1->GetUxmin(),3.0,c1->GetUxmax(),3.0);
l->SetLineColor(kBlue);
l->Draw();
```

```python
import ROOT as r
c1= r.TCanvas();

l = r.TLine(c1.GetUxmin(),1.0,c1.GetUxmax(),1.0);
l.SetLineColor(1);
l.SetLineStyle(3);
l.Draw();
```

# Read Histogram from Root file

```c++
TFile * fileIn = new TFile("InputRootFile.root","READ");

TH1F* h1 = (TH1F*) fileIn->Get("Histogram_Name_As_In_AvobeROOT_File")
```

# Read TTree using TTreeReader and make histogram

```c++
TFile *myFile = TFile::Open("root:://cmseos.fnal.gov//eos/uscms/store/user/rasharma/SecondStep/WWTree_CommonNtuple_For1and2Lepton_2018_05_15_04h15/HaddedFiles/Hadds_for_BkgEstimation/WWTree_VJets.root","READ");

TTreeReader fReader("otree", myFile);

TTreeReaderArray<Float_t> LHEWeight = {fReader, "LHEWeight"};

TTreeReaderValue<Int_t> event = {fReader, "event"};

TH1F* h1 = new TH1F("h1","Title;X-axis;Y-axis",11,0,11);

// Loop over all entries of the TTree.
while (fReader.Next()) {
    // Just access the data as if variables were iterators (note the '*' in front of them):
    h1->Fill(*event);
}
```

```c++
#include <TFile.h>
#include <TH1.h>
#include <TTreeReader.h>
#include <TTreeReaderValue.h>
#include <TTreeReaderArray.h>
#include "TriggerInfo.h"
#include "Muon.h"
#include "Tau.h"
#include <vector>
#include <iostream>
bool CheckValue(ROOT::TTreeReaderValueBase* value) {
   if (value->GetSetupStatus() < 0) {
      std::cerr << "Error " << value->GetSetupStatus()
                << "setting up reader for " << value->GetBranchName() << '\n';
      return false;
   }
   return true;
}
// Analyze the tree "MyTree" in the file passed into the function.
// Returns false in case of errors.
bool analyze(TFile* file) {
   // Create a TTreeReader named "MyTree" from the given TDirectory.
   // The TTreeReader gives access to the TTree to the TTreeReaderValue and
   // TTreeReaderArray objects. It knows the current entry number and knows
   // how to iterate through the TTree.
   TTreeReader reader("MyTree", file);
   // Read a single float value in each tree entries:
   TTreeReaderValue<float> weight(reader, "event.weight");
   if (!CheckValue(weight)) return false;
   // Read a TriggerInfo object from the tree entries:
   TTreeReaderValue<TriggerInfo> triggerInfo(reader, "triggerInfo");
   if (!CheckValue(triggerInfo)) return false;
   //Read a vector of Muon objects from the tree entries:
   TTreeReaderValue<std::vector<Muon>> muons(reader, "muons");
   if (!CheckValue(muons)) return false;
   //Read the pT for all jets in the tree entry:
   TTreeReaderArray<double> jetPt(reader, "jets.pT");
   if (!CheckValue(jetPt)) return false;
   // Read the taus in the tree entry:
   TTreeReaderArray<Tau> taus(reader, "taus");
   if (!CheckValue(taus)) return false;
   // Now iterate through the TTree entries and fill a histogram.
   TH1F("hist", "TTreeReader example histogram", 10, 0., 100.);

   while (reader.Next()) {
      if (reader.GetEntryStatus() == kEntryValid) {
         std::cout << "Loaded entry " << reader.GetCurrentEntry() << '\n';
      } else {
         switch (reader.GetEntryStatus()) {
         kEntryValid:
            // Handled above.
            break;
         kEntryNotLoaded:
            std::cerr << "Error: TTreeReader has not loaded any data yet!\n";
            break;
         kEntryNoTree:
            std::cerr << "Error: TTreeReader cannot find a tree names \"MyTree\"!\n";
            break;
         kEntryNotFound:
            // Can't really happen as TTreeReader::Next() knows when to stop.
            std::cerr << "Error: The entry number doe not exist\n";
            break;
         kEntryChainSetupError:
            std::cerr << "Error: TTreeReader cannot access a chain element, e.g. file without the tree\n";
            break;
         kEntryChainFileError:
            std::cerr << "Error: TTreeReader cannot open a chain element, e.g. missing file\n";
            break;
         kEntryDictionaryError:
            std::cerr << "Error: TTreeReader cannot find the dictionary for some data\n";
            break;
         }
         return false;
      }
      // Access the TriggerInfo object as if it's a pointer.
      if (!triggerInfo->hasMuonL1())
         continue;
      // Ditto for the vector<Muon>.
      if (!muons->size())
         continue;
      // Access the jetPt as an array, whether the TTree stores this as
      // a std::vector, std::list, TClonesArray or Jet* C-style array, with
      // fixed or variable array size.
      if (jetPt.GetSize() < 2 || jetPt[0] < 100)
         continue;
      // Access the array of taus.
      if (!taus.IsEmpty()) {
         float currentWeight = *weight;
         for (int iTau = 0, nTau = taus.GetSize(); iTau < nTau; ++iTau) {
            // Access a float value - need to dereference as TTreeReaderValue
            // behaves like an iterator
            hist->Fill(taus[iTau].eta(), currentWeight);
         }
      }
   } // TTree entry / event loop
}
```

# Constant or Variable Histogram binningxs

## Example of variable binning
```c++
   const Int_t NBINS = 5;
   Double_t edges[NBINS + 1] = {0.0, 0.2, 0.3, 0.6, 0.8, 1.0};
   // Bin 1 corresponds to range [0.0, 0.2]
   // Bin 2 corresponds to range [0.2, 0.3] etc...

   TH1* h = new TH1D(
      /* name */ "h1",
      /* title */ "Hist with variable bin width",
      /* number of bins */ NBINS,
      /* edge array */ edges
    );
```

## Example of constant binning
```c++
TH2* h = new TH2D(
      /* name */ "h2",
      /* title */ "Hist with constant bin width",
      /* X-dimension */ 100, 0.0, 4.0,
      /* Y-dimension */ 200, -3.0, 1.5);
```

# Create directory in root file

  ```c++
  // create a new Root file
     TFile *top = new TFile("top.root","recreate");

     // create a subdirectory "tof" in this file
     TDirectory *cdtof = top->mkdir("tof");
     cdtof->cd();    // make the "tof" directory the current directory
  ```
Reference: [https://root.cern.ch/root/html/tutorials/io/dirs.C.html](https://root.cern.ch/root/html/tutorials/io/dirs.C.html)

# Convert Int to TString

```c++
Form("test_%d",23)
```

# Save everything from ROOT file

## Method:1
```python
import ROOT as r

file = r.TFile.Open("GE11-X-S-CERN-0007_cutADC500_hitTime4-20_clustTime5-20.root")

dir = file.Get("Summary")

# To list contents of dir
#dir.ls()

# Get one histogram/canvas in histogram h
#h = dir.Get("canv_GE11-X-S-CERN-0007_HitPos_AllEta_Segmented")

#Draw h
#h.Draw()

# Save histogram
#h.SaveAs("test.pdf")


# Get all the keys in a directory "Summary"
keys = dir.GetListOfKeys()

for k in keys:
    #print k.GetName()
    if (k.GetName().find("canv") != -1):
            print k.GetName()
            h = dir.Get(k.GetName())
            h.Draw()
            name = r.TString(k.GetName())+r.TString(".pdf")
            #Tstring method Data() converts it to char* https://root.cern.ch/doc/master/classTString.html#a7e4ada8bf2407b461f3ee58b71c5959f
            h.SaveAs(name.Data())
```

## Method:2

```python
import ROOT as r

file = r.TFile.Open("bkg_estimation_4Bins_50GeVLepCut.root")

# Get all the keys in a directory "Summary"
keys = file.GetListOfKeys()

print keys
print "="*30
keys.Print()
print "="*30

for k in keys:
    someObject = file.Get(k.GetName())
    print "==> ",someObject.ClassName()
    if (someObject.ClassName() == "TCanvas"):
            print k.GetName()
            h = file.Get(k.GetName())
            name = r.TString(k.GetName())+r.TString(".pdf")
            h.SaveAs(name.Data())
```


Another good exampel: [http://rivet.hepforge.org/svn/tags/rivet-1.6.0/bin/root2flat](http://rivet.hepforge.org/svn/tags/rivet-1.6.0/bin/root2flat)

## In C++

in C++ it can be done like this

```c++
  my_fileptr->GetListOfKeys();

  My_class *my_objptr = (My_class *) my_fileptr->Get("my_objectname");
```


```c++
TFile* myfile = TFile::Open("EfficiencyFits.root");
TCanvas* mycanv = new TCanvas("mycanv","FitsCanvas");

for (const auto&& keyObj : *(file->GetListOfKeys()) ){
  auto key = (TKey*) keyObj;
  TH1F* CurrentHist = (TH1F*) key->ReadObj();
  CurrentHist->Draw();
}
```

# TRatioPlot

TRatioPlot:  [https://root.cern.ch/doc/master/classTRatioPlot.html ](https://root.cern.ch/doc/master/classTRatioPlot.html )

# Decimal precision with “TEXT” drawing option

Use:

```c++
gStyle->SetPaintTextFormat(“4.1f”);
```

Reference: [https://root-forum.cern.ch/t/decimal-precision-with-text-drawing-option/15923/2?u=ramkrishna](https://root-forum.cern.ch/t/decimal-precision-with-text-drawing-option/15923/2?u=ramkrishna)

# Some tutorial link

1. Best tutorial: [https://www-zeuthen.desy.de/~middell/_downloads/pyroot.pdf](https://www-zeuthen.desy.de/~middell/_downloads/pyroot.pdf)
2. [https://wiki-zeuthen.desy.de/LCInfo/PythonExamples](https://wiki-zeuthen.desy.de/LCInfo/PythonExamples)
3. C++ : Tip of weekL: [http://wlav.web.cern.ch/wlav/ctotw/](http://wlav.web.cern.ch/wlav/ctotw/)

