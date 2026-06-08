---
layout: post
title: "CMS Grid Certificate"
date: 2018-08-17
tags: cern cms grid
categories: grid
giscus_comments: true
description: "Step-by-step guide to obtaining a CERN/CMS grid certificate and registering with VOMS."
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# Grid Certificate Installation

- Get new grid certificate from link : [https://ca.cern.ch/ca/](https://ca.cern.ch/ca/)

- Backup certificate from FireFox/safari and name it as cert.p12.

  - You can see this step here: [https://ca.cern.ch/ca/Help/?kbid=040111](https://ca.cern.ch/ca/Help/?kbid=040111)
  - For mac safari: [https://ca.cern.ch/ca/Help/?kbid=060111&mode=print](https://ca.cern.ch/ca/Help/?kbid=060111&mode=print)

- Copy file `cert.p12` on lxplus (or lpc) home directory.

- To create the .pem files from the .p12 certicicate, and set the correct permissions. Go to lxplus and run following commands:

  ```bash
  mkdir $HOME/.globus
  openssl pkcs12 -in cert.p12 -clcerts -nokeys -out $HOME/.globus/usercert.pem
  openssl pkcs12 -in cert.p12 -nocerts -out $HOME/.globus/userkey.pem
  chmod 400 $HOME/.globus/userkey.pem
  chmod 600 $HOME/.globus/usercert.pem
  chmod go-rx $HOME/.globus
  fs setacl -dir $HOME/.globus -acl system:anyuser l   # this command will work on lxplus  only
  ```

- Test the setup using:

  ```bash
  voms-proxy-init -voms cms
  voms-proxy-info -all
  ```

# Check when is your certificate expiring (From lxplus terminal)

```bash
openssl x509  -subject -dates -noout  -in $HOME/.globus/usercert.pem
```

# computing at LPC

Link: [https://lpc.fnal.gov/computing/](https://lpc.fnal.gov/computing/)

# Change the default shell at lpc:

Reference: [http://uscms.org/uscms_at_work/computing/setup/setup_software.shtml#shell](http://uscms.org/uscms_at_work/computing/setup/setup_software.shtml#shell)
