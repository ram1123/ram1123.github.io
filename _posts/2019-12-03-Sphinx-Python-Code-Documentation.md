---
layout: post
title: "Sphinx: Python code documentation tool"
date: 2019-12-03
categories: tools
tags: sphinx docGenerator
giscus_comments: true
last_modified_at: 2022-04-28
description: "How to document Python code with Sphinx — autodoc, RST format, and publishing to Read the Docs."
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# Sphinx Python Code Documentation Tool

Reference: [https://sphinx-rtd-tutorial.readthedocs.io/en/latest/sphinx-quickstart.html](https://sphinx-rtd-tutorial.readthedocs.io/en/latest/sphinx-quickstart.html)

# Basic setup of page

1.  Create a directory

        mkdir docs
        cd docs

2.  Best to use the virtual environment

        python -m venv .venv

    Activate the virtual environment, each time before the work

        source .venv/bin/activate

3.  Install the necessary packages within the virtual environment

        source .venv/bin/activate
        # first upgrade the pip
        pip install --upgrade pip
        pip install sphinx
        pip install myst-parser
        pip install sphinx_rtd_theme
        pip install sphinx-autobuild

    Alternatively, you can also create a `requirement.txt` file whose content will be

        sphinx
        myst-parser
        sphinx_rtd_theme
        sphinx-autobuild

    Then, just install all these packages like

        pip install -r requirement.txt

    Also, the `requirement.txt` file is necessary when we upload this to the readthedocs to make our webpage live. So, its good to create this file.

4.  Basic setup:

        cd docs
        sphinx-quickstart
        make html

    To check the created webpage:

        python -m http.server

    If this does not work try following (Reference: [https://stackoverflow.com/a/69387071/2302094](https://stackoverflow.com/a/69387071/2302094)):

        python -m http.server 8000 --bind 127.0.0.1

5.  To view the live updates of your webpage:

        sphinx-autobuild source build/html

    If the `autobuild` is not installed, then install it using:

        pip install sphinx-autobuild

# Other general features/changes

1.  Change the theme

    To change the theme, one need to install the theme and update it in the `conf.py` file.

    Install the theme:

        pip install sphinx_rtd_theme

    Update the theme in `conf.py`

        html_theme = 'sphinx_rtd_theme'

1.  Add other file

        ```{include} ../../README.md
        ```

# Some old stuff (Need to update below part...)

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

# Lxplus settings

To use sphinx on lxplus cluster:

```bash
source /cvmfs/sft.cern.ch/lcg/views/dev4cuda/latest/x86_64-centos7-gcc11-opt/setup.sh
```
