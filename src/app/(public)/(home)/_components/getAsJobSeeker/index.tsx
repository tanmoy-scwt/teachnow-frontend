import Container from '@/components/ui/container'
import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import { FaCircleNotch } from "react-icons/fa";

const features = [
    "AI Resume Builder",
    "AI Cover Letters",
    "AI Interview Prep",
    "Verified Job Listings",
    "Smart Job Alerts",
    "Free Teaching Resources"
];
const GetAsJobSeeker = () => {
    return (
        <section className='section'>
            <Container >
                <div className={`${styles.getAsJobSeekerWrapper} flex justify-between items-center lg:flex-row md:flex-col sm:flex-col`}>
                    <div className={`${styles.bannerWrapper} md:order-2 sm:order-2 lg:order-1`}>
                        <div className={styles.banner}>
                            <Image src={'/image/jobseekerbanner.png'} height={588} width={555} alt='Job Seeker Banner' />
                        </div>
                    </div>
                    <div className={`${styles.bannerContent} lg:flex-row md:order-1 sm:order-1 lg:order-2`}>
                        <div className={`${styles.sectionContent} section-content`}>
                            <h2>What You Get as a <span>Job Seeker</span></h2>
                        </div>
                        <div className={styles.sectionPoint}>
                            <ul className="grid grid-cols-2 gap-2">
                                {features?.map((item, index) => (
                                    <li key={`featurePoint#${index}`}>
                                        <div className={styles.pointBox}>
                                            <div className={styles.icon}>
                                                <FaCircleNotch size={18} color='#8DBCC7' />
                                            </div>
                                            <div className={styles.sectionContent}>
                                                <h3>{item}</h3>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={`${styles.sectionContent} section-content`}>
                            <h4>100 % Free for Jobseekers</h4>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default GetAsJobSeeker