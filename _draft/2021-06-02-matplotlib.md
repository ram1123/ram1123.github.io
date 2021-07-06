---
layout: post
title: "matplotlib"
date: 2021-06-02
categories: python, matplotlib
comments: true
---

* Do not remove this line (it will not be displayed)
{:toc}

# How to plot

```python
import matplotlib.pyplot as plt
plt.hist("VariableName", bins=100, range=(0, 1550), label=var_plots,alpha=0.6)
plt.xlabel("VariableName")
plt.ylabel('Number of events')
plt.yscale('log')
plt.legend()
plt.ioff() # to turn off the displaying plots.
# plt.show()
plt.savefig('VariableName.png')
plt.savefig('VariableName.pdf')
plt.close()
```

# Difference between clf(), cla(), and close()

- `plt.cla()`: clears an axes, i.e. the currently active axes in the current figure. It leaves the other axes untouched.
- `plt.clf()`: clears the entire current figure with all its axes, but leaves the window opened, such that it may be reused for other plots.
- `plt.close()`: closes a window, which will be the current window, if not specified otherwise.

Reference: https://stackoverflow.com/a/8228808/2302094
