import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex flex-col justify-center h-24 bg-sky-200'>
      <div className='flex justify-between items-center'>
        <div>
          <a href='http://localhost:3000/' className='font-bold text-4xl pl-20 hover:text-sky-700 '>JOB AGENCY WEBSITE</a>
        </div>

          <div className="flex gap-24 text-xl pr-5">
            <Link to="/">
              <span className="font-bold hover:text-sky-700">Home</span>
            </Link>
            <Link to="/jobs">
              <span className="font-bold hover:text-sky-700">Jobs</span>
            </Link>
            <Link to="/add-job">
              <span className="font-bold hover:text-sky-700">Add Job</span>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default NavBar