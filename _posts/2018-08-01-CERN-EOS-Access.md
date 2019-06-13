---
layout: post
title: "EOS uses"
date: 2018-07-26
categories: eos cern cms condor lpc
---

* Do not remove this line (it will not be displayed)
{:toc}


# Some EOS related useful commands

- Copy file from eos to local area: **`eos cp /eos/cms/store/user/<UserName>/test.root <Path_Local>`**

- copy recursive the complete hierarchy in a directory: **`eos cp -r /eos/cms/store/<Path_of_file>  <outputpath>`**

- Find all file under eos directory: **`eos find -f /eos/cms/user/t/test`**

- Find all directory under eos : **`eos find -d /eos/cms/user/t/test`**

- Find command on eos: **`eos root://cmseos.fnal.gov find`**

# Some Scripts

## copy files from eos to present working directory (pwd)

**For tcsh shell**

```bash
#!/usr/bin/env tcsh
foreach file ( <store-Path>*.root )
    xrdcp -f $file .
end
```

### Command To check file size and file number

```bash
find . -maxdepth 1 -type d -print0 | xargs -0 -I {} sh -c 'echo  $(find "{}" -printf "\n" | wc -l) "{}"' | sort -n -r
```

```
Here,
    "." => Preset working directory
    "-maxdepth 1 " => Show only for directories in PWD
    "-type d" => Show only for directories
```

### Check file size
```bash
du -h --max-depth=1 . | sort -n -r
```

Reference:
https://stackoverflow.com/questions/9157138/recursively-counting-files-in-a-linux-directory/26458853#26458853
http://www.ducea.com/2006/05/14/tip-how-to-sort-folders-by-size-with-one-command-line-in-linux/

# Open a file from EOS

To open a file we must specify the redirector to find the file. This redirector depends on our region, to minimize the distance over which the data must travel and thus minimizing the reading latency.

- If working in US: **`root://cmsxrootd.fnal.gov//`**

- if working in Europe and Asia: **`root://xrootd-cms.infn.it//`**

- global redirector: **`root://cms-xrd-global.cern.ch//`**

- Open a file using ROOT: If you are using bare ROOT, you can open files in the xrootd service just like you would any other file:

```c++
TFile *f =TFile::Open("root://cmsxrootd.fnal.gov///store/mc/SAM/GenericTTbar/GEN-SIM-RECO/CMSSW_5_3_1_START53_V5-v1/0013/CE4D66EB-5AAE-E111-96D6-003048D37524.root");
```

**BEWARE:** Do not use the apparently equivalent syntax, which is known not to work :

```c+++
TFile("root://cmsxrootd.fnal.gov//store/foo/bar")
```

# Open a file in condor batch or CERN batch jobs

## Condor Jobs

If one wants to use local condor batch to analyze user/group skims located at remote sites. The only modification needed is adding:

```bash
use_x509userproxy = true
```

in your condor jdl file (the file which defines universe, Executable, etc..).

**Remember**: Before submitting the jobs you must have a valid grid proxy. For this run the command:

```bash
voms-proxy-init --voms cms --valid 168:00
```

Output of above command contains your valid grid proxy. Condor will pass this information to the working node of the condor batch.

## CERN Batch Jobs

Jobs submitted to the CERN batch farm will look for a valid grid proxy in the location pointed to by the environment variable $X509_USER_PROXY. (If $X509_USER_PROXY is not set, Xrootd looks for the proxy in the default location in /tmp.)

To make your proxy available to the lxbatch jobs, first copy your proxy to an area in afs, for example your home directory:

```bash
cp /tmp/x509up_uXXXX  /afs/cern.ch/user/u/username/
```

If you are submitting a job with **`bsub myscript.sh`**, then in **`myscript.sh`**, set this environment variable:

```bash
export X509_USER_PROXY=/afs/cern.ch/user/u/username/x509up_uXXXX
```

Reference: [https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookXrootdService](https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookXrootdService)

# FNAL EOS (some useful commands)

Ref: http://uscms.org/uscms_at_work/computing/LPC/usingEOSAtLPC.shtml

- Check personal quota:   **`eosquota`**

- Check group quota: **`eosgrpquota lnujj`**

- Reading from from FNAL eos: **`root://cmseos.fnal.gov//store/`**



# Disk Quota Info

## LPC

EOS = 2 TB /user

/uscms_data = 100 GB/user

/uscms home = 2 GB/user

Space without quota for 3 day life time /uscmst1b_scratch/lpc1/3DayLifetime/<username> . As the name suggest data will be deleted automatically after 3 days.

Checking quota: quota -s

## LXPLUS

- work = 100 GB/user (max)
- check quota using: `fs listquota`
- Lxplus commands: [https://twiki.cern.ch/twiki/bin/view/Main/HowtoUseLxplus](https://twiki.cern.ch/twiki/bin/view/Main/HowtoUseLxplus)

Reference: 
[http://uscms.org/uscms_at_work/computing/setup/diskusage.shtml](http://uscms.org/uscms_at_work/computing/setup/diskusage.shtml) 

Computing at LPC: [http://lpc.fnal.gov/computing/index.shtml](http://lpc.fnal.gov/computing/index.shtml)

## TIFR account details

- Log in into TIFR account: **`ssh -X <username>@ui.indiacms.res.in`**

- path of LFN : **`/store/user/username`**

- To access LFN type this command:   **`$voms-proxy-init --voms cms `**

- To change password type:  **`$passwd`**

- Site Name for crab jobs:  **`T2_IN_TIFR`**

- To List the files do:   **`$rfdir /dpm/indiacms.res.in/home/cms/store/user/<userName>`**

- To delete files   **`$rfrm path/of/store/`**

- For sotring data use T3 space whose path is  **`/home/<userName>/t3store`**

- Path of T2 directory:   **`/dpm/indiacms.res.in/home/cms/store/user/<userName>`**

- in CRAB jobs if you white-list **`T2_IN_TIFR`** for stageout then crab3 will automatically write at that location. stageout location will be **`/store/user/rasharma`**

- To copy file from ui to lxplus:

    ```bash
    xrdcp root://se01.indiacms.res.in//store/user/<userName>/Path_of_file /localpath
    ```

- To open file at uiwith root in lxplus:

    ```bash
    root -l root://se01.indiacms.res.in//store/user/rchawla/DrellYan-Analysis/DYToEE_M-800_CT10_TuneZ2star_8TeV-powheg-pythia6/crab_DrellYan-Analysis/150511_195346/0000/DYEE_M800_8TeV_AOD_1.root
    ```