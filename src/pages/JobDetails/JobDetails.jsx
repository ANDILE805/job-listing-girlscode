import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const Data = [
  {
    id: 1,
    tittle: 'Web Developer',
    time: 'now',
    location: 'Durban',
    desc: `Junior Web Dev:
        
        ENVIRONMENT

        A dynamic provider of Cloud-based Procurement Solutions is searching for a talented Junior Developer who will be responsible for learning codebase, gathering user data, and responding to requests from senior developers. With provided direction, this position will be involved in all stages of projects, from brainstorming to final testing. The successful candidate will be fluent in JavaScript, jQuery, CSS, HTML, JSON, or XML, and have a bachelor’s degree in computer science, engineering, or equivalent experience.
        
        DUTIES:
        
        
        Assist development manager with all aspects of software design and coding needs.
        Troubleshoot and work on minor bug fixes.
        Gather information and analyse customer needs for functionality.
        Collaborate with product managers and development team by responding to requests and assisting in designing and optimizing code.
        Assist in providing initial project planning.
        Recommend upgrades to optimize operational efficiency.
        Participate in writing and maintaining code.
        Contribute to development testing.
        Document all programming tasks and procedures.
        Perform routine software maintenance.
        Learn and improve coding and design skills required for assigned projects while providing valuable support to development team.
        Attend and contribute to company development team meetings.
        
        REQUIREMENTS:
        
        0-2+ years of experience and working knowledge in basic software coding and design.
        Bachelors Degree in computer science, engineering, or equivalent experience.
        Knowledge of certain programming languages Fluent: JavaScript, jQuery, CSS, HTML, JSON, or XML
        Advance knowledge: ASP.NET, C# Skills.
        Web services: SCF or Web API
    
        
        Desired Skills:
        
        Junior
        Developer`,
    company: 'Lexis Nexis'
  },
]

const JobDetails = () => {
  return (
    <div>
      <NavBar />
      <div className="flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({ id, tittle, time, location, desc, company }) => {
            return (
              <div key={id} className="group group/item singleJob w-62 p-5 bg-white rounded [10px] hover:bg-sky-700 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{tittle}</h1>
                  <span className="material-symbols-outlined flex items-center text-black gap-1">{time}</span>
                </span>

                <h6 className="text-black">{location}</h6>
                <p className="text-[20px] text-black pt-5 border-t-[2px] mt-5 group-hover:text-black">
                  {desc}
                </p>

                <div className="company flex items-center gap-2 ">
                  <span className="text-[14px] py-4 block group-hover:text-white">{company}</span>
                </div>
                <div>
                  <Link to='/Apply'>
                    <button className="border-2 rounded-[10px] block p-2.5 w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black">Apply</button>
                  </Link>
                </div>
              </div>

            )
          })
        }
      </div>
    </div>

  )
}

export default JobDetails;