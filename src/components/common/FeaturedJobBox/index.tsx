import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import ButtonRound from '@/components/ui/button'
import { IoBriefcase } from 'react-icons/io5'
const FeaturedJobBox = () => {
    return (
        <div className={styles.featuredJobBox}>
            <div className={`${styles.top} flex justify-between gap-5`}>
                <div className={styles.imageWrapper}>
                    <Image src={"/image/jobs/job1.png"} alt='job' width={75} height={75} />
                </div>
                <div className={styles.sectionContent}>
                    <h3>ABC School</h3>
                    <div className='flex gap-1 items-center'>
                        <FaLocationDot size={14} color='#949494' />
                        <span>Copenhagen, India</span>
                    </div>
                    <h4>Senior Accountant Tally & GST</h4>
                    <div className={styles.itsder}>
                        <strong>Full Time</strong>
                        <strong>
                            Openings:
                            <span>20</span>
                        </strong>
                    </div>
                </div>
            </div>
            <div className={`${styles.bottom} bottom flex items-center justify-between`}>
                <div className={`${styles.experienceYear} flex items-center gap-1`}>
                    <IoBriefcase />
                    <span>10 - 15 years</span>
                </div>
                <ButtonRound name='apply now' className={`bgOutlined`} extraClass='applyBtn' />
            </div>
        </div>
    )
}

export default FeaturedJobBox