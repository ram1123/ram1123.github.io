---
layout: post
title: "Different Configuration File Formats"
date: 2018-07-20
categories: python yaml 
comments: true
---
* Do not remove this line (it will not be displayed)
{:toc}

We need configuration file for arranging and using many information in a nice way. There are many configuration file formats like yaml, ini, etc.

# yaml file format
yaml [[1]] stands for "yet another markup language". It stores messages in terms of lists and dictionaries. It is optimized for data serialization, configuration settings, log files, etc.

Data can be stored in two types or the combination of these two types. They are:

1. sequences, and
2. mapping.

Sequence referes to :

```
  - Ram
  - Krishna
  - sharma
```

And mapping refers to:

```
  FirstName: Ram
  SecondName: Krishna
  LastName: sharma
```

There are many ways we can combine these two:


**mapping to sequences**


```
Name:
 - Ram krishna sharma
 - Archana Kumari
 - Test1
 - Test2
Test:
 - Test3
 - Test4
 - Test5
```


**sequences to mapping**


```
-
  Name: Ram krishna sharma
  sex: Male
  age: 29
-
  Name: Archana Kumari
  sex: Female
  age: 28
```

# Read yaml file

```python
import yaml

file = open("yamlfile.yml","r")
ymload = yaml.load(file)
file.close()

for sections in ymload:
  print sections
  print ymload[sections]
```


[1]: http://www.yaml.org/spec/history/2001-12-10.html


