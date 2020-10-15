---
layout: post
title: "Latex Commands"
date: 2018-05-25
categories: latex
comments: true
---
* Do not remove this line (it will not be displayed)
{:toc}

# Figures

## Firures Positioning 

Few important points to note:
1. The content of the image should not be broken over page.
2. It should be labelled and correctly referenced.

|specifier | positioning place |
|:--- |:--- |
|h | place here |
|t | top of page |
|b | bottom of page |
|p | on a special page |
|! | force the position |
|H | place precisely at the location where it is defined |

Reference: https://www.overleaf.com/learn/latex/Positioning_of_Figures

## Put figure at the center

For this we need to use the `\centering` as shown below:

```latex
\begin{figure}
\centering
\includegraphics{test.pdf}
\end{figure}
```

## Multiple Figures
### way-1

```latex
\begin{figure}[!htbp]
    \centering
    \begin{subfigure}[b]{0.5\textwidth}
        %\includegraphics[width=7.5cm, height=5.5cm]{Indian_foils_H20.pdf}
        \includegraphics[width=7.5cm, height=5.5cm]{figures/GEM/figures/Fig_11(a).pdf}
        \caption{ }
        \label{fig:Indian_foils_H20}
    \end{subfigure}
    \begin{subfigure}[b]{0.46\textwidth}
        %\includegraphics[width=7.5cm, height=5.5cm]{CERN_foils.pdf} 
        \includegraphics[width=7.5cm, height=5.5cm]{figures/GEM/figures/Fig_11(b).pdf} 
        \caption{ }
        \label{fig:CERN_foils}
    \end{subfigure}
   \caption{Leakage Current of (a) Micropack Foils and (b) CERN Foils, at an average temperature of T=27$^{\circ}$C and relative humidity equal to 20\%.} \label{fig:L_01}
\end{figure}
```

This will look like:

![way-1]({{ site.url }}/assets/latex/latex-way-1.png){:height="560px" width="900px"}

### Way-2

```latex
\begin{figure}[!htbp]
    \begin{center}
      \includegraphics[width=6cm,height=6cm]{figures/GEM/CurrentvsClusterSizeR1592R1646.png}%
      \includegraphics[width=6cm,height=6cm]{figures/GEM/CurrentvsClusterSizeR1869R1903.png}\\
      \includegraphics[width=6cm,height=6cm]{figures/GEM/CurrentvsClusterSizeR2065R2123.png}
    \end{center}
    \caption{Cluster size distribution with different fiducial region: Left - Run1592\_R1646 in ($\eta$, $\phi$) = (5,2), Right - Run1869\_R1903 in ($\eta$, $\phi$) = (8,2), Bottom - Run2065\_R2123 in ($\eta$, $\phi$) = (1,2)}
  \label{fig:CSDfiducialregion}
\end{figure}
```

This will look like:
![way-2]({{ site.url }}/assets/latex/latex-way-2.png){:height="560px" width="900px"}

### way-3

```latex
\begin{figure}[htbp] 
   \centering 
   \begin{tabular}{cc}
   \includegraphics[width=0.48\textwidth]{Plots/BackgroundEstimation/WV/m_lvj_fitting/WWTree_STop_m_lvj_sb_loExpN_with_pull.pdf}
   \includegraphics[width=0.48\textwidth]{Plots/BackgroundEstimation/WV/m_lvj_fitting/WWTree_STop_m_lvj_signal_regionExpN_with_pull.pdf}\\
   \includegraphics[width=0.48\textwidth]{Plots/BackgroundEstimation/WV/m_lvj_fitting/WWTree_TTbar_m_lvj_sb_loExpN_with_pull.pdf}
   \includegraphics[width=0.48\textwidth]{Plots/BackgroundEstimation/WV/m_lvj_fitting/WWTree_TTbar_m_lvj_signal_regionExpN_with_pull.pdf}\\
   \includegraphics[width=0.48\textwidth]{Plots/BackgroundEstimation/WV/m_lvj_fitting/WWTree_VJets_m_lvj_sb_loExpTail_with_pull.pdf}
   \includegraphics[width=0.48\textwidth]{Plots/BackgroundEstimation/WV/m_lvj_fitting/WWTree_VJets_m_lvj_signal_regionExpTail_with_pull.pdf}\\
   \includegraphics[width=0.48\textwidth]{Plots/BackgroundEstimation/WV/m_lvj_fitting/WWTree_VV_EWK_QCD_m_lvj_sb_loExpN_with_pull.pdf}
   \includegraphics[width=0.48\textwidth]{Plots/BackgroundEstimation/WV/m_lvj_fitting/WWTree_VV_EWK_QCD_m_lvj_signal_regionExpTail_with_pull.pdf}
   \end{tabular}
   \caption{MC-data and fit shape $m_{WV}$ distributions in the sideband (left) and signal regions (right). From top to bottom: single top, $t\bar{t}$, $W+$jets and dibosons.}
   \label{fig:mWW_1}
\end{figure}
```

This will look like:

![way-3]({{ site.url }}/assets/latex/latex-way-3.png){:height="560px" width="900px"}

