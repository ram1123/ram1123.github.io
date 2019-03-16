---
layout: post
title: "CMS Grid Certificate"
date: 2018-08-17
categories: grid cms 
---

* Do not remove this line (it will not be displayed)
{:toc}

# Grid Certificate Installation

- Get new grid certificate from link : https://ca.cern.ch/ca/

- Backup certificate from Firefox and name is as cert.p12.

    + You can see this step here: https://ca.cern.ch/ca/Help/?kbid=040111

- Copy file cert.p12 on lxplus (or lpc) home directory.

- Go to lxplus and run following commands:

```bash
mkdir $HOME/.globus
openssl pkcs12 -in cert.p12 -clcerts -nokeys -out $HOME/.globus/usercert.pem
openssl pkcs12 -in cert.p12 -nocerts -out $HOME/.globus/userkey.pem
chmod 400 $HOME/.globus/userkey.pem
chmod 600 $HOME/.globus/usercert.pem
chmod go-rx $HOME/.globus
fs setacl -dir $HOME/.globus -acl system:anyuser l   # this command will work on lxplus  only
voms-proxy-init -voms cms
voms-proxy-info -all
```

# computing at LPC

Link: [https://lpc.fnal.gov/computing/](https://lpc.fnal.gov/computing/)

# Change the default shell at lpc:

Reference: [http://uscms.org/uscms_at_work/computing/setup/setup_software.shtml#shell](http://uscms.org/uscms_at_work/computing/setup/setup_software.shtml#shell)