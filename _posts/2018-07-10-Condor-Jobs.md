---
layout: post
title: "Condor Jobs"
date: 2018-07-10
categories: lpc condor cms
---
* Do not remove this line (it will not be displayed)
{:toc}

# Condor Commands Summary

![condorjobs]({{ site.url }}/assets/condor_jobs.png)

# See interactive running status of a job

```sh
condor_tail [clusterID].[processID] -f
```

- `-f` : if you want to follow the output and see the updates immediately

# Debug Condor Issue (generally the Ideal stage)

```sh
condor_q [job-ID] -analyze
```
   or  

```sh
condor_q [job-ID] -better-analyze
```

In case if the jobs remain in ideal state then we can see using this why the status is ideal.

# General Info

eos commands are not accessible from condor jobs. As generally the general eos commands are alias of main commands. So, in condor jobs we have to use the main commands not alias.

## Condor Examples

Ref: [http://batchdocs.web.cern.ch/batchdocs/tutorial/exercise1a.html](http://batchdocs.web.cern.ch/batchdocs/tutorial/exercise1a.html)

For condor jobs we have to make two files. First file is the condor submit descriptor file and another file is the shell script.

First File: **RunGENSIMRAW_condor.jdl**

```sh
Executable = runstep2condor.sh
Universe = vanilla
Notification = ERROR
Should_Transfer_Files = YES
WhenToTransferOutput = ON_EXIT
request_memory = 5001
Transfer_Input_Files = runstep2condor.sh, python/produceWWNtuples.py
x509userproxy = $ENV(X509_USER_PROXY)
Output = DYJetsToLL_0J_TuneCP5_13TeV-amcatnloFXFX-pythia8_0.stdout
Error  = DYJetsToLL_0J_TuneCP5_13TeV-amcatnloFXFX-pythia8_0.stdout
Log  = DYJetsToLL_0J_TuneCP5_13TeV-amcatnloFXFX-pythia8_0.log
Arguments = -n DYJetsToLL -o DYJetsToLL_0 -w 0.0 -no 1 -noNeg 0 -lumi 35900.0 --ismc 1 -trig 1 -c lpc -f listTemp.txt  
Queue
```

Second File: **RunGENSIMRAW_condor.sh**

```sh
#!/bin/bash
echo "Starting job on " `date`
echo "Running on: `uname -a`"
echo "System software: `cat /etc/redhat-release`"
source /cvmfs/cms.cern.ch/cmsset_default.sh
xrdcp -s root://cmseos.fnal.gov//store/user/rasharma/SecondStep/Run_2017/Frameworkupdate/WWTree_2020_01_18_00h09/CMSSW_9_4_13.tgz  .
tar -xf CMSSW_9_4_13.tgz
rm CMSSW_9_4_13.tgz
cd CMSSW_9_4_13/src/WWAnalysis/WWAnalysisRun2
echo "====> Remove any file with name similar to WWTree*.root... " 
rm WWTree*.root
scramv1 b ProjectRename
eval `scram runtime -sh`
python python/produceWWNtuples.py -i /store/user/lpcbacon/15/ $*
echo "====> List root files : " 
ls WWTree*.root
echo "====> copying WWTree*.root file to stores area..." 
xrdcp -f WWTree*.root root://cmseos.fnal.gov//store/user/rasharma/SecondStep/Run_2017/Frameworkupdate/WWTree_2020_01_18_00h09
rm WWTree*.root
cd ${_CONDOR_SCRATCH_DIR}
rm -rf CMSSW_9_4_13
```

# Some important notes

1. Don't execute das queries in batch jobs:
   ```
   It is not a good idea to execute das queries in batch jobs, because it could overwhelm the database if thousands of jobs send simultaneous requests.

   Instead, you should execute your cmsDriver.py command locally with the --no_exec option, and then in your job script, do:
   cmsRun [config]
   where [config] is the output python config file from cmsDriver.py.
   ```

2. **PROXY ISSUE**: At LXPLUS we may have the issue with reading the remote files and the error message will be something like:
   ```
   Error in <TNetXNGFile::Open>: [ERROR] Server responded with an error: [3011] No servers are available to read the file.
   ```
   To get rid of this we need to map our proxy properly in the condor script. For this follow the following steps:
   1. After setting proxy do
      ```
      cp /tmp/x509up_u117617 /afs/cern.ch/user/z/zewang/
      export X509_USER_PROXY=/afs/cern.ch/user/z/zewang/x509up_u117617
      ```
      **Remember to submit jobs from this terminal only**
   2. In condor jdl file add the following line:
      ```
      x509userproxy = $ENV(X509_USER_PROXY)
      ```

# Reference

1. Condor Guide (lxplus): [link](http://batchdocs.web.cern.ch/batchdocs/index.html)

2. [http://batchdocs.web.cern.ch/batchdocs/local/quick.html](http://batchdocs.web.cern.ch/batchdocs/local/quick.html)

3. [https://indico.cern.ch/event/366578/sessions/73138/attachments/728847/1000050/LHC_.pdf](https://indico.cern.ch/event/366578/sessions/73138/attachments/728847/1000050/LHC_.pdf)

4. [https://stackoverflow.com/questions/13157442/condor-output-file-updating](https://stackoverflow.com/questions/13157442/condor-output-file-updating)

5. [http://research.cs.wisc.edu/htcondor/manual/v7.6/2_5Submitting_Job.html](http://research.cs.wisc.edu/htcondor/manual/v7.6/2_5Submitting_Job.html)

6. [http://uscms.org/uscms_at_work/computing/setup/batch_systems.shtml](http://uscms.org/uscms_at_work/computing/setup/batch_systems.shtml)

# Few Specific Examples
Run MadGraph Jobs through condor

1. [https://github.com/ram1123/MadGraph_With_Condor](https://github.com/ram1123/MadGraph_With_Condor)
