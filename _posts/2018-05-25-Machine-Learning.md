---
layout: post
title: "Machine Learning"
date: 2018-05-25
categories: machine-learning
---
* Do not remove this line (it will not be displayed)
{:toc}

1. Online resources for ML: http://www.electronicdesign.com/industrial-automation/learning-machine-learning

2. Edward - a Python library for probabilistic modeling, inference, and criticism: link

3. (CERN Theory Colloquium) QCD-Aware Neural Networks for Jet Physics: link

# TMVA

## Error: signal and background histograms have different or invalid dimensions

The   source of this error is the decorrelation. In the default example many decorrelation functions are switched on but for BDT we don't need them at all. So, we need to skip the decorrelation part.

The default line in TMVA where this correlation was called is:

```
TMVA::Factory *factory = new TMVA::Factory( "TMVAClassification", outputFile, "!V:!Silent:Color:DrawProgressBar:Transformations=I;D;P;G,D:AnalysisType=Classification" );
```


In the above line we need to change "Transformations=I;D;P;G,D" to "Transformations=I"  (where I is for identity transformation).

### NegWeightTreatment?
```
For gradient boosting we should set NegWeightTreatment to Pray.
```

