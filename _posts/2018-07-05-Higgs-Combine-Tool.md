---
layout: post
title: "Higgs Combine Tool"
date: 2018-07-05
categories: statistics
tags: statistics cms-combine
giscus_comments: true
last_modified_at: 2022-05-10
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# What is CMS Combine tool?

RooStats/RooFit - based software tools used for statistical analysis within the CMS. This provides a command line interface to many different statistical techniques available inside RooFit/RooStat.

# Some references

1. Github page of CMS combine document: [link](https://cms-analysis.github.io/HiggsAnalysis-CombinedLimit/)
1. Combine Tutorial: Fit Diagnostics: [link](https://indico.cern.ch/event/677948/contributions/2776352/attachments/1550599/2468832/HComb-Tutorial-FitDiagnostics.pdf)
1. Debugging failing fits: [link](https://indico.cern.ch/event/976099/contributions/4138476/attachments/2163625/3651175/CombineTutorial-2020-debugging.pdf)
1. Higgs combine tutorial links: [link](https://cms-analysis.github.io/HiggsAnalysis-CombinedLimit/latest/part4/usefullinks/)

# FAQ

1. Conventions to be used when preparing inputs for Higgs combinations: [link](https://twiki.cern.ch/twiki/bin/view/CMS/HiggsWG/HiggsCombinationConventions)

2. How we can fit and float the rate for a particular process:

<span style="color:blue">
For this in combine there is an option of "rateParam". We can check more details here: [link1](https://twiki.cern.ch/twiki/bin/view/CMS/HiggsWG/SWGuideNonStandardCombineUses#Rate_Parameters) and [link2](https://cms-analysis.github.io/HiggsAnalysis-CombinedLimit/latest/part5/longexercise/#a-use-of-rateparams)
</span>

3. To freeze we can use the following syntax:

   ```
   Yield_qqZZ rateParam a2_recobin0 bkg_qqzz  1
   nuisance edit  freeze Yield_qqZZ
   ```
