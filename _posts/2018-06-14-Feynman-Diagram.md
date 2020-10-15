---
layout: post
title: "Feynman Diagram"
date: 2018-06-14
categories: latex
comments: true
---
* Do not remove this line (it will not be displayed)
{:toc}

Reference: [https://arxiv.org/pdf/1601.05437.pdf](https://arxiv.org/pdf/1601.05437.pdf)

```
\usepackage{feynman}
\usepackage{tikz-feynman}
```

Then make feynman diagram on paper and mark each vertex with latters a, b, c, etc. like below:

![feynmanDiag]({{ site.url }}/assets/IMG_20180511_103216554.jpg){:height="560px" width="900px"}

```
\begin{tikzpicture}[nodes=circle, Large]
\begin{feynman}[tree layout]
\vertex[blob, fill=black] (c) at ( 0, 0) {};
\vertex [above left=of c] (b);
\vertex [left=of b] (a) {(q)};
\vertex [above right=of b] (f1) {(q)};
\vertex [below left=of c] (d);
\vertex [left=of d] (e) {(\anti{q})};
\vertex [below right=of d] (f4) {(\anti{q})};
\vertex [above right=of c] (g);
\vertex [below right=of c] (h);
\vertex [above right=of g] (f5) {(l)};
\vertex [below right=of g] (f6) {(\nu_{l})};
\vertex [right=of h] (f7) {(q)};
\vertex [below right=of h] (f8) {(\anti{q})};
\diagram* {
(c) -- [boson] (b),
(c) -- [boson] (d),
(a) -- [fermion] (b) -- [fermion] (f1),
(e) -- [anti fermion] (d) -- [anti fermion] (f4),
(c) -- [boson, edge label=(W)] (g) -- [fermion] (f5),
(g) -- [anti fermion] (f6),
(c) -- [boson, edge label=(V)] (h) -- [fermion] (f7),
(h) -- [anti fermion] (f8),
};
\end{feynman}
\end{tikzpicture}
```

```
\begin{tikzpicture}[nodes=circle, Large]
    \begin{feynman}[tree layout]
    \vertex[blob, fill=black] (c) at ( 0, 0) {};
    \vertex [above left=of c] (b);
    \vertex [left=of b] (a) {(q)};
    \vertex [above right=of b] (f1) {(q)};
    \vertex [below left=of c] (d);
    \vertex [left=of d] (e) {(\anti{q})};
    \vertex [below right=of d] (f4) {(\anti{q})};
    \vertex [above right=of c] (g);
    \vertex [below right=of c] (h);
    \vertex [above right=of g] (f5) {(l)};
    \vertex [below right=of g] (f6) {(\anti{l})};
    \vertex [right=of h] (f7) {(q)};
    \vertex [below right=of h] (f8) {(\anti{q})};
    \diagram* {
    (c) -- [boson] (b),
    (c) -- [boson] (d),
    (a) -- [fermion] (b) -- [fermion] (f1),
    (e) -- [anti fermion] (d) -- [anti fermion] (f4),
    (c) -- [boson, edge label=(Z)] (g) -- [fermion] (f5),
    (g) -- [anti fermion] (f6),
    (c) -- [boson, edge label=(V)] (h) -- [fermion] (f7),
    (h) -- [anti fermion] (f8),
    };
    \end{feynman}
\end{tikzpicture}
```

Output of above two patches look like this:

![WV]({{ site.url }}/assets/FeynmanDiagram_WV.png){:height="560px" width="900px"}
![ZV]({{ site.url }}/assets/FeynmanDiagram_ZV.png){:height="560px" width="900px"}