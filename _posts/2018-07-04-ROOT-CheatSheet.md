---
layout: post
title: "ROOT CheatSheet"
date: 2018-07-04
categories: programming
tags: root cpp pyroot
giscus_comments: true
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# ListOfKeys

- `tfile->GetListOfKeys()->Print()`
  - prints all the keys in the tfile or ttree.
- `tfile->GetListOfKeys()->Contains("xyz")`
  - returns `True (False)`, if the key named `xyz` exists (does not exists) in the input root file or tree.

# quickly inspect root file

https://root.cern/manual/io/

# Check if ROOT file is not corrupt

```cpp=
TFile *infile = TFile::Open("Test.root");
if (infile->IsZombie()) continue;
delete infile;
infile=0;
```

# Check if tree exists in ROOT file

```cpp=
TFile *infile = TFile::Open("Test.root");
if (infile->IsZombie()) continue;
if (!(infile->GetListOfKeys()->Contains("Events"))) continue; // Here "Events" is the name of tree
TTree *eventTree = (TTree*)infile->Get("Events");
delete infile;
infile=0;
eventTree=0;
```

# Change to nice color pallet

- c++

```c++
  const Int_t NRGBs = 5;
  const Int_t NCont = 255;

  Double_t stops[NRGBs] = { 0.00, 0.34, 0.61, 0.84, 1.00 };
  Double_t red[NRGBs]   = { 0.00, 0.00, 0.87, 1.00, 0.51 };
  Double_t green[NRGBs] = { 0.00, 0.81, 1.00, 0.20, 0.00 };
  Double_t blue[NRGBs]  = { 0.51, 1.00, 0.12, 0.00, 0.00 };

  TColor::CreateGradientColorTable(NRGBs, stops, red, green, blue, NCont);
  gStyle->SetNumberContours(NCont);
```

- python

```python
import ROOT
from ROOT import TColor, gStyle
from array import array

NRGBs = 5;
NCont = 255;
stops = [ 0.00, 0.34, 0.61, 0.84, 1.00 ]
red   = [ 0.00, 0.00, 0.87, 1.00, 0.51 ]
green = [ 0.00, 0.81, 1.00, 0.20, 0.00 ]
blue  = [ 0.51, 1.00, 0.12, 0.00, 0.00 ]

s = array('d', stops)
r = array('d', red)
g = array('d', green)
b = array('d', blue)

TColor.CreateGradientColorTable(NRGBs, s, r, g, b, NCont);
gStyle.SetNumberContours(NCont);
```

# Read Root TTree using TTreeReader and make histogram

```c++
#include "TFile.h"
#include "TH1F.h"
#include "TTreeReader.h"
#include "TTreeReaderValue.h"
void TTreeReader_Macro() {
   // Create a histogram for the values we read.
   TH1F *h1 = new TH1F("h1", "ntuple", 100, 0, 2400);
   // Open the file containing the tree.
   TFile *myFile = TFile::Open("root:://cmseos.fnal.gov//eos/uscms/store/user/rasharma/SecondStep/WWTree_2018_01_03_14h54/HaddedFiles/WplusTo2JWminusToLNuJJ_EWK_LO_SM.root");
   // Create a TTreeReader for the tree, for instance by passing the
   // TTree's name and the TDirectory / TFile it is in. (otree is the name of tree)
   TTreeReader myReader("otree", myFile);
   // The branch "px" contains floats; access them as myPx.
   TTreeReaderValue<Float_t> myPx(myReader, "mass_lvj_type0");
   TTreeReaderValue<Float_t> btag(myReader, "btag0Wgt");
   TTreeReaderArray<Float_t> raMuonPt(myReader, "muonspT");

   // Loop over all entries of the TTree or TChain.
   while (myReader.Next()) {
      // Just access the data as if myPx and btag were iterators (note the '*'
      // in front of them):
      h1->Fill(*myPx);
      cout<<*btag<<endl;
      for (int iMuon = 0, nMuons =  raMuonPt.GetSize(); iMuon < nMuons; ++iMuon) {
          hist->Fill(raMuonPt[iMuon]);
      }
   }
   h1->Draw();
}
```

# Histogram from text file

https://root-forum.cern.ch/t/histogram-from-a-text-file/13287/2?u=ramkrishna

- Try TGraph: [url] http://root.cern.ch/root/html/TGraph.html
- Store your data in a simple text file, e.g. "MyData.txt", then try:
- Try TGraph instead: [url]http://root.cern.ch/root/html/TGraph.html
- Store your data in a simple text file, e.g. "MyData.txt", then try:

  ```
  root [0] TGraph *MyGraph = new TGraph("MyData.txt");
  root [0] TGraph *MyGraph = new TGraph("MyData.txt");
  root [1] MyGraph->Draw("A*");

  root [1] MyGraph->Draw("A*");
  ```

- Or, try a TTree instead: [url]http://root.cern.ch/root/html/TTree.html[/url]
- Again, store your data in a simple text file, e.g. "MyData.txt", then try:
- Or, try a TTree instead: [url]http://root.cern.ch/root/html/TTree.html[/url]
  Again, store your data in a simple text file, e.g. "MyData.txt", then try:

```
root [0] TTree *MyTree = new TTree("MyTree", "MyTree");
root [1] MyTree->ReadFile("MyData.txt", "Energy_1:Energy_2");
root [2] MyTree->Draw("Energy_1:Energy_2", "", "*");
root [3] MyTree->Draw("Energy_1");
root [0] TTree *MyTree = new TTree("MyTree", "MyTree");
root [1] MyTree->ReadFile("MyData.txt", "Energy_1:Energy_2");
root [2] MyTree->Draw("Energy_1:Energy_2", "", "*");
root [3] MyTree->Draw("Energy_1");
```

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

Use `tree->SetScanField(0);` to see all raw of the tree. Reference: [link](https://root.cern.ch/root/htmldoc/guides/users-guide/Trees.html#simple-analysis-using-ttreedraw)

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

# Print Name of all Keys in RootFile

```cpp
TFile *infile = TFile::Open("Test.root");
TIter next(infile.GetListOfKeys());
   TKey *key;
   while ((key=(TKey*)next())) {
      printf("key: %s points to an object of class: %s at %dn", key->GetName(),
      key->GetClassName(),key->GetSeekKey());
   }
```

# TRatioPlot

TRatioPlot: [https://root.cern.ch/doc/master/classTRatioPlot.html](https://root.cern.ch/doc/master/classTRatioPlot.html)

# Decimal precision with “TEXT” drawing option

Use:

```c++
gStyle->SetPaintTextFormat(“4.1f”);
```

Reference: [https://root-forum.cern.ch/t/decimal-precision-with-text-drawing-option/15923/2?u=ramkrishna](https://root-forum.cern.ch/t/decimal-precision-with-text-drawing-option/15923/2?u=ramkrishna)

# Some tutorial link

1. Best tutorial: [ROOT Python interface documentation](https://root.cern/manual/python/)
2. [PyROOT class reference](https://root.cern/doc/master/group__Pythonizations.html)
3. C++ : Tip of weekL: [http://wlav.web.cern.ch/wlav/ctotw/](http://wlav.web.cern.ch/wlav/ctotw/)
