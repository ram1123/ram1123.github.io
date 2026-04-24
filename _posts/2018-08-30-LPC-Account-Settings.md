---
layout: post
title: "LPC Account Setting"
date: 2018-08-30
tags: lpc cluster settings
categories: grid
giscus_comments: true
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

# Switch to bash shell

Reference: e-mail by `Dr. Marguerite Tonjes` dated August 30, 2018 on `lpc-howto`.

```
Many users choose to have bash as their default shell (tsch is the current default on the CMS LPC CAF - cmslpc machines.)

1) find out what shell you have right now:
echo $0

Or find your default shell with: finger username

2) Change your shell (you may wish to do this as changing shell by hand fails to pick up the EOS aliases):
https://uscms.org/uscms_at_work/computing/setup/setup_software.shtml#shell

3) When you change your default shell you don't have the nice command line information. To do that, add the following to your ~/.bash_profile file on the cluster:
source /etc/bashrc

4) In your next login you will have a nicer formatted command line telling you [username@machine directory]$

5) Note we put that in the ~/.bash_profile because that's executed only upon Login before you get the command line. That way it doesn't affect bash scripts.

6) You may also wish to add this to your ~/.bash_profile to setup the CMS environment so you can use "cmsenv":
source /cvmfs/cms.cern.ch/cmsset_default.sh
```

# perl warning while cmsenv

```bash
perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
    LANGUAGE = (unset),
    LC_ALL = (unset),
    LC_CTYPE = "UTF-8",
    LANG = "C"
    are supported and installed on your system.
perl: warning: Falling back to the standard locale ("C").
```

To fix this, run the following command in your local laptop terminal:

```bash
export LC_CTYPE=en_US.UTF-8
```

You can add this into your `.bash_profile` file so that this runs every time you open your terminal.

Reference: historical notes on fixing UTF-8 font issues in macOS SSH terminals.

# Prevent SSH from disconnecting

Because of firewall or load-balancer the ssh session drops after being in ideal state for some time. To prevent this, one can configure the session to keepalive, which will prevent the the network device to consider it as ideal.

There are two methods. First method:

```bash
ssh -o "ServerAliveInterval 60" <SERVER_ADDRESS>
```

Second method: If one wants to keep all the ssh session alive then the keepalive information can be passed to the `.ssh/config` file. For this add

```bash
ServerAliveInterval 60
```

this line in file `/etc/ssh/ssh_config` or `~/.ssh/config`.

Reference: [https://superuser.com/questions/699676/how-to-prevent-ssh-from-disconnecting-if-its-been-idle-for-a-while](https://superuser.com/questions/699676/how-to-prevent-ssh-from-disconnecting-if-its-been-idle-for-a-while)
