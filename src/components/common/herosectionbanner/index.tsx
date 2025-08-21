import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import box1 from '../../../../public/image/box1.png';
import box2 from '../../../../public/image/box2.png';
import box3 from '../../../../public/image/box3.png';
import box4 from '../../../../public/image/box4.png';

const HeroSectionBanner = () => {
    return (
        <div area-label="hero-banner" className="bannerWrapper">
            <div className={styles.bannerWrapperGrid}>
                <div className="box">
                    <div className={styles.sectionContent}>
                        <div>
                            <span>Free AI Resume Builder</span>
                        </div>
                    </div>
                    <div className={styles.bannnerBoxImage}>
                        <div>
                            <Image src={box1} fill alt="Box 1" priority placeholder='blur' sizes="300px" />
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className={styles.sectionContent}>
                        <div>
                            <span className={styles.smallFontSize}>Smart Cover Letters by AI</span>
                        </div>
                    </div>
                    <div className={styles.bannnerBoxImage}>
                        <div>
                            <Image src={box2} fill alt="Box 1" priority placeholder='blur' sizes="300px" />
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className={styles.bannnerBoxImage}>
                        <div>
                            <Image src={box3} fill alt="Box 1" priority placeholder='blur' sizes="300px" />
                        </div>
                    </div>
                    <div className={styles.sectionContent}>
                        <div>
                            <span className={styles.smallFontSize}>Mock Interviews with AI</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className={styles.sectionContent}>
                        <div>
                            <span>Free Teaching Resources</span>
                        </div>
                    </div>
                    <div className={styles.bannnerBoxImage}>
                        <div>
                            <Image src={box4} fill alt="Box 1" priority placeholder='blur' sizes="300px" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroSectionBanner