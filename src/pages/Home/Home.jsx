import React from 'react';
// import logo from '../assets/logo.jpg'

const Home = () => {
    return (<div>
        <div className='font-sarif '>
            <div className='flex flex-col justify-center h-24 bg-slate-200'>
                <div className='flex justify-between items-center'>
                    <div>
                        <a href='http://localhost:3000/' className='font-bold text-4xl pl-20 hover:text-sky-700 '>JOB AGENCY WEBSITE</a>
                    </div>


                    <div>
                        <ul className="flex gap-24 text-xl pr-5">
                            <li>
                                <a href="http://localhost:3000/" className="font-bold hover:text-sky-700">Home</a>
                            </li>
                            <li>
                                <a href="#" className="font-bold hover:text-sky-700">Jobs</a>
                            </li>
                            <li>
                                <a href="#" className="font-bold hover:text-sky-700">Pages</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='text-center mt-40'>
                <h1 className='font-extrabold text-2xl mb-4'>Explore Thousands of Jobs</h1>
                <p className='text-2xl mb-4'>Find Jobs, Employment & Career Opportunities. At your fingertips!</p>
                <button className='border-black border-2 hover:bg-sky-700 hover:text-white text-black py-2 px-20 rounded'>Get Started</button>
            </div>
            </div>
           
        </div>
   
    )
}
export default Home;