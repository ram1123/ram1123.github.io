---
layout: post
title: "Mac Settings"
date: 2018-07-12
categories: mac
comments: true
---

* Do not remove this line (it will not be displayed)
{:toc}

# Softwares to download

1. XCode

2. xquartz ([https://www.xquartz.org](https://www.xquartz.org)). As Mac OSX does not come with an X11 server installed.

3. Homebrew ([https://brew.sh](https://brew.sh))

4. Vidyo (For cern meetings)

5. LaTex

# Mattermost setting

1. How to browse: [https://mattermost.web.cern.ch](https://mattermost.web.cern.ch)

2. How to download: [https://about.mattermost.com/download/](https://about.mattermost.com/download/)

3. Settings to connect the app:

    **Server display name:** CERN

    **Server URL:** `https://mattermost.web.cern.ch`

# Vidyo settings

- Vidyo portal: `https://vidyoportal.cern.ch`

# HOW TO MAKE A BOOTABLE USB STICK FROM AN ISO FILE ON AN APPLE MAC OS X

Reference: [https://www.lewan.com/blog/2012/02/10/making-a-bootable-usb-stick-on-an-apple-mac-os-x-from-an-iso](https://www.lewan.com/blog/2012/02/10/making-a-bootable-usb-stick-on-an-apple-mac-os-x-from-an-iso)

# ROOT installation using homebrew

```bash
brew install root6
brew info root6
. $(brew --prefix root6)/libexec/thisroot.sh
```

Reference: [https://alexpearce.me/2016/02/root-on-os-x-el-capitan/](https://alexpearce.me/2016/02/root-on-os-x-el-capitan/)
