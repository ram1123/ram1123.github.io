---
layout: post
title: "Bash Shell"
date: 2019-10-04
categories: bash shell programming
comments: true
---
* Do not remove this line (it will not be displayed)
{:toc}


# Convert number from decimal to hexadecimal

```bash=
 echo "ibase=10; obase=16; 29" | bc
```
**output:**
```bash=
1D
```

# Check the running time of bash script

```bash
start=`date +%s`
stuff1
end=`date +%s`

runtime=$((end-start))
```

Reference: [https://unix.stackexchange.com/a/52347](https://unix.stackexchange.com/a/52347)
