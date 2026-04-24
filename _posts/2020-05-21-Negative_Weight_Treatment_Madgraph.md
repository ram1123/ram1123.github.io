---
layout: post
title: "Negative Weight Treatment (Madgraph)"
date: 2020-05-21
categories: PhysicsAnalysis
tags: cms madgraph PhysicsAnalysis GenWeight
giscus_comments: true
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# Negative weights?

# How to handle it?

- Say if there are total of 100 events.. out of them 10 have -ve weights.
- so the 10 events that have -ve weights should be cancelled using 10 +ve weights so in general at the end of day we left we 80 events...
- but we don't just use the number 80 as it is
- We apply the weight (+1 or -1) to each event as per the weight.
- and we so the scaling like:
  ```bash
  (Cross-sectioon x Lumi) / (Nevents - 2*NNegevents)
  ```

# References

1. [https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideMCatNLOInterface](https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideMCatNLOInterface)
1. TMVA: Negative Weights in Reader; [https://sourceforge.net/p/tmva/mailman/tmva-users/?viewmonth=200901](https://sourceforge.net/p/tmva/mailman/tmva-users/?viewmonth=200901)
1. Statistical power of negative weights: [link](https://indico.cern.ch/event/402226/contributions/954106/attachments/805866/1104387/WG1_-_VH-VBF_subgroup_-_24-06-2015.pdf)
1. [https://cds.cern.ch/record/517223/files/cer-002273178.pdf](https://cds.cern.ch/record/517223/files/cer-002273178.pdf)
1. Mulders, M; Direct measurement of the W boson mass in $e^{+}e_{-}$ collisions at LEP; Amsterdam U. Amsterdam 2001. Public copy: [https://cds.cern.ch/record/517223/files/cer-002273178.pdf](https://cds.cern.ch/record/517223/files/cer-002273178.pdf)
1. Reason of negative weights; [https://arxiv.org/pdf/1908.00167.pdf](https://arxiv.org/pdf/1908.00167.pdf)
1. [https://arxiv.org/pdf/hep-ph/0204244.pdf](https://arxiv.org/pdf/hep-ph/0204244.pdf)
1. [https://indico.cern.ch/event/459797/contributions/1961581/attachments/1181555/1800214/mcaod-Feb15-2016.pdf](https://indico.cern.ch/event/459797/contributions/1961581/attachments/1181555/1800214/mcaod-Feb15-2016.pdf)
