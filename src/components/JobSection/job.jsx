import React from "react";

const Job = () => {
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
        tittle: 'Tecnhician',
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
    {
        id: 4,
        tittle: 'Quality Analyst',
        time: '10 days ago',
        location: 'Petoria',
        desc: 'Internship',
        company: 'ILab'
    },
    {
        id: 5,
        tittle: 'Web Developer',
        time: 'now',
        location: 'Durban',
        desc: 'Looking for a junior developer',
        company: 'Lexis Nexis'
    },
    {
        id: 6,
        tittle: 'Web Developer',
        time: 'now',
        location: 'Durban',
        desc: 'Looking for a junior developer',
        company: 'Lexis Nexis'
    },
    {
        id: 7,
        tittle: 'Web Developer',
        time: 'now',
        location: 'Durban',
        desc: 'Looking for a junior developer',
        company: 'Lexis Nexis'
    },
    {
        id: 8,
        tittle: 'Web Developer',
        time: 'now',
        location: 'Durban',
        desc: 'Looking for a junior developer',
        company: 'Lexis Nexis'
    },
    {
        id: 9,
        tittle: 'Web Developer',
        time: 'now',
        location: 'Durban',
        desc: 'Looking for a junior developer',
        company: 'Lexis Nexis'
    },
    {
        id: 10,
        tittle: 'Web Developer',
        time: 'now',
        location: 'Durban',
        desc: 'Looking for a junior developer',
        company: 'Lexis Nexis'
    },
]


    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
 
                {
                    Data.map(({id,tittle,time,location,desc,company}) =>{
                        return(
                            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                            <span className="flex justify-between items-center gap-4">
                                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{tittle}</h1>
                                <span className="material-symbols-outlined flex items-center text-[#ccc] gap-1">{time}</span>
                            </span>

                            <h6 className="text-[#ccc]">{location}</h6>
                            <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                                {desc}
                            </p>

                            <div className="company flex items-center gap-2 ">
                                <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
                            </div>

                            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black">See More</button>

                            </div>

                        )
                    })
                }

            </div>
        </div>
    )

}
export default Job;