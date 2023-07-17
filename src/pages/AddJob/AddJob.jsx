import React from "react";
import NavBar from "../../components/NavBar/NavBar";

const AddJob = () => {
  return (
    <>
    <NavBar />
    <section className="bg-pjImg  bg-center bg-cover">
      <div className="container mx-auto ">
        <form className="border-2 border-zinc-600 rounded py-10 px-7 ml-40 mr-40 my-10">
          <h2 className="font-bold text-xl flex justify-center">Post Job</h2>
          <div className="mt-3">
            <label>Title</label>
            <input type="text" name="tittle" placeholder="Job tittle*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
            <label>Location</label>
            <input type="text" name="location" placeholder="Location*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
            <label>Description</label>
            <input type="text" name="description" placeholder="Description*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
            <label>Name</label>
            <input type="text" name="name" placeholder="Company Name*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
            <label>Requirements</label>
            <input type="text" name="requirements" placeholder="Requirements*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
            <label>Skills</label>
            <input type="text" name="skills" placeholder="Skills*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
          </div>
          <button className="btn bg-sky-700 text-white text-xl mt-8 px-4 py-2 rounded-2xl flex justify-end">Post</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default AddJob