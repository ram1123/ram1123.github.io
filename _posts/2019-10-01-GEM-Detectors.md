---
layout: post
title: "GEM Detectors"
date: 2019-10-01
categories: gem
comments: true
---
* Do not remove this line (it will not be displayed)
{:toc}

# Steps of GEM fabrication

1. Make GEM foil
2. Clean it
    1. Chemical used for cleaning (fast cleaning)
        2. Permanganate soude
        3. Sulphate dyhroxy amonium (if some bubble is there then do step 1 and 2 again)
        4. chromic acid
        5. after each previous step wash GEM foil with water and DI water.
3. Check IV
    1. If it is sparking much then again try to clean then check IV.
    2. At 600 V current should not be more than 1-2 nA.
    3. IV characteristics should be measured in **air** with normal humidity. If we decrease the humidity then we will hide the problem. Also this process removes the dust, if any, in the holes of GEM.

# Viton o-ring
Two types of viton o-ring is there. One is harder than another. Softer one is more useful for our use.

To clean the viton o-ring just warm it in the vacuum chamber.

# GEM detector electronics chain

![GEM Detector electronics chain]({{ site.url }}/assets/GEM/GEM_Detector_Electronics_Chain.jpg){:height="560px" width="900px"}

## Discriminator

- Discriminator is a high gain amplifier.
- Its input is **analog signal**, while output is **digital signal**.
- Its output comes:
    + after a fixed delay (optional)
    + if the signal exceeds the threshold.

### Systematic diagram of simplest discriminator

![simplest_discriminator]({{ site.url }}/assets/GEM/simplest_discriminator.jpg){:height="290px" width="900px"}

