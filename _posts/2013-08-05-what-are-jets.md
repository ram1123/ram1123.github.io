---
layout: post
title: "What are Jets?"
date: 2013-08-05
categories: [physics, jet]
giscus_comments: true
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# Towards Jetography paper

Almost immediately after production a quark or gluon fragments and hadronises, leading to a collimated spray of energetic hadrons, which is known as **jets**[^jetography].

[^jetography]: Towards jetography, Eur. Phys. J. C (2010)67:637

Now, the question arise in detector:

- How to group particles into jet?
- How to assign a momentum to the resulting jet?

# Fundamental of particles and their interactions by william B. Rolnick

- Since the coloured objects can't break free, pairs will be created by virtual gluons in such a way as to make each emerging particles a colourless (bound) hadron. This is called **Hadronization**.
- High-energy jets of hadrons emerge from the collision in transverse directions, one jet moving in the direction of each one of the (fast-moving) scattered quarks, so that we expect to see two high-energy jets of "scattered" particles. Their existence is a verification of the existence of the quarks themselves, even though the quarks cannot be produced as free particles.
- In QED particle-particle scatterings are always accompanied by scatterings which produce an extra photon and that effect is reffered to as bremsstrahlung. Its rate and angular distribution, as compared to photonless scattering, is successfully calculated in QED. Similar situation exists in QCD.

  Gluon bremsstrahlung, at the expected rate and with the correct angular distribution, has been seen as three-jet events (since gluons are also coloured and, therefore, can't be produced as free particles). This is a direct verification of the existence of the gauge particles (gluons) of QCD.

# Different possible origin of parton that lead of jet

**[1-4] references in Towares jetography paper]**

1. In $2\rightarrow 2$ scattering of partons the energy of jet is closely related to that of the parton in the proton that underwent a hard scattering and the inclusive jet spectrum therefore contains information on the distribution of partons inside the proton and also on the strength of their interaction.
2. From hadronic decay of a heavy particle we get the partons that lead to jets. e.g. top quark, Higgs bosons, etc.

   If at tree-level, the heavy particle decay to many partons then a high multiplicity of corresponding jets may be a sign of the presence of that particle; and the sum of the momenta of the jets should have an invariant mass that is close to that of heavy particle. This feature is used for the measurement of the top-quark mass.

3. Jets may originate radiatively, for example, from the emission of a gluon off some other parton in the event.

   The rate of production of such jets provide information on the value of strong coupling and is related also to the colour structure of events.

   This is also useful to discriminate between Higgs-boson production through electroweak vector-boson fusion (which radiates less) and through gluon-fusion (which radiates more).

# Others

- Radiative emission of partons is also one of the main backgrounds to multijet signals of new physics.
- When a highly boosted W or Z boson decays to partons, those partons may be so collimated by the boost that they will lead to single jet, albeit it one with substructure. Also, QCD radiative corrections inevitably give substructure to jets. Much as the number of jets and their kinematics can be ussed to learn about the properties of the event, so can the structure within the jets.
- Generally, there is no single optimal way of defining jets.
- Also, the idea behind the jet definitions are varied.
- At LHC, the increase in particle multiplicity is due to following reasons:
  - due to high energy
  - most of it will be consequence of the multiple minimum bias interactions (pileup) or soft hadronic process that will occur in each bunch crossing.

# Jet Algorithm

Jet algorithms provide a set of rules for grouping particles into jets.

1. They usually involve one or more parameters that indicate how close two particles must be for them to belong to the same jet.
2. They are associated with a recombination scheme, which indicates what momentum to assign to the combination of two particles (the simplest is the 4-vector sum).

Taken together, a jet algorithm with its parameters and a recombination scheme form a "jet algorithm".

Several important properties met by a jet definitions are:

1. Simple to implement in an experimental analysis.
2. Simple to implement in the theoretical calculation.
3. Defined at any order of perturbation theory.
4. Yields finite cross-sections at any order of perturbation theory.
5. Yields a cross-section i.e. ralatively insensitive to hadronization.

Jet algorithms are divided into two broad categories:

1. Based on "cones", and
2. Sequential recombination algorithms.

## Based on Cones

It relying on the idea of QCD branching and hadronization leaves the bulk feature of an events energy flow unchanged (specifically, energy flow into a cone).

## Sequential recombination algorithm

It repeatedly recombine the closest pair of particles according to some distance measure, usually related to the divergent structure of QCD matrix elements.
