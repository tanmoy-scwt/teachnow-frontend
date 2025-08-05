import React from 'react'
import style from './style.module.css'
import { FaCalendarAlt, FaMapMarkerAlt, FaIndustry, FaMoneyBillWave, FaUserGraduate, FaEnvelope, FaTools } from "react-icons/fa";


const jobDetails = [
    { label: "Date Posted", value: "August 23, 2024", icon: <FaCalendarAlt size={22} /> },
    { label: "Location", value: "Copenhagen, India", icon: <FaMapMarkerAlt size={22} /> },
    { label: "Industry", value: "Information Technology (IT) Industry", icon: <FaIndustry size={22} /> },
    { label: "Salary", value: "₹600000", icon: <FaMoneyBillWave size={22} /> },
    { label: "Job Level", value: "Fresher", icon: <FaUserGraduate size={22} /> },
    { label: "Contact Email", value: "N/A", icon: <FaEnvelope size={22} /> },
    { label: "Key Skills", value: "Operations Management, Project Planning and Scheduling, Communication", icon: <FaTools size={22} /> },
];


const JobOverview = () => {
    return (
        <div className={style.asideContainer}>
            <div className="bg-white text-sm rounded-md p-4 flex flex-col gap-4 font-medium w-full max-w-xs text-[#2B2B2B]">
                {jobDetails.map((item, idx) => (
                    <div key={idx} className="flex items-start justify-items-start gap-3">
                        <div style={{ paddingTop: '.3rem' }} className="text-[#1E73BE] pt-[0.3rem] ">{item.icon}</div>
                        <div>
                            <p className="text-[#2B2B2B]">
                                <span className="font-semibold text-[#505050]">{item.label}:</span> <br />
                                <span className="text-[#505050]">{item.value}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobOverview