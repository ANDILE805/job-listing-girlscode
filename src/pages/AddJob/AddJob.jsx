import React from "react";
import NavBar from "../../components/NavBar/NavBar";

const AddJob = () => {
  return (
    <>
    <div className="bg-img bg-cover h-screen ">
    <NavBar />
    <section className="backdrop-blur-sm">
      <div className="container mx-auto ">
        <form action = "http://localhost:5000/job_post" method="post" className="border-2 border-zinc-600 rounded py-10 px-7 ml-40 mr-40 my-10">
          <h2 className="font-bold text-xl flex justify-center">Post Job</h2>
          <div className="mt-3">
            <label className="text-xl">Title</label>
            <input type="text" name="tittle" placeholder="Job tittle*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
            <label className="text-xl">Location</label>
            <input type="text" name="location" placeholder="Location*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
            <label className="text-xl">Description</label>
            <input type="text" name="description" placeholder="Description*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
            <label className="text-xl">Name</label>
            <input type="text" name="name" placeholder="Company Name*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
            <label className="text-xl">Requirements</label>
            <input type="text" name="requirements" placeholder="Requirements*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
            <label className="text-xl">Skills</label>
            <input type="text" name="skills" placeholder="Skills*" className="block w-full border-2 bg-sky-100 p-2 rounded-2xl" />
          </div>
          <button className="btn bg-sky-700 text-white text-xl mt-8 px-4 py-2 rounded-2xl flex justify-end">Post</button>
        </form>
      </div>
    </section>
    </div>
    </>
  )
}

export default AddJob