---
layout: post
title: "Explore HLT Configuration Editor"
date: 2019-04-09
categories: [cms, HLT]
giscus_comments: true
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# confdb

This should work: [https://indico.cern.ch/event/850482/contributions/3574537/attachments/1921748/3179298/20191008_HLTTutorial_ConfDB_KPLee_v2_1.pdf](https://indico.cern.ch/event/850482/contributions/3574537/attachments/1921748/3179298/20191008_HLTTutorial_ConfDB_KPLee_v2_1.pdf)

last time I directly cloned

```bash
git clone <https://github.com/cms-sw/hlt-confdb>
```

then

```bash
./start
```

# Steps

1. Go to: `https://cmsweb.cern.ch/confdb/`
2. click on `Explore Database`
3. click on `cdaq`
4. click on `Physics`
5. click on `Run2016` or whatever run you would like to see
6. click on special run or on `25ns15e33` (e.g.)
7. click on the **latest version**
8. Then click on the detailed view
9. Search your **trigger** from the list
10. Select the last filter of the sequence
