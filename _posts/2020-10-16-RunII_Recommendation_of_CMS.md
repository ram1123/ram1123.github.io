---
layout: post
title: "RunII Recommendation of CMS"
date: 2020-10-16
categories: cms HEPAnalysis
tags: physics cms CMSrecommendation
giscus_comments: true
last_modified_at: 2022-05-11
---

***Table of Contents***

- [NanoAOD](#nanoaod)
- [pdmv page](#pdmv-page)
- [Data](#data)
- [Luminosity](#luminosity)
- [EGamma](#egamma)
- [Muons](#muons)
- [Jet](#jet)
- [MET](#met)
- [Systematic Uncertainty (Run-2)](#systematic-uncertainty-run-2)
- [Theory Uncertainty](#theory-uncertainty)
- [FAQ](#faq)

# NanoAOD

- NanoAOD twiki: [NanoAOD workbook](https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookNanoAOD)


# pdmv page

- Main page: [https://twiki.cern.ch/twiki/bin/view/CMS/PdmV](https://twiki.cern.ch/twiki/bin/view/CMS/PdmV)
- UL information: [https://twiki.cern.ch/twiki/bin/view/CMS/PdmVRun2LegacyAnalysis](https://twiki.cern.ch/twiki/bin/view/CMS/PdmVRun2LegacyAnalysis)


# Data

- Golden JSON files can be grabbed from here: [https://twiki.cern.ch/twiki/bin/viewauth/CMS/TWikiLUM](https://twiki.cern.ch/twiki/bin/viewauth/CMS/TWikiLUM)


# Luminosity

- Luminosity Physics Object Group (Lumi POG) : [https://twiki.cern.ch/twiki/bin/view/CMS/TWikiLUM#SummaryTable](https://twiki.cern.ch/twiki/bin/view/CMS/TWikiLUM#SummaryTable)


# EGamma

1. CMS Official EGamma twiki:
   - [https://twiki.cern.ch/twiki/bin/view/CMS/EgammaPOG](https://twiki.cern.ch/twiki/bin/view/CMS/EgammaPOG)
2. EGamma Identification
   - [https://twiki.cern.ch/twiki/bin/view/CMS/EgIdentification](https://twiki.cern.ch/twiki/bin/view/CMS/EgIdentification)
3. EGamma Effective area correction:
   - [https://twiki.cern.ch/twiki/bin/view/CMS/EgammaEARhoCorrection](https://twiki.cern.ch/twiki/bin/view/CMS/EgammaEARhoCorrection)
4. EGamma Scale Facor: [EgammaSFJSON](https://twiki.cern.ch/twiki/bin/viewauth/CMS/EgammaSFJSON)


# Muons

1. Muon base line selection for runII
   - [https://twiki.cern.ch/twiki/bin/view/CMS/SWGuideMuonIdRun2](https://twiki.cern.ch/twiki/bin/view/CMS/SWGuideMuonIdRun2)


# Jet

1. [https://twiki.cern.ch/twiki/bin/viewauth/CMS/JetID](https://twiki.cern.ch/twiki/bin/viewauth/CMS/JetID)
2. b Tag & Vertexing Physics Object Group
   - [https://twiki.cern.ch/twiki/bin/view/CMS/BtagPOG](https://twiki.cern.ch/twiki/bin/view/CMS/BtagPOG)
   - Recommendation for Using b-tag Objects in Physics Analyses
     - [https://twiki.cern.ch/twiki/bin/viewauth/CMS/BtagRecommendation](https://twiki.cern.ch/twiki/bin/viewauth/CMS/BtagRecommendation)
3. Recommended Jet Energy Corrections and Uncertainties For Data and MC
   - [https://twiki.cern.ch/twiki/bin/view/CMS/JECDataMC](https://twiki.cern.ch/twiki/bin/view/CMS/JECDataMC)


# MET

1. CMS official MET twiki:
   - [https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookMetAnalysis](https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookMetAnalysis)
2. MET Filters:
   - [https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookMetAnalysis#7_7_5_MET_Filters](https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookMetAnalysis#7_7_5_MET_Filters)
3. MET Corrections:
   - [https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookMetAnalysis#7_7_6_MET_Corrections](https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookMetAnalysis#7_7_6_MET_Corrections)


# Systematic Uncertainty (Run-2)

- [https://twiki.cern.ch/twiki/bin/view/CMS/TopSystematics](https://twiki.cern.ch/twiki/bin/view/CMS/TopSystematics)


## Theory Uncertainty

[https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideEWKUtilities#PDF_SYSTEMATICS_PDFWeightProduce](https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideEWKUtilities#PDF_SYSTEMATICS_PDFWeightProduce)

1. PDF uncertainty calculation: [https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideEWKUtilities#PDF_SYSTEMATICS_PDFWeightProduce](https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideEWKUtilities#PDF_SYSTEMATICS_PDFWeightProduce)

Few good slides:

1. M. Ubiali slides on PDFs for LHC physics (historical reference; the original hosted PDF appears to have moved).
1. PDFs for LHC Physics: [https://indico.fnal.gov/event/24574/contributions/118019/attachments/76683/91877/huston_anl_2017.pdf](https://indico.fnal.gov/event/24574/contributions/118019/attachments/76683/91877/huston_anl_2017.pdf)


# FAQ

1. Difference between `miniAODv1` and `miniAODv2`?

   <span style="color:blue">
   MiniAODv2  includes the latest JECs by default, as well as the new PUPPI tune (for PUPPI jets and MET) and several new features listed here: [https://github.com/cms-sw/cmssw/issues/27889](https://github.com/cms-sw/cmssw/issues/27889). In MiniAODv1, one  need to reapply JECs and rerun PUPPI (if someone is using).
   </span>

   Reference:

   1. Historical CMS HyperNews discussion on MiniAOD campaigns (requires CMS access).


1. Difference between `Summer19` and `Summer20` campaign?

   <span style="color:blue">
   The RunIISummer19UL16(APV) samples have a bug in the beamspot position affecting only (most of the) 2016 samples.
   All Summer19UL samples are based on an older version of pythia. The difference of Summer19UL and Summer20UL due to the difference in the pythia version was studied and found negligible.
   </span>

   Reference: [https://twiki.cern.ch/twiki/bin/viewauth/CMS/PdmVRun2LegacyAnalysis](https://twiki.cern.ch/twiki/bin/viewauth/CMS/PdmVRun2LegacyAnalysis)


1. EE L1 pre-firing issue

   <span style="color:blue">
   - Only exists for 2016 and 2017
   </span>


1. HEM Issue

   <span style="color:blue">
   Due to the power interruptions caused by the false fire alarms on June 30th, the power supply of the two HCAL modules died in the negative endcap. The effected modules were HEM15 and HEM16. These two modules could no longer be operated until the end of 2018 run. This starts with the regular physics run >= 319077 (i.e. last certified run of 2018B and all of 2018C and D). A 40 degree section (eta -3.0 to -1.3 and phi -1.57 to -0.87) in HCAL was off.
   </span>

   <span style="color:blue">
   It was decided not to emulate this effect in the central MC productions for physics analysis. For the HEM effect, no recipe exists. But, all the analyses are recommended to check following:
   - should check the impact of this issue in the problematic region i.e. eta -3.0 to -1.3 and phi -1.57 to -0.87.
   - Compare data before and after the onset of the problem
   - Check the effect of the missing HCAL information on the fake rates
   - Check the effect on the signal acceptance
   </span>

   For more information check the following references:

   1. [https://twiki.cern.ch/twiki/bin/view/CMS/JetMET](https://twiki.cern.ch/twiki/bin/view/CMS/JetMET)
   1. Historical CMS HyperNews discussion on JetMET recommendations (requires CMS access).
   1. [https://twiki.cern.ch/twiki/bin/viewauth/CMS/ExoPreapprovalChecklist](https://twiki.cern.ch/twiki/bin/viewauth/CMS/ExoPreapprovalChecklist)
   1. [https://indico.cern.ch/event/1001783/contributions/4211420/attachments/2180698/3683527/HEMIssueCHeck_3l_channel.pdf](https://indico.cern.ch/event/1001783/contributions/4211420/attachments/2180698/3683527/HEMIssueCHeck_3l_channel.pdf)


1. MET Filters

   <span style="color:blue">
   - MET filters are used to remove events with spurious MET with an uninteresting casuses such as detector noise, beam halo, cosmic rays, etc.
   </span>

   List of filters listed on the official twiki of JET-MET: [MET Filters Run-II](https://twiki.cern.ch/twiki/bin/view/CMS/MissingETOptionalFiltersRun2#Run_2_recommendations)


1. EGamma VALIDATION OF 2018 UL CAMPAIGN: [talk link](https://indico.cern.ch/event/851469/contributions/3613719/attachments/1931979/3200689/2018ULvalidation_22oct2019.pdf)
