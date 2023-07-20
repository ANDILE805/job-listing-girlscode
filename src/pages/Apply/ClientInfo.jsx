import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Pagination from '../../components/Pagination/pagination';

const ClientInfo = () => {
  return (
    <>
    <div className='bg-image bg-cover'>
      <NavBar />
      <div className='font-bold text-2xl ml-20 mt-5 text-center'>
        <h1>Your Information:</h1>
      </div>
      <section>
        <div className="container mx-auto">
          <form action = "http://localhost:5000/client_profile/{id}" method="post" className="border-4 rounded py-4 px-3" >
            <h2 className="font-bold text-xl">Personal Information</h2>
            <div className="mt-3">
              <label className="font-bold">First Name</label>
              <input type="text" name="first_name" placeholder="Enter your first name" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div>
            <div className="mt-3">
              <label className="font-bold">Last Name</label>
              <input type="text" name="last_name" placeholder="Enter your last name" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div>
            <div className="mt-3">
              <label  className="font-bold">Email Address</label>
              <input type="email" name="email" placeholder="Enter your email address" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div>
            <div className="mt-3">
              <label  className="font-bold">Phone number</label>
              <input type="number" name="number" placeholder="Enter your phone number" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div>
            <div className="mt-3">
              <label  className="font-bold">Address</label>
              <input type="address" name="address" placeholder="Enter your address" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div>
            <div className="mt-3">
              <label  className="font-bold">Current Salary</label>
              <input type="number" name="current_salary" placeholder="Enter your current salary" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
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

export default ClientInfo;