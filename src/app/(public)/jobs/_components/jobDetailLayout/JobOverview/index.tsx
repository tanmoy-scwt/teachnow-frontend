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
            <div className={style.gridWrapper}>
                {jobDetails.map((item, idx) => (
                    <div
                        key={idx}
                        className={`${style.gridItem} ${idx === jobDetails.length - 1 ? style.fullWidthItem : ""}`}
                    >
                        <div className={style.icon}>{item.icon}</div>
                        <div>
                            <p className={style.text}>
                                <span className={style.label}>{item.label}:</span><br />
                                <span className={style.value}>{item.value}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobOverview