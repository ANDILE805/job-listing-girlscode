import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Pagination from '../../components/Pagination/pagination';

const ClientExp = () => {
  return (
    <>
    <div className='bg-image bg-cover'>
      <NavBar />
      <div className='font-bold text-2xl ml-20 mt-5 text-center'>
        <h1>Your Information:</h1>
      </div>
      <section>
        <div className="container mx-auto">
          <form action = "http://localhost:5000/client_profile/{client_id}/experience" method="post" className="border-4 rounded py-4 px-3" >
            <h2 className="font-bold text-xl">Experience</h2>
            <div className="mt-3">
              <label htmlFor="currentjob" className="font-bold">Current Job</label>
              <input type="text" name="current_job" placeholder="Enter your current job" className="block w-full border-2 bg-blue-200 p-2 rounded" required/>
            </div>
            <div className="mt-3">
              <label htmlFor="startdate" className="font-bold">Start Date</label>
              <input type="date" name="start_date" placeholder="Enter your start date" className="block border-2 bg-blue-200 p-2 rounded" />
            </div>
            <div className="mt-3">
              <label htmlFor="enddate" className="font-bold">End Date</label>
              <input type="date" name="end_date" placeholder="Enter your end date" className="block border-2 bg-blue-200 p-2 rounded"  />
            </div>
            <div className="mt-3">
              <label htmlFor="companyname" className="font-bold">Company Name</label>
              <input type="text" name="company_name" placeholder="Enter your company name" className="block w-full border-2 bg-blue-200 p-2 rounded" />
            </div>
            <div className="mt-3">
              <label htmlFor="joblocationcity" className="font-bold">Job Location City</label>
              <input type="location" name="job_location_city" placeholder="Job Location City" className="block w-full border-2 bg-blue-200 p-2 rounded"  />
            </div>
            <div className="mt-3">
              <label htmlFor="joblocationstate" className="font-bold">Job Location State</label>
              <input type="location" name="job_location_state" placeholder="Job Location State" className="block w-full border-2 bg-blue-200 p-2 rounded" />
            </div>
            <div className="mt-3">
              <label htmlFor="joblocationcountry" className="font-bold">Job Location Country</label>
              <input type="location" name="job_location_country" placeholder="Job Location Country" className="block w-full border-2 bg-blue-200 p-2 rounded" />
            </div>
            <div className="mt-3">
              <label htmlFor="description" className="font-bold">What were your duties?</label>
              <input type="text" name="description" placeholder="Job Description" className="block w-full border-2 bg-blue-200 p-2 rounded" />
            </div>
            <div className='text-center my-5 '>
                <button className='border-black border-2 hover:bg-sky-700 hover:text-white text-black py-2 px-20 rounded'>Next</button>
            </div>
          </form>
        </div>
      </section>
        <div className='items-center text-2xl '>
          <Pagination/>
        </div>
      </div>
      
    </>
  )
}

export default ClientExp;