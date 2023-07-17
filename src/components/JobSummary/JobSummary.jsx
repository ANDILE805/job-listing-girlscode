import React from 'react';
import { Link } from 'react-router-dom';

const JobSummary = ({jobSummary}) => {
  const { id, tittle, time, location, desc, company } = jobSummary
  return (
    <div className="flex gap-10 justify-center flex-wrap items-center py-10">
      <div key={id} className="group group/item singleJob w-62 p-5 bg-white rounded [10px] hover:bg-sky-700 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
        <span className="flex justify-between items-center gap-4">
          <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{tittle}</h1>
          <span className="material-symbols-outlined flex items-center text-black gap-1">{time}</span>
        </span>

        <h6 className="text-black">{location}</h6>
        <p className="text-[13px] text-[#959595] pt-5 border-t-[2px] mt-5 group-hover:text-white">
          {desc}
        </p>

        <div className="company flex items-center gap-2 ">
          <span className="text-[14px] py-4 block group-hover:text-white">{company}</span>
        </div>
        <div>
          <Link to='/job'>
            <button className="border-2 rounded-[10px] block p-2.5 w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black">See More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default JobSummary;
