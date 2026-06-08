---
layout: post
title: "rename multiple files"
date: 2018-07-30
categories: programming
tags: rename
giscus_comments: true
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

---

# rename command

```bash
    rename searchWord replaceWord  <InputFile>
```

---

# rename files using move command in for loop

```bash
    for file in File*.dat
    do
        mv -i "${file}" "${file/SearchWord/ReplacementWord}"
        # Here -i option will ask everytime for replacing name.
    done
```
