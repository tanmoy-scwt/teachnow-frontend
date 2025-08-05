import React from 'react'
import style from '../style.module.css'
import { FaBriefcase } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { HiCurrencyDollar } from 'react-icons/hi'
import ButtonRound from '@/components/ui/button'

const JobProfileInfoHeader = () => {
    return (
        <div className='flex flex-col gap-4'>
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
        </div>
    )
}

export default JobProfileInfoHeader