---
layout: post
title: "MadGraph: General Questions"
date: 2019-07-09
categories: monte-carlo madgraph
comments: true
---

* Do not remove this line (it will not be displayed)
{:toc}

# Some questions

## CMS perspective only

1. Why do we need reweight card?

2. Does only customozed card work?

## General Questions

1. What is the meaning of `[QCD]` syntax?
   ```
   This adds one additional jet in the channel.
   ```

1. What is the meaning of `[noborn=QCD]` syntax?

   ```
   Generally, all relevant matrix elements has three kind of diagrams. They are born (tree level diagrams), virtual and real-emission. 
   
   One can use the different kind of syntax depending on the use. If we would like to ignore the tree level diagrams then we should use the syntax of [noborn=QCD]. 

   Other possibilities are [real=QCD] or [loop=QCD] to exclude the virtual diagrams.
   ```

2. What is the meaning of the order QED/QCD?

   ```
   By default madgraph takes lowest order of QED and highest order of QCD.







