import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Pagination from '../../components/Pagination/pagination';

const Client_Edu = () => {
  return (
    <>
    <div className='bg-image bg-cover'>
      <NavBar />
      <div className='font-bold text-2xl ml-20 mt-5 text-center'>
        <h1>Your Information:</h1>
      </div>
      <section>
        <div className="container mx-auto">
          <form action = "http://localhost:5000/client_profile/{client_id}/education" method="post" className="border-4 rounded py-4 px-3" >
            <h2 className="font-bold text-xl">Education</h2>
            <div className="mt-3">
              <label htmlFor="certificatename" className="font-bold">Certificate Name</label>
              <input type="text" name="certificate_name" placeholder="Enter your certificate name" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div>
            <div className="mt-3">
              <label htmlFor="major" className="font-bold">Major</label>
              <input type="text" name="major" placeholder="Major" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div>
            <div className="mt-3">
              <label htmlFor="institutename" className="font-bold">Institution Name</label>
              <input type="text" name="institute_name" placeholder="Institution Name" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div>
            <div className="mt-3">
              <label htmlFor="startdate" className="font-bold">Start Date</label>
              <input type="date" name="start_date" placeholder="Enter your start date" className="block border-2 bg-blue-200 p-2 rounded" required />
            </div>
            <div className="mt-3">
              <label htmlFor="enddate" className="font-bold">End Date</label>
              <input type="date" name="end_date" placeholder="Enter your end date" className="block border-2 bg-blue-200 p-2 rounded" required />
            </div>
            <div className='text-center my-5 '>
                <button className='border-black border-2 hover:bg-sky-700 hover:text-white text-black py-2 px-20 rounded'>Submit</button>
            </div>
          </form>
        </div>
      </section>
        <div className='text-center text-2xl '>
            <Pagination/>
        </div>
      </div>
      
    </>
  )
}

export default Client_Edu;