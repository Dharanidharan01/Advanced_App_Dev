package com.job.jobpilot.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.job.jobpilot.dto.request.JobRequest;
import com.job.jobpilot.dto.request.JobUpdateRequest;
import com.job.jobpilot.model.Job;
import com.job.jobpilot.repository.JobRepo;
import com.job.jobpilot.service.JobService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JobServiceImpl implements JobService {
    private final JobRepo jobRepo;

    @Override
    public void createJob(JobRequest jobRequest)
    {
    Job job =new Job();
    job.setJobName(jobRequest.getJobName());
    job.setDescrption(jobRequest.getDescrption());
    job.setSalary(jobRequest.getSalary());
    jobRepo.save(job);     
    }

    @Override
    public void updateJob(long jid,JobUpdateRequest jobUpdateRequest){
        Job existingjob=jobRepo.findById(jid)
        .orElseThrow(() -> new RuntimeException("job Not Found"));
        existingjob.setJobName(jobUpdateRequest.getJobName());
        existingjob.setDescrption(jobUpdateRequest.getDescrption());
        existingjob.setSalary(jobUpdateRequest.getSalary());
    }

    @Override
    public void deleteJob(long jid) {
       jobRepo.deleteById(jid);
    }
    @Override
    public List<Job> getAllJob() {
        return jobRepo.findAll();
    }
}