---
layout: post
title: "Bash Shell"
date: 2019-10-04
categories: bash shell programming
comments: true
---
* Do not remove this line (it will not be displayed)
{:toc}

# Bash Manual

https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents


# Strip directory and suffix from a file name

https://www.gnu.org/software/coreutils/manual/html_node/basename-invocation.html#basename-invocation

# Check if two files are different sizes

```bash
if [ $(stat -c %s FILE1.txt) -ne $(stat -c %s FILE2.txt) ]; then
   echo "They're different."
fi
```

or

```bash
# SYNOPSIS
#   fileSize file ...
# DESCRIPTION
#   Returns the size of the specified file(s) in bytes, with each file's
#   size on a separate output line.
fileSize() {
  local optChar='c' fmtString='%s'
  [[ $(uname) =~ Darwin|BSD ]] && { optChar='f'; fmtString='%z'; }
  stat -$optChar "$fmtString" "$@"
}

if (( $(fileSize FILE1.txt) != $(fileSize FILE2.txt) )); then
  echo "They're different."
fi
```

Reference: https://stackoverflow.com/q/23331864/2302094

# Comparison Operators

Reference: [http://tldp.org/LDP/abs/html/comparison-ops.html](http://tldp.org/LDP/abs/html/comparison-ops.html)


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
