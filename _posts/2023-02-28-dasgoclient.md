---
layout: post
title: "dasgoclient"
date: 2023-02-28
categories: tools
giscus_comments: true
description: "Using the DAS (Data Aggregation System) command-line client to query CMS datasets and file lists."
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# Introduction

# How to use

- General:

```bash
dasgoclient --query="dataset=/VH*/*Summer20UL*/MINIAODSIM"
```

- use `instance=prod/phys03`, if we are searching for user published dataset

```bash
dasgoclient --query="dataset=/VH*/*Summer20UL*/USER instance=prod/phys03"
```
