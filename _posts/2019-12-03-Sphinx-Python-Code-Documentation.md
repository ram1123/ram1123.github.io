---
layout: post
title: "Sphinx: Python code documentation tool"
date: 2019-12-03
categories: tools
comments: true
---

* Do not remove this line (it will not be displayed)
{:toc}

# Sphinx Python Code Documentation Tool

Reference: [https://sphinx-rtd-tutorial.readthedocs.io/en/latest/sphinx-quickstart.html](https://sphinx-rtd-tutorial.readthedocs.io/en/latest/sphinx-quickstart.html)


## Summary of instructions

```bash
mkdir docs
cd docs
sphinx-quickstart
cd source
vi conf.py
```

- Update  in conf.py

```
html_theme = 'sphinx_rtd_theme'
```

- Also update path of source code, i.e, uncomment below patch     

```bash
import os    
import sys    
sys.path.insert(0, os.path.abspath('../../simpleble/'))
```

- Generating document

```bash
sphinx-apidoc -o ./source ../simpleble
make clean
make html
```

- If command `make html` complains about some module not found then skip them using command:

```python
autodoc_mock_imports = ["ROOT"]
```