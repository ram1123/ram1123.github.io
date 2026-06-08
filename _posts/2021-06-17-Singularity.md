---
layout: post
title: "Singularity at CMS"
date: 2021-06-17
categories: tools
tags: cms singularity
giscus_comments: true
description: "Using Singularity containers for CMS analysis — setup, running CMSSW, and grid submission."
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# Brief info about singularity

# Instructions

One just need to type `cmssw-cc6` after login to the lxplus to get the sl6 image. Then start working as usual.

```bash
ssh lxplus.cern.ch
cmssw-cc6
cmsrel CMSSW_xx_x_xx
```

# Some reference links

1. Using singularity to develop/run CMSSW: [http://cms-sw.github.io/singularity.html](http://cms-sw.github.io/singularity.html)
1. [https://uscms.org/uscms_at_work/computing/setup/setup_software.shtml#singularity](https://uscms.org/uscms_at_work/computing/setup/setup_software.shtml#singularity)
1. Docker and singularity: [https://awesome-workshop.github.io/docker-singularity-hats/index.html](https://awesome-workshop.github.io/docker-singularity-hats/index.html)
