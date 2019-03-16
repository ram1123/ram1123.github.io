---
layout: post
title: "Condor Jobs"
date: 2018-07-10
tags: lpc condor cms
---
* Do not remove this line (it will not be displayed)
{:toc}

![condorjobs]({{ site.url }}/assets/condor_jobs.png)

# Command Description

```sh
condor_tail [clusterID].[processID] -f
```

- `-f` : if you want to follow the output and see the updates immediately

```sh
condor_q [job-ID] -analyze
```
   or  

```sh
condor_q [job-ID] -better-analyze
```

In case if the jobs remain in ideal state then we can see using this why the status is ideal.

eos commands are not accessible from condor jobs. As generally the general eos commands are alias of main commands. So, in condor jobs we have to use the main commands not alias.

# Condor Examples

Ref: [http://batchdocs.web.cern.ch/batchdocs/tutorial/exercise1a.html](http://batchdocs.web.cern.ch/batchdocs/tutorial/exercise1a.html)

For condor jobs we have to make two files. First file is the condor submit descriptor file and another file is the shell script.

First File: **RunGENSIMRAW_condor.jdl**

```sh
Executable = RunGENSIMRAW_condor.sh
Universe = vanilla
Requirements =FileSystemDomain=="fnal.gov" && Arch=="X86_64"
Notification = ERROR
Should_Transfer_Files = YES
WhenToTransferOutput = ON_EXIT
request_memory = 3000
transfer_input_files = RunGENSIMRAW_condor.sh,SMP-RunIISummer16DR80Premix-00158_1_cfg.py
x509userproxy = $ENV(X509_USER_PROXY)
Output = gen-sim-raw_$(Process).stdout
Error  = gen-sim-raw_$(Process).stdout
Log  = gen-sim-raw_$(Process).log
Arguments = inputFiles=_$(Process)_
Queue 1000
```

Second File: **RunGENSIMRAW_condor.sh**

```sh
#!/bin/bash
cd /uscms_data/d3/rasharma/aQGC_analysis/CMS_FulllSimulation_April2017/LHE_GEN/CMSSW_8_0_21/src
echo $PWD
eval `scram runtime -sh`
cd -
echo $PWD
a=$PWD
echo $a
b=$(echo $a | perl -pe 's/\//\\\//g')
echo $b
#perl -pe "s/RAMPATH/"$b"/g" SMP-RunIISummer15wmLHEGS-00029_Hadronization_1_cfg.py.bkup > SMP-RunIISummer15wmLHEGS-00090_1_cfg.py
cmsRun SMP-RunIISummer16DR80Premix-00158_1_cfg.py $*
echo "List all root files = "
ls *.root
echo "List all files"
ls 
echo "+=============================="

# copy output to eos
OUTDIR=root://cmseos.fnal.gov//store/user/rasharma/CMSSW_FullSimulation_April2017/New_21May2017/GEN_SIM_RAW/WPlepWMhadJJ_EWK_LO_aQGC-FT-FS-FM_mjj100VJpT10_Pythia8CUEP8M1_13TeV_Madgraph_ext1/
echo "xrdcp output for condor"
for FILE in SMP-RunIISummer16DR80Premix-00158*.root
do
  echo "xrdcp -f ${FILE} ${OUTDIR}/${FILE}"
  xrdcp -f ${FILE} ${OUTDIR}/${FILE} 2>&1
  XRDEXIT=$?
  if [[ $XRDEXIT -ne 0 ]]; then
    rm *.root
    echo "exit code $XRDEXIT, failure in xrdcp"
    exit $XRDEXIT
  fi
  rm ${FILE}
done
```

Reference:

1. [http://batchdocs.web.cern.ch/batchdocs/local/quick.html](http://batchdocs.web.cern.ch/batchdocs/local/quick.html)

2. [https://indico.cern.ch/event/366578/sessions/73138/attachments/728847/1000050/LHC_.pdf](https://indico.cern.ch/event/366578/sessions/73138/attachments/728847/1000050/LHC_.pdf)

3. [https://stackoverflow.com/questions/13157442/condor-output-file-updating](https://stackoverflow.com/questions/13157442/condor-output-file-updating)

4. [http://research.cs.wisc.edu/htcondor/manual/v7.6/2_5Submitting_Job.html](http://research.cs.wisc.edu/htcondor/manual/v7.6/2_5Submitting_Job.html)

5. [http://uscms.org/uscms_at_work/computing/setup/batch_systems.shtml](http://uscms.org/uscms_at_work/computing/setup/batch_systems.shtml)

# Few Specific Examples
Run MadGraph Jobs through condor

1. [https://github.com/ram1123/MadGraph_With_Condor](https://github.com/ram1123/MadGraph_With_Condor)
