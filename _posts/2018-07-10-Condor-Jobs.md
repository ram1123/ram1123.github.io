---
layout: post
title: "Condor Jobs"
date: 2018-07-10
categories: lpc condor cms
comments: true
---
* Do not remove this line (it will not be displayed)
{:toc}

# Condor Commands Summary

![condorjobs]({{ site.url }}/assets/condor_jobs.png)

# See interactive running status of a job

```sh
condor_tail [clusterID].[processID] -f
```

- `-f` : if you want to follow the output and see the updates immediately.
- This command is similar to the bash **tail -f** command.

# Debug Condor Issue

## Check reason for hold/Ideal
```sh
condor_q [job-ID] -analyze
```
   or  

```sh
condor_q [job-ID] -better-analyze
```

In case if the jobs remain in ideal state then we can see using this why the status is ideal.

## Fix hold without killing job
Reference: [https://indico.cern.ch/event/611296/contributions/2604376/attachments/1471164/2276521/TannenbaumT_UserTutorial.pdf](https://indico.cern.ch/event/611296/contributions/2604376/attachments/1471164/2276521/TannenbaumT_UserTutorial.pdf)

- If the job goes to hold because of memory issue then fix it like below:

  ```bash
  condor_qedit -name <Name of Scheduler>  <cluster>.<proc>  request_memory 5000
  ```

# General Info

eos commands are not accessible from condor jobs. As generally the general eos commands are alias of main commands. So, in condor jobs we have to use the main commands not alias.

For example: `eosls` command is the alias of `eos root://cmseos.fnal.gov ls`

List below shows general alias and its full command:

| alias | Command | Description
|--- |--- |--- |
|eosls | `eos root://cmseos.fnal.gov ls` | list files placed on EOS |
|cmsenv | `eval \`scramv1 runtime -sh\`` | load CMSSW environment |
|cmsrel | `scramv1 project CMSSW`| Get a particular CMSSW release |

## Condor Examples

Ref: [http://batchdocs.web.cern.ch/batchdocs/tutorial/exercise1a.html](http://batchdocs.web.cern.ch/batchdocs/tutorial/exercise1a.html)

For condor jobs we have to make two files. First file is the condor submit descriptor file and another file is the shell script.

First File: **test.jdl**

```sh
+JobFlavour = "espresso"   # this we need at lxplus not on lpc
Executable = DoubleHiggs_NonResonant.sh
Universe = vanilla
Notification = ERROR
Transfer_Input_Files = Hello_world.cpp, test.sh
x509userproxy = $ENV(X509_USER_PROXY)
Output = GF_HH_10_slc6_$(Cluster)_$(Process).stdout
Error  = GF_HH_10_slc6_$(Cluster)_$(Process).stdout
Log  = GF_HH_10_slc6_$(Cluster)_$(Process).log
Arguments = $(Cluster) $(Process) Hello_world.cpp
Queue 1
```

Second File: **test.sh**

```sh
#!/bin/bash

# I ADDED TOO MANY ECHO STATEMENT JUST TO SEE THE
# LOG FILE AND UNDERSTAND.

echo "Starting job on " `date`
echo "Running on: `uname -a`"
echo "System software: `cat /etc/redhat-release`"
source /cvmfs/cms.cern.ch/cmsset_default.sh
echo "###################################################"
echo "#    List of Input Arguments: "
echo "###################################################"
echo "Input Arguments (Cluster ID): $1"
echo "Input Arguments (Proc ID): $2"
echo "Input Arguments (Config file name): $3"
echo "###################################################"

# uncomment below line and give path of eos where output need to transfer
# OUTDIR=root://cmseos.fnal.gov//store/user/<userName>/

echo "==============================="
echo "==                        ====="
echo "==    List file in PWD    ====="
echo "PWD: "$PWD
ls
echo "==                        ====="
echo "==============================="
echo "==   Load CMSSW environment  =="
eval `scramv1 project CMSSW CMSSW_10_2_22`
# copy file Hello_world.cpp inside the CMSSW directory
cp Hello_world.cpp  CMSSW_10_2_22/src/
cd CMSSW_10_2_22/src/
# set cmssw environment
eval `scram runtime -sh`
echo "==============================="
echo "==                        ====="
echo "==    Running C++ program ====="
echo "==                        ====="
echo "==============================="
root -l -b -q Hello_world.cpp
echo "==============================="
echo "==                        ====="
echo "==    List file in PWD    ====="
echo "PWD: "$PWD
ls
echo "==                        ====="
echo "==============================="
echo "xrdcp output for condor"
# xrdcp -f outPut_${1}_${2}.root ${OUTDIR}/outPut_${1}_${2}.root
# here $1 and $2 is the cluster ID and job ID and it is passed 
# through the arguments from jdl file
echo "==============================="
echo "==                        ====="
echo "==    List file in PWD    ====="
echo "PWD: "$PWD
ls
echo "==                        ====="
echo "==============================="
date
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
   a) After setting proxy do
      ```
      cp /tmp/x509up_u117617 /afs/cern.ch/user/<NameInitial>/<UserName>/
      export X509_USER_PROXY=/afs/cern.ch/user/<NameInitial>/<UserName>/x509up_u117617
      ```
      Here, `/tmp/x509up_u117617` is the file as you got while setting the proxy using
      `voms-proxy-init --voms cms --valid 168:00`

      **Remember to submit jobs from this terminal only**
      
   b) In condor jdl file add the following line:
      ```
      x509userproxy = $ENV(X509_USER_PROXY)
      ```

3. **Change of schedular at lxplus**: If you want to switch to schedular named `bigbird17` then use command:
   ```bash
   export _condor_SCHEDD_HOST=bigbird17.cern.ch
   export _condor_CREDD_HOST=bigbird17.cern.ch
   ```

# Reference

1. Lxplus condor tutorial: [link](https://indico.cern.ch/event/611296/contributions/2604376/attachments/1471164/2276521/TannenbaumT_UserTutorial.pdf)

2. Condor Guide (lxplus): [link](http://batchdocs.web.cern.ch/batchdocs/index.html)

2. [http://batchdocs.web.cern.ch/batchdocs/local/quick.html](http://batchdocs.web.cern.ch/batchdocs/local/quick.html)

3. [https://indico.cern.ch/event/366578/sessions/73138/attachments/728847/1000050/LHC_.pdf](https://indico.cern.ch/event/366578/sessions/73138/attachments/728847/1000050/LHC_.pdf)

4. [https://stackoverflow.com/questions/13157442/condor-output-file-updating](https://stackoverflow.com/questions/13157442/condor-output-file-updating)

5. [http://research.cs.wisc.edu/htcondor/manual/v7.6/2_5Submitting_Job.html](http://research.cs.wisc.edu/htcondor/manual/v7.6/2_5Submitting_Job.html)

6. [http://uscms.org/uscms_at_work/computing/setup/batch_systems.shtml](http://uscms.org/uscms_at_work/computing/setup/batch_systems.shtml)

# Few Specific Examples
Run MadGraph Jobs through condor

1. [https://github.com/ram1123/MadGraph_With_Condor](https://github.com/ram1123/MadGraph_With_Condor)
