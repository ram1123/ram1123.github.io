---
layout: post
title: "LCG uses at lxplus"
date: 2022-03-04
categories: tools
tags: cms LCG lxplus
giscus_comments: true
last_modified_at: 2022-03-04
description: "Using LCG software environments on CERN's lxplus cluster for CMS analysis and ROOT workflows."
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# Introduction

- LCG stands for LHC Computing Grid
- To setup the LCG software do:

  ```bash
  source /cvmfs/sft.cern.ch/lcg/views/<LCG Version>/<Architecture>/setup.(c)sh
  ```

  **_Example LCG command_**

  ```bash
  source /cvmfs/sft.cern.ch/lcg/views/LCG_100cuda/x86_64-centos7-gcc8-opt/setup.sh
  ```

- List of all available LCG environments can be find here: [https://lcginfo.cern.ch](https://lcginfo.cern.ch)
- Main info about LCG: [https://lcgdocs.web.cern.ch/lcgdocs/lcgreleases/introduction/](https://lcgdocs.web.cern.ch/lcgdocs/lcgreleases/introduction/)

# General commands

1. Check available python versions:

   ```bash
    python3 /cvmfs/cms-lpc.opensciencegrid.org/FNALLPC/lpc-scripts/GetPythonVersions.py -s
    python3 /cvmfs/cms-lpc.opensciencegrid.org/FNALLPC/lpc-scripts/GetPythonVersions.py -g 3.9.6 -l 101
   ```
