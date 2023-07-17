import React from 'react';


const Apply = () => {
return (
    <>
    <div className='font-bold text-xl ml-20 mt-5'>
        <h1>Your Information:</h1>
    </div>
        <section className="py-10">
            <div className="container mx-auto">
                <form className="border-4 rounded py-4 px-3" >
                    <h2 className="font-bold text-xl">Personal Information</h2>
                    <div className="mt-3">
                        <label htmlFor="fullname" className="font-bold">Full Name</label>
                        <input type="text" name="fullname" placeholder="Enter your full name" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="emailaddress" className="font-bold">Email Address</label>
                        <input type="email" name="emailaddress" placeholder="Enter your email address" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="number" className="font-bold">Phone number</label>
                        <input type="number" name="number" placeholder="Enter your phone number" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="address" className="font-bold">Address</label>
                        <input type="address" name="address" placeholder="Enter your address" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="current salary" className="font-bold">Current Salary</label>
                        <input type="number" name="currentsalary" placeholder="Enter your current salary" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                </form>
            </div>
        </section>

        <section>
            <div className="container mx-auto">
                <form className="border-4 rounded py-4 px-3" >
                    <h2 className="font-bold text-xl">Experience</h2>
                    <div className="mt-3">
                        <label htmlFor="currentjob" className="font-bold">Current Job</label>
                        <input type="text" name="currentjob" placeholder="Enter your current job" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="startdate" className="font-bold">Start Date</label>
                        <input type="date" name="startdate" placeholder="Enter your start date" className="block border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="enddate" className="font-bold">End Date</label>
                        <input type="date" name="enddate" placeholder="Enter your end date" className="block border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="companyname" className="font-bold">Company Name</label>
                        <input type="text" name="address" placeholder="Enter your company name" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="joblocationcity" className="font-bold">Job Location City</label>
                        <input type="location" name="joblocationcity" placeholder="Job Location City" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="joblocationstate" className="font-bold">Job Location State</label>
                        <input type="location" name="joblocationstate" placeholder="Job Location State" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="joblocationcountry" className="font-bold">Job Location Country</label>
                        <input type="location" name="joblocationcountry" placeholder="Job Location Country" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                </form>
            </div>
        </section>

        <section className='pt-20'>
            <div className="container mx-auto">
                <form className="border-4 rounded py-4 px-3" >
                    <h2 className="font-bold text-xl">Education</h2>
                    <div className="mt-3">
                        <label htmlFor="certificatename" className="font-bold">Certificate Name</label>
                        <input type="text" name="certificatename" placeholder="Enter your certificate name" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="major" className="font-bold">Major</label>
                        <input type="text" name="major" placeholder="Major" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="institutename" className="font-bold">Institution Name</label>
                        <input type="text" name="institutename" placeholder="Institution Name" className="block w-full border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="startdate" className="font-bold">Start Date</label>
                        <input type="date" name="startdate" placeholder="Enter your start date" className="block border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="enddate" className="font-bold">End Date</label>
                        <input type="date" name="enddate" placeholder="Enter your end date" className="block border-2 bg-blue-200 p-2 rounded" required />
                    </div>
                </form>
            </div>
        </section>
        <div className='text-center mt-5'>
        <button className='border-black border-2 hover:bg-sky-700 hover:text-white text-black py-2 px-20 rounded'>Submit</button>
        </div>
    </>
)
}

export default Apply;