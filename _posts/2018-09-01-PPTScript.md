---
layout: post
title: "PPT with plots in one click"
date: 2018-09-01
categories: latex
---
* Do not remove this line (it will not be displayed)
{:toc}


- Git clone the script 

    ```bash
    git clone https://github.com/ram1123/PPT_script.git
    ```

- Above command will create a directory named PPT_Script

- Put all of your plot file in this directory. 

    - Please name the plots as you want the title of the slide, just put different words together by underscore(\_). Because the name of file will become the heading of slide replacing underscore (\_) by spaces.

- Now Run the command ./MakePPT.sh

- But by default the script will take only *.pdf files only

- If you want to use any other format then use -f option of the script 

    ```bash
    ./MakePPT.sh -f jpg or ./MakePPT.sh -f jpeg
    ```

- Also by default it will make a pdf file named **ppt_test.pdf**

- If you want to get any other name then you can use -n option of the script 

    ```bash
    ./MakePPT.sh -n ram
    ```

- Then it will create output pdf file with name **ram.pdf**

- If you want to do both things at a time, i.e. change the file format to recognize and name of output file then you can use both option like 

    ```bash
    ./MakePPT.sh -f jpeg -n ram
    ```

- You May Get error if you don't have compiler pdflatex or other dependencies that is necessary for the beamer to make ppt.

- If you face any problem then you can post your problem on the link:[https://github.com/ram1123/PPT_script/issues](https://github.com/ram1123/PPT_script/issues). I will try to resolve the problem as soon as possible.