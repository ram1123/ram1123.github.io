---
layout: post
title: "How To AN in CMS"
date: 2018-05-24
categories: svn cms
comments: true
---

* Do not remove this line (it will not be displayed)
{:toc}



# How to:

 svn instructions in detail are here:
[https://twiki.cern.ch/twiki/bin/view/CMS/Internal/TdrProcessing](https://twiki.cern.ch/twiki/bin/view/CMS/Internal/TdrProcessing
)

But here is what you need to do in your lxplus home directory:

# Checkout repository

- if working locally you need to use lxplus user name

    ```sh
    svn co -N svn+ssh://rasharma@svn.cern.ch/reps/tdr2 MyAN  
    ```

- if working at lxplus

    ```sh
    svn co -N svn+ssh://svn.cern.ch/reps/tdr2 MyAN
    ```

Then use following commands (assume that then AN on which you are working is `AN-17-236`:

```sh  
cd MyAN
svn update utils
svn update -N notes
svn update notes/AN-17-236
eval `notes/tdr runtime -sh`
cd notes/AN-17-236/trunk/
tdr  --draft --style=an b AN-17-236
```

Now you can look at the pdf in `~/MyAN/notes/tmp/AN-17-236_temp.pdf`

If it looks as the latest version here: https://twiki.cern.ch/twiki/pub/CMS/PPbCentralityAN/AN-13-060_Febr21.pdf

then you start editing the text file in ~/MyAN/notes/AN-17-236/trunk/srcs/montecarlo.tex

If you think it is done you run `tdr  --draft --style=an b AN-17-236` again

If you don't see any latex errors or warnings and the pdf also looks nice then you can check in with

```sh
svn ci -m "my comment e.g. MC section started" srcs/montecarlo.tex
```

more additions:
1. any time you want to edit please type: svn up first!
2. you can check what you changed with svn status
3. if you add plots then put it in pdf inside figures directory in some subdirectory and the you need to type

    ```sh
    svn add figures/subdir/newplot.pdf and the svn ci -m ""
    ```
4. 