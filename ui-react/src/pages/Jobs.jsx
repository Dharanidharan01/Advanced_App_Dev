import React from 'react';
import { Link } from 'react-router-dom';
const Jobs = ({ jobDetails }) => {
  return (
    <div>
      <h1>Job Details</h1>
      <p>Title: {jobDetails.title}</p>
      <p>Description: {jobDetails.description}</p>
      <p>Requirements: {jobDetails.requirements}</p>
      {/* Display other job details similarly */}
    </div>
  );
};
  
  export default Jobs;
  