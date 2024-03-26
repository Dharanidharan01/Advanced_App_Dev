package com.job.jobpilot.service;

import java.util.List;

import com.job.jobpilot.dto.request.JobRequest;
import com.job.jobpilot.dto.request.JobUpdateRequest;
import com.job.jobpilot.model.Job;

public interface JobService {

    void createJob(JobRequest jobRequest);
    void updateJob(long jid, JobUpdateRequest jobUpdaterequest);
    void deleteJob(long jid);
    List<Job> getAllJob();
}