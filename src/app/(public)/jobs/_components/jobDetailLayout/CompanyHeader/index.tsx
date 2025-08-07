import Image from 'next/image'
import React from 'react'
import style from './style.module.css'

const CompanyHeader = () => {
    return (
        <div className={`${style.jobTopDetailsHeading} flex justify-between items-start`}>
            <div className={`${style.jobHeader} flex items-center gap-4 `}>
                <div>
                    <div className={style.companyLogo}>
                        <Image className='absolute' src="/image/jobs/job1.png" fill alt="ABC Tech Innovators logo" />
                    </div>
                </div>
                <div className={`${style.sectionContent} `}>
                    <p>ABC Tech Innovators</p>
                    <p>Copenhagen, India</p>
                </div>
            </div>
            <div className={style.jobMetaULDiv}>
                <ul className={`flex items-center ${style.jobMeta} ${style.sectionContent}`} aria-label="Job Details">
                    <li>
                        <label htmlFor='openings'>Openings:</label>
                        <span id="openings">1</span>
                    </li>
                    <li>
                        <span>Full-time</span>
                    </li>
                </ul>
            </div>
            {/* <div className={style.jobMetaULDiv}></div> */}
        </div>
    )
}

export default CompanyHeader