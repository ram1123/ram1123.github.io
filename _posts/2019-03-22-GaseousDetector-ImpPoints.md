---
layout: post
title: "Gaseous Detector: Important Points"
date: 2019-03-22
categories: GEM Detector
---
* Do not remove this line (it will not be displayed)
{:toc}

# Gain Measurement
The gain of a detector can be calculated using the ratio of output to the input value of current, like:
\begin{equation}
    Gain~=~\frac{I_{out}}{q~\times~f}
\end{equation}
where q is the charge collected at the first layer of GEM foil and is calculated as:
\begin{equation}
    q~= n~\times~e
\end{equation}
where e is the electron charge, n is the average number of electrons produced in the drift region by the incident particles and $f$ is the interaction rate of the incident particles in the gas. For the given X-ray source with a specific energy and the known ionization potential of the used gas mixture n can be calculated and in our case it is found to be $n \sim 290$.

# Transparancy
The fraction of ionization electrons transferred through the GEM foil is known as its *transparancy*. 
\begin{equation}
    Transparancy~=~\frac{Ionized~electron~transfered~through~GEM~foil}{Total~number~of~ionized~electrons}
\end{equation}
This is important while finding out the energy resolution and directly effects the gain/efficiency of detection.

# Charge-up Effect
The effect caused by the the electrons or ions coming from the primary or secondary ionization from the amplification region sticks to the insulator surface inside the GEM holes, which lead to the modification of electric field in the holes and is known as the ***charge-up effect***.

It has direct effect on the electron transparancy and the effective gain of the GEM detector.

Also, the charge-up effect depends on the geometry of the holes.
For the conical hole gain increases about 60\% than the cylindrical hole. There is no effect of the charge-up for the cylindrical hole.


# Townsend coefficient
The probability of ionization per unit path length is known as ***First Townsend Coefficient***. It is also defined as the inverse of mean free path.
\begin{equation}
    \alpha~=~\frac{1}{\lambda_{ion}}
\end{equation}

Also, number of secondary ionization created is given as:
\begin{equation}
    dn~=~n~.~\alpha~.~dx
\end{equation}
\begin{equation}
    n=n_0 e^{\alpha.x}
\end{equation}

Thus, gain will be
\begin{equation}
    Gain~=~\frac{n}{n_0}~=~e^{\alpha.x}
\end{equation}

# Raether Limit
After a certain critical limit, $Q_{critical}$, of the electron amplification the discharge is very likely to occur. This critical limit is known as the ***Raether limit.***
It is also given as:
\begin{equation}
    Q_{critical}~=~A_{max}~.~n_0
\end{equation}
where, $A_{max}$ is the maximum effective gain achieved by a gaseous detector and $n_0$ is the number of primary ionization electrons.

# Collectionn Efficiency
Collection efficiency is the ratio of the total electrons released from the bottom of GEM foil (last GEM foil in case of multiple foil used) to the number of electrons reached the readout board. 
\begin{equation}
    \text{Collection efficiency}~=~\frac{\text{Number of electrons reached readout board}}{\text{Total number of released electron from bottom of GEM foil}}
\end{equation}
Also, it depends on the ratio of the conversion electric field to the collection electric field. Higher the conversion field lesser the collection efficiency. In general the conversion field should never be greater than the collection field. 
