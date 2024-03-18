import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Link } from 'react-router-dom';

const DetailDashboard = () => {
  // Mock data for demonstration
  const totalApplications = 50;
  const shortlistedPercentage = 30;
  const onHoldPercentage = 15;

  // Calculate counts for shortlisted and on hold
  const shortlistedCount = Math.round(totalApplications * (shortlistedPercentage / 100));
  const onHoldCount = Math.round(totalApplications * (onHoldPercentage / 100));

  const applicationsChartRef = useRef(null);
  const shortlistedChartRef = useRef(null);
  const onHoldChartRef = useRef(null);

  useEffect(() => {
    const applicationsChart = new Chart(applicationsChartRef.current, {
      type: 'pie',
      data: {
        labels: ['Total Applications', 'Shortlisted', 'On Hold'],
        datasets: [{
          label: 'Applications',
          data: [totalApplications, shortlistedCount, onHoldCount],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverOffset: 4
        }]
      }
    });

    const shortlistedChart = new Chart(shortlistedChartRef.current, {
      type: 'pie',
      data: {
        labels: ['Shortlisted', 'Remaining'],
        datasets: [{
          label: 'Shortlisted',
          data: [shortlistedCount, totalApplications - shortlistedCount],
          backgroundColor: [
            '#36A2EB',
            '#EAEAEA'
          ],
          hoverOffset: 4
        }]
      }
    });

    const onHoldChart = new Chart(onHoldChartRef.current, {
      type: 'pie',
      data: {
        labels: ['On Hold', 'Remaining'],
        datasets: [{
          label: 'On Hold',
          data: [onHoldCount, totalApplications - onHoldCount],
          backgroundColor: [
            '#FFCE56',
            '#EAEAEA'
          ],
          hoverOffset: 4
        }]
      }
    });

    return () => {
      applicationsChart.destroy();
      shortlistedChart.destroy();
      onHoldChart.destroy();
    };
  }, [totalApplications, shortlistedCount, onHoldCount]);

  return (
    <div className="rounded-lg shadow-lg bg-white p-20 ml-5 mr-5 mt-10">
       <h1 className="text-3xl font-bold mb-4 text-indigo-400 font-poppins">Application Details</h1>
        
      <div className="mt-10 flex ml-10">
        {/* Applications Section */}
        <div className="w-1/3 mr-4">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Applications</h2>
            <p>Total Applications: {totalApplications}</p>
            <p>Shortlisted: {shortlistedCount}</p>
            <p>On Hold: {onHoldCount}</p>
            <div className='mt-10'>
            <Link to="/applications">View All Applications</Link>
            <canvas ref={applicationsChartRef}></canvas>
          </div>
          </div>
        </div>
        
        {/* Shortlisted Section */}
        <div className="w-1/3 mr-4">
          <div className="mb-4 ml-10">
            <h2 className="text-2xl font-semibold mb-2">Shortlisted</h2>
            <p>Shortlisted: {shortlistedCount}</p>
            <p>Remaining: {totalApplications - shortlistedCount}</p>
            <br></br>
            <div className='mt-10'>
            <Link to="/shortlisted">View Shortlisted Candidates</Link>
            <canvas ref={shortlistedChartRef}></canvas>
          </div>
        </div>
        </div>

        {/* On Hold Section */}
        <div className="w-1/3 mr-4">
          <div className="mb-4 ml-10">
            <h2 className="text-2xl font-semibold mb-2">On Hold</h2>
            <p>On Hold: {onHoldCount}</p>
            <p>Remaining: {totalApplications - onHoldCount}</p>
            <br></br>
            <div className='mt-10'>
            <Link to="/on-hold">View Applications on Hold</Link>
            <canvas ref={onHoldChartRef}></canvas>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDashboard;
