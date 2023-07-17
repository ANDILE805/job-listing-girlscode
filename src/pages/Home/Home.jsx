import React from 'react';
import { Link } from 'react-router-dom';

import { jobsSummaryData } from '../../api/jobsSummaryData'
import JobSummary from '../../components/JobSummary/JobSummary';
import NavBar from '../../components/NavBar/NavBar';

const Home = () => {
  return (
    <div className='bg-image bg-cover'>
      <div className='font-sarif '>
        <NavBar />

        <div className='text-center '>
          <h1 className='font-extrabold text-2xl mb-4'>Explore Thousands of Jobs</h1>
          <p className='text-2xl mb-4'>Find Jobs, Employment & Career Opportunities. At your fingertips!</p>
        </div>
      </div>

      <div className='flex justify-center gap-10'>
        {jobsSummaryData.map((jobSummary) => {
          return <JobSummary key={jobSummary.id} jobSummary={jobSummary} />
        })}
      </div>

      <div className='text-center mt-10'>
        <Link to='/jobs'>
          <button className='border-black border-2 hover:bg-sky-700 hover:text-white text-black py-2 px-20 rounded'>More Jobs</button>
        </Link>
      </div>
    </div>
  )
}
export default Home;