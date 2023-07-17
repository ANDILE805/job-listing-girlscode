import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import JobsLayout from '../../pages/Jobs-Layout/JobsLayout';


const Data = [
    {
        id: 1,
        tittle: 'Web Developer',
        time: 'now',
        location: 'Durban',
        desc: 'Looking for a junior developer',
        company: 'Lexis Nexis'
    },
    {
        id: 2,
        tittle: 'Technician',
        time: '5 days ago',
        location: 'JHB',
        desc: 'Graduate program',
        company: 'Vodacom'
    },
    {
        id: 3,
        tittle: 'IOS Developer',
        time: 'Yesterday',
        location: 'Cape Town',
        desc: 'Looking for a junior developer',
        company: 'Apple'
    },

]


const Jobs = () => {
    return (
        <div>
            <div className="flex gap-10 justify-center flex-wrap items-center py-10">
                {
                    Data.map(({id,tittle,time,location,desc,company}) =>{
                        return(
                            <div key={id} className="group group/item singleJob w-62 p-5 bg-white rounded [10px] hover:bg-sky-700 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                            <span className="flex justify-between items-center gap-4">
                                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{tittle}</h1>
                                <span class="material-symbols-outlined flex items-center text-black gap-1">{time}</span>
                            </span>

                            <h6 className="text-black">{location}</h6>
                            <p className="text-[13px] text-[#959595] pt-5 border-t-[2px] mt-5 group-hover:text-white">
                                {desc}
                            </p>

                            <div className="company flex items-center gap-2 ">
                                <span className="text-[14px] py-4 block group-hover:text-white">{company}</span>
                            </div>
                            <div>
                            <Link to='/JobsLayout'>
                            <button className="border-2 rounded-[10px] block p-2.5 w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black">See More</button>
                            </Link>
                            </div>
                            </div>

                        )
                    })
                }

            </div>
            <div className='text-center mt-20'>
                <Link to= '/Job'>
                <button className='border-black border-2 hover:bg-sky-700 hover:text-white text-black py-2 px-20 rounded'>More Jobs</button>
                </Link>
            </div>
        </div>

        
    )
}
export default Jobs;
