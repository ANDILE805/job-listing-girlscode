import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Pagination from '../../components/Pagination/pagination';

const ClientSkills = () => {
  return (
    <>
    <div className='bg-image bg-cover'>
    <NavBar />
      <div className='font-bold text-2xl ml-20 mt-5 text-center'>
        <h1>Your Information:</h1>
      </div>
      <section>
      <div className="container mx-auto">
          <form action = "http://localhost:5000/client_profile/<id>/skills" method="post" className="border-4 rounded py-4 px-3" >
            <h2 className="font-bold text-xl">Skill Level</h2>
            <div>
            <div className="mt-3">
              <label  className="font-bold">Rate Your Skill:</label>
              <input type="number" name="skill_level" placeholder="1-10" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div> 
            <div>
            <select name='skill_set' required className="block border-2 bg-blue-200 p-2 rounded mt-2">
            <label  for = "Skills" ></label>
             <option>Communication</option>
              <option>Collaboration</option>
              <option>Python</option>
              <option>JavaScript</option>
              <option>C++</option>
            </select>
            </div>
            </div>
            <div>
            <div className="mt-3">
              <label  className="font-bold">Rate Your Skill:</label>
              <input type="number" name="skill_level" placeholder="1-10" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div> 
            <div>
            <select name='skill_set' required className="block border-2 bg-blue-200 p-2 rounded mt-2">
            <label for = "Skills" ></label>
            <option>Collaboration</option>
             <option>Communication</option>
              <option>Python</option>
              <option>JavaScript</option>
              <option>C++</option>
            </select>
            </div>
            </div>
            <div>
            <div className="mt-3">
              <label  className="font-bold">Rate Your Skill:</label>
              <input type="number" name="skill_level" placeholder="1-10" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div> 
            <div>
            <select name='skill_set' required className="block border-2 bg-blue-200 p-2 rounded mt-2">
            <label for = "Skills" ></label>
            <option>Python</option>
             <option>Communication</option>
              <option>Collaboration</option>
              <option>JavaScript</option>
              <option>C++</option>
            </select>
            </div>
            </div>
            <div>
            <div className="mt-3">
              <label  className="font-bold">Rate Your Skill:</label>
              <input type="number" name="skill_level" placeholder="1-10" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div> 
            <div>
            <select name='skill_set' required className="block border-2 bg-blue-200 p-2 rounded mt-2">
            <label for = "Skills" ></label>
            <option>JavaScript</option>
             <option>Communication</option>
              <option>Collaboration</option>
              <option>Python</option>
              <option>C++</option>
            </select>
            </div>
            </div>
            <div>
            <div className="mt-3">
              <label  className="font-bold">Rate Your Skill:</label>
              <input type="number" name="skill_level" placeholder="1-10" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
            </div> 
            <div>
            <select name='skill_set' required className="block border-2 bg-blue-200 p-2 rounded mt-2">
            <label for = "Skills" ></label>
            <option>C++</option>
             <option>Communication</option>
              <option>Collaboration</option>
              <option>Python</option>
              <option>JavaScript</option>
            </select>
            </div>
            </div>

              <div className='text-center my-5 '>
                <button className='border-black border-2 hover:bg-sky-700 hover:text-white text-black py-2 px-20 rounded'>Submit</button>
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

export default ClientSkills;