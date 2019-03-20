---
layout: post
title: "GridPack Generation"
date: 2019-03-20
categories: monte-carlo madgraph
---
* Do not remove this line (it will not be displayed)
{:toc}

# MadGraph Introduction

# Inputs for GridPack Generation
There are several input file one need for the GridPack generation. They are:
1. run card: [Example]()
2. proc card: [Example]()
3. decay card: [Example]()
4. model card: [Example]()

# How To Generate

## Generate GridPack

1. Checkout the `genproductions` package from github:
    ```bash
    git clone https://github.com/cms-sw/genproductions.git
    ```
1. Add the necessary input cards at the appropriate place:
    ```bash
    #Path where one need to put cards
    cd bin/MadGraph5_aMCatNLO/cards/production/13TeV/
    #create the directory where you will put the cards
    mkdir Test
    #Place the cards inside the `Test` directory
    ```
    Example card:
    [https://github.com/ram1123/genproductions/tree/673e25b126d618890dd6dc5bbd8cc88bc0faf816/bin/MadGraph5_aMCatNLO/cards/production/13TeV/AnomalousCouplings-SMP/aQGC_WPlepWMhadJJ_EWK_LO_NPle1](https://github.com/ram1123/genproductions/tree/673e25b126d618890dd6dc5bbd8cc88bc0faf816/bin/MadGraph5_aMCatNLO/cards/production/13TeV/AnomalousCouplings-SMP/aQGC_WPlepWMhadJJ_EWK_LO_NPle1)

1. To run gridpack generation interactively:
    ```bash
    gridpack_generation.sh <CardName> <CardPath>
    ```
1. Submit the batch job for gridpack generation
    ```bash
    ./submit_gridpack_generation.sh <memoryInMBytes> <diskInMBytes> <queueForMasterJob> <name of process card without _proc_card.dat> <folder containing cards relative to current location> <queue>
    ```
    
## Generate Events from GridPack

```bash
    cmsrel CMSSW_X_Y_Z 
    cd CMSSW_X_Y_Z/src
    cmsenv
    tar -xavf <path of gridpack creation>/wplustest_LO_tarball.tar.xz
    bash
    ./runcmsgrid.sh <NEvents> <RandomSeed> <NumberOfCPUs>
```

Reference: [Reference: https://twiki.cern.ch/twiki/bin/viewauth/CMS/QuickGuideMadGraph5aMCatNLO#Standalone_production_running_th](Reference: https://twiki.cern.ch/twiki/bin/viewauth/CMS/QuickGuideMadGraph5aMCatNLO#Standalone_production_running_th)

# FAQ

# Possible Issues



