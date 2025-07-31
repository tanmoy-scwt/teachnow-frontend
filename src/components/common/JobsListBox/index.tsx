import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import ButtonRound from '@/components/ui/button'
import { FaBriefcase } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { HiCurrencyDollar } from 'react-icons/hi'

const JobsListBox = () => {
    return (
        <article className={style.jobCard}>
            <div className={`flex items-center justify-between ${style.jobTopDetailsHeading}`}>
                <div className={`${style.jobHeader} flex gap-4 items-center`}>
                    <Image src="/image/jobs/job1.png" width={50} height={50} alt="ABC Tech Innovators logo" />
                    <div className={`${style.sectionContent}`}>
                        <p className={style.company}><strong>ABC Tech Innovators</strong></p>
                        <p className={style.location}>Copenhagen, India</p>
                    </div>
                </div>
                <ul className={`flex items-center gap-4 ${style.jobMeta} ${style.sectionContent}`} aria-label="Job Details">
                    <li><strong>Openings:</strong> <span>1</span></li>
                    <li><span>Full-time</span></li>
                </ul>
            </div>

            <div className={`${style.sectionContent}`}>
                <h2 className={style.jobTitle}>Senior Accountant – Tally & GST</h2>
            </div>
            <div>
                <div className={`${style.jobInfoAction} flex items-center justify-between`}>
                    <ul className={`${style.sectionContent} flex items-center flex-wrap gap-4`}>
                        <li>
                            <FaBriefcase />
                            <span>3 – 5 years</span>
                        </li>
                        <li>
                            <FaLocationDot />
                            <span>Copenhagen, india</span>
                        </li>
                        <li>
                            <HiCurrencyDollar size={21} />
                            <span>50k – 60k INR</span>
                        </li>
                    </ul>
                    <div>
                        <ButtonRound name="Apply Now" type="radio" className={`bgOutlined`} extraClass={`${style.applyBtn}`} />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default JobsListBox