## sub-figures
Ref-1: [https://tex.stackexchange.com/questions/132599/placement-of-images-in-row-using-subfigure](https://tex.stackexchange.com/questions/132599/placement-of-images-in-row-using-subfigure)

Ref-2: [https://tex.stackexchange.com/questions/278727/split-subfigures-over-multiple-pages](https://tex.stackexchange.com/questions/278727/split-subfigures-over-multiple-pages)


# Forcing Line-Break in \url{}
To line break we can use the sloppypar feature:

```latex
\begin{sloppypar}
Madgraph cards are located here: \url{https://github.com/cms-sw/genproductions/tree/pre2017/bin/MadGraph5_aMCatNLO/cards/production/13TeV/VBS/VVjj_semileptonic}
\end{sloppypar}
```

Reference: [https://tex.stackexchange.com/questions/3033/forcing-linebreaks-in-url](https://tex.stackexchange.com/questions/3033/forcing-linebreaks-in-url)


# Table with alternate color row
Reference: [https://tex.stackexchange.com/questions/5363/how-to-create-alternating-rows-in-a-table](https://tex.stackexchange.com/questions/5363/how-to-create-alternating-rows-in-a-table)

# How to use todonotes
Ref:1: [http://www.texample.net/tikz/examples/todo-notes/](http://www.texample.net/tikz/examples/todo-notes/)
Ref:2: [todonotes manual](https://mirror.hmc.edu/ctan/macros/latex/contrib/todonotes/todonotes.pdf)

```latex
\usepackage[colorlinks]{hyperref}
\usepackage[table]{xcolor}
\usepackage[colorinlistoftodos]{todonotes}
```

after `\begin{document}` put ` \listoftodos`

- To disable to-do notes without manually removing each one put 

```latex
\usepackage[disable]{todonotes}
```

## how to use todonotes in table

- Use option `inline`
- Also, you might need to use the `minipage` to restrict the size of table.

Reference: [https://tex.stackexchange.com/a/65120/41568](https://tex.stackexchange.com/a/65120/41568)

# Add Line number

```latex
\usepackage{lineno} % in preamble
% [...]
\linenumbers  % after \begin{document}
```

# Add Footnote in table

```latex
\begin{table}[htdp]
\begin{center}
\begin{tabular}{|c|c|c|}
\hline
& PatAddTTCoord & AddTTClusterTool\\
\hline
hit-efficiency\footnotemark & 93.2 \% & 90.6 \% \\
\hline
\end{tabular}
\end{center}
\label{tb:comp1}
\end{table}
 
\footnotetext[\value{footnote}]{Hit-efficiency is defined in section} 
```

# degree symbol

```latex
\documentclass{report}
\usepackage{siunitx}
\begin{document}
The angle is \ang{30}.
\end{document}
```

Reference: [https://tex.stackexchange.com/questions/384873/what-is-the-degree-symbol](https://tex.stackexchange.com/questions/384873/what-is-the-degree-symbol)

# Decrease top margin for table
Just use the `\vspace{-7.5em}` inside the table environment.

```latex
\begin{table}[ht]
\begin{adjustwidth}{-3cm}{}
\vspace{-7.5em}%
.....
\end{table}
```

Reference: [https://tex.stackexchange.com/a/168881/41568](https://tex.stackexchange.com/a/168881/41568)


# Big O and related notations in LaTeX

There are two possible ways to type the big O:

> $O(n\log{}n)$ % regular O
> 
> $\mathcal{O}(n\log{}n)$ % Open at top left

The latter produces the following:

$$\mathcal{O}(n\log{}n)$$

Reference: [https://texblog.org/2014/06/24/big-o-and-related-notations-in-latex/](https://texblog.org/2014/06/24/big-o-and-related-notations-in-latex/)

# chapter and section titles overlap removal

With `fancyhdr` sometimes chapter and section titles overlaps when they are long. It looks like:

![](https://i.stack.imgur.com/dLnYx.png)

To fix this replace:

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
```

with 

```latex
\usepackage{fancyhdr,ragged2e}
\fancyhead{}
\lhead{\parbox[t]{0.4\textwidth}{\RaggedRight\rightmark\strut}}
\rhead{\parbox[t]{0.4\textwidth}{\RaggedLeft\leftmark\strut}}
\setlength{\headheight}{5\baselineskip}
\pagestyle{fancy}
```

After fix it becomes:
![](https://i.stack.imgur.com/sLkYi.png)

Reference: [https://tex.stackexchange.com/a/419472](https://tex.stackexchange.com/a/419472)

# Add bibliograph

```latex
\usepackage[backend=bibtex,style=numeric,sorting=none]{biblatex}
\addbibresource{ThesisBibliography.bib} % ThesisBibliography.bib is the name of file where all the bibliography are listed.



% before end document
  \printbibliography
```

in file `ThesisBibliography.bib` add bibliography like

```latex
@TechReport{LHC-tdr-vol1,
  author      = {Bruning, Oliver S. and Collier, P. and Lebrun, P. and Myers, S. and Ostojic, R. and Poole, J. and Proudlock, P.},
  title       = {LHC Design Report Vol.1: The LHC Main Ring},
  institution = {CERN},
  year        = {2004},
  type        = {techreport},
  number      = {CERN-2004-003-V1, CERN-2004-003, CERN-2004-003-V-1},
  abstract    = {The LHC Design Report is presented in three volumes: the first concerns the main ring, the second the infrastructure and general services and the third, the injector chain. The conceptual design was published in 1995 and this report provides a snapshot of the detailed design as it stands at the time of writing - early 2004.},
  file        = {:/Users/ramkrishna/cernbox/ThesisReference_2018/LHC/CERN-2004-003-V1-ft.pdf:PDF},
  keywords    = {LHC},
  url         = {https://cds.cern.ch/record/782076},
}
```

Then run first the latex command theen `bibtex <fileNamee.tex>` then again latex command like below:

```latex
    pdflatex  thesis.tex
    bibtex thesis.tex
    pdflatex  thesis.tex
```

# Add appendix

```latex
\documentclass{book}
\usepackage[toc,page]{appendix}

\begin{document}
\tableofcontents

\chapter{Regular Chapter}
\begin{appendices}
\chapter{Some Appendix}
The contents...
\end{appendices}

\end{document}
```


