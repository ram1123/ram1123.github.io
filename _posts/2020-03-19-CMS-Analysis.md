---
layout: post
title: "CMS Analysis"
date: 2020-03-19
categories: cms physics-analysis
comments: true
---

* Do not remove this line (it will not be displayed)
{:toc}


# Important Steps With References


## CMS dataset naming convention

CMS dataset name follows the following conventions:

```
PROCESS_RANGETYPE-RANGELOWToRANGEHIGH_FILTER_TUNE_COMMENT_COMENERGY-GENERATOR
```

where

- **PROCESS** is the Phyics process in the sample, e.g. QCD, TT, W, DY
- **RANGETYPE** is the variable the sample is binned in, e.g. PT,M
- **RANGELOW** is the lower bound of that range in GeV, e.g. 0,10,200
- **RANGEHIGH** is the upper bound
- **FILTER** denotes information on additional filters applied
- **TUNE** is the underlying-event tune (e.g. TuneZ2Star)
- **COMMENT** for additional comments
- **COMENERGY** cnter of mass collision enetgy, e.g. 7TeV, 10TeV
- **GENERATOR** is the generator used, e.g. pythia6, herwigpp, sherpa

Reference: [https://twiki.cern.ch/twiki/bin/viewauth/CMS/ProductionDataSetNames](https://twiki.cern.ch/twiki/bin/viewauth/CMS/ProductionDataSetNames)

## How to search CMS dataset for analysis

1. Locate data sample from DAS: [https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookLocatingDataSamples](https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookLocatingDataSamples)
2. To check the latest recommended available dataset check the official PdmV twiki: [https://twiki.cern.ch/twiki/bin/view/CMS/PdmV](https://twiki.cern.ch/twiki/bin/view/CMS/PdmV)
3. Generator group gitbook: [How to search for datasets in mcm](https://monte-carlo-production-tools.gitbook.io/project/analyzers-corner/how-to-search-for-datasets-in-mcm)

## Compute Cross Sections with the GenXSecAnalyzer

[https://twiki.cern.ch/twiki/bin/viewauth/CMS/HowToGenXSecAnalyzer](https://twiki.cern.ch/twiki/bin/viewauth/CMS/HowToGenXSecAnalyzer)

# FAQ

1. What is `PackedCandidate` collection?

   <span style="color:blue">
    
   </span>

1. What is difference between `PackedCandidate` and `associatedPackedPFCandidates`?

   <span style="color:blue">
   </span>

# HIP Problem (2016)

- High energy deposition in the bulk of the SiStrip sensors can cause a temporary saturation of the APV25 front-end chip and introduce significant dead-time into the detector readout system.
- The High Energy Deposition can be caused by inelastic interactions between hadrons and the nuclei of silicon sensors producing fragments that highly ionize the sensor: These particles are generally referred to as Highly Ionizing Particles.
- A HIP, when crossing a tracker module, can blind an APV for ~28 bunch crossings (~700ns).
- **pre-VFP era**: The era when the HIP effect was there. 
- **post-VFP era**: The era when the HIP effect was not there
- **VFP**: Preamplifier Feedback Voltage Bias

Detailed explanation of this effect: Master thesis of Markéta JANSOVÁ:  https://cds.cern.ch/record/2647308/files/CERN-THESIS-2018-242.pdf

