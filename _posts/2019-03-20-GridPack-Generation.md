---
layout: post
title: "GridPack Generation"
date: 2019-03-20
categories: [monte-carlo, madgraph]
tags: [monte-carlo, madgraph]
comments: true
---
* Do not remove this line (it will not be displayed)
{:toc}

# MadGraph Introduction

# Inputs for GridPack Generation
There are several input file one need for the GridPack generation. They are:
1. proc card: [Example](https://github.com/cms-sw/genproductions/blob/pre2017/bin/MadGraph5_aMCatNLO/cards/production/13TeV/VBS/VVjj_semileptonic/aQGC/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10_proc_card.dat)
    1. Proc card contains the information for the process to generate.

3. madspin card: [Example](https://github.com/cms-sw/genproductions/blob/pre2017/bin/MadGraph5_aMCatNLO/cards/production/13TeV/VBS/VVjj_semileptonic/aQGC/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10_madspin_card.dat)
    1. If one need to decay a particle (say W-boson) then add the corresponding information in this file.

1. run card: [Example](https://github.com/cms-sw/genproductions/blob/pre2017/bin/MadGraph5_aMCatNLO/cards/production/13TeV/VBS/VVjj_semileptonic/aQGC/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10_run_card.dat)
    1. run card sets parameters of run. Like: number of events, beam type and its energy, which pdf we would like to use, some cuts on particle properties like on pt, eta, etc.


4. model card: [Example](https://github.com/cms-sw/genproductions/blob/pre2017/bin/MadGraph5_aMCatNLO/cards/production/13TeV/VBS/VVjj_semileptonic/aQGC/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10_extramodels.dat)
    1. If the physics model that we are using is not SM then we need to add the model name in this card.
6. customize card: [Example](https://github.com/cms-sw/genproductions/blob/pre2017/bin/MadGraph5_aMCatNLO/cards/production/13TeV/VBS/VVjj_semileptonic/aQGC/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10_customizecards.dat)
    1. If one need to modify some parameter of the genration then pass the corresponding information in this file.
5. reweight card: [Example](https://github.com/cms-sw/genproductions/blob/pre2017/bin/MadGraph5_aMCatNLO/cards/production/13TeV/VBS/VVjj_semileptonic/aQGC/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10/aQGC_WPlepWMhadJJ_EWK_LO_NPle1_mjj100pt10_reweight_card.dat)
    1. If one need to generate sample with same model but by varying some parameter of a model. Then instead of generating additional sample for each parameter one can add these information in reweight card and it saves weights corresponding to each parameters.

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
    
### Gridpack generation using CMSConnect

Link: [https://indico.cern.ch/event/615524/contributions/2520456/attachments/1430441/2197104/March20_2017_gen_meeting.pdf#search=CMS%20Connect](https://indico.cern.ch/event/615524/contributions/2520456/attachments/1430441/2197104/March20_2017_gen_meeting.pdf#search=CMS%20Connect)

settings in gridpack generation script: [https://hypernews.cern.ch/HyperNews/CMS/get/generators/4398/1.html](https://hypernews.cern.ch/HyperNews/CMS/get/generators/4398/1.html)

CMS Connect: [https://indico.cern.ch/event/533066/contributions/2210983/attachments/1293988/1928544/CMSConnect.pdf](https://indico.cern.ch/event/533066/contributions/2210983/attachments/1293988/1928544/CMSConnect.pdf)

## Generate Events from GridPack

```bash
    cmsrel CMSSW_X_Y_Z 
    cd CMSSW_X_Y_Z/src
    cmsenv
    tar -xavf <path of gridpack creation>/<TarFileName>.tar.xz
    bash
    ./runcmsgrid.sh <NEvents> <RandomSeed> <NumberOfCPUs>
```

Reference: [https://twiki.cern.ch/twiki/bin/viewauth/CMS/QuickGuideMadGraph5aMCatNLO#Standalone_production_running_th](https://twiki.cern.ch/twiki/bin/viewauth/CMS/QuickGuideMadGraph5aMCatNLO#Standalone_production_running_th)

# FAQ

# Possible Issues



