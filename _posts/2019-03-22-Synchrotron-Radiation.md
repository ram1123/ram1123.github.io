---
layout: post
comments: true
title: "Synchrotron Radiation"
date: 2019-03-22
categories: detector accelerator
---
* Do not remove this line (it will not be displayed)
{:toc}

In a circular collider, for a particle moving with velocity, v ($$\approx c$$) acceleration (a) is given by

\begin{equation}
	a = \frac{c^2}{R}
\end{equation}

Where, $$c$$ is velocity of light and $$R$$ is the radius of collider. The radiation rate is the product of Larmor formula and the forth power of Lorentz boost factor, i.e.

\begin{equation}
	P~(energy~radiated~per~second) = \frac{e^2}{6\pi \epsilon_0} \frac{a^2}{c^3} \gamma^4
\end{equation}

We can rewrite equation-2 using equation-1 and fine-structure constant, $$\alpha$$, as

\begin{equation}
	P~(energy~radiated~per~second) = \frac{2}{3}(\alpha \hbar c) c \frac{\gamma^4}{R^2}
\end{equation}

where,

\begin{equation}
	\alpha = \frac{e^2}{4 \pi \epsilon_0 \hbar c}
\end{equation}

Time taken by particle in one turn is $$2\pi R/v$$, so

\begin{equation}
	\Delta E~(energy~per~turn) = \frac{4\pi}{3}(\alpha \hbar c) \frac{\gamma^4}{R} = \frac{4\pi}{3}(\alpha \hbar c) \frac{E^4}{m^4_0}\frac{1}{R} 
\end{equation}

where $$m_0$$ is the rest mass of moving particle. Thus we can compare the radiation loss for protons and electrons using above formula. Ratio of energy loss per turn for electron and protons is

\begin{equation}
	\frac{\Delta E_e}{\Delta E_p} = \frac{m_p^4}{m_e^4} = 1.14 \times 10^{13}
\end{equation}

