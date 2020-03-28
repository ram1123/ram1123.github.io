---
layout: post
title: "CMS Analysis"
date: 2020-03-19
categories: cms physics-analysis
---

* Do not remove this line (it will not be displayed)
{:toc}


# Important Steps With References


## CMS dataset naming convention

CMS dataset name follows the following convention:

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


# FAQ

1. What is `PackedCandidate` collection?

   <span style="color:blue">
    
   </span>

1. What is difference between `PackedCandidate` and `associatedPackedPFCandidates`?

   <span style="color:blue">
   </span>

