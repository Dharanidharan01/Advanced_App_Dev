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
    <div className="mt-10 flex ml-10">
      {/* Applications Section */}
      <div className="w-1/3 mr-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Applications</h2>
          <canvas ref={applicationsChartRef}></canvas>
        </div>
      </div>
      
      {/* Shortlisted Section */}
      <div className="w-1/3 mr-4">
        <div className="mb-4 ml-10">
          <h2 className="text-2xl font-semibold mb-2">Shortlisted</h2>
          <canvas ref={shortlistedChartRef}></canvas>
        </div>
      </div>

      {/* On Hold Section */}
      <div className="w-1/3 mr-4">
        <div className="mb-4 ml-10">
          <h2 className="text-2xl font-semibold mb-2">On Hold</h2>
          <canvas ref={onHoldChartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default DetailDashboard;
