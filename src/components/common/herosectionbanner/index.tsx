import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'

const HeroSectionBanner = () => {
    return (
        <div className="bannerWrapper">
            <div className={styles.bannerWrapperGrid}>
                <div className="box">
                    <div className={styles.sectionContent}>
                        <div>
                            <span>Free AI Resume Builder</span>
                        </div>
                    </div>
                    <div className={styles.bannnerBoxImage}>
                        <div>
                            <Image src="/image/box1.png" fill alt="Box 1" priority
                                unoptimized={false} />
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
                            <Image src="/image/box2.png" fill alt="Box 1" priority
                                unoptimized={false} />

                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className={styles.bannnerBoxImage}>
                        <div>
                            <Image src="/image/box3.png" fill alt="Box 1" priority
                                unoptimized={false} />
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
                            <Image src="/image/box4.png" fill alt="Box 1" priority
                                unoptimized={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroSectionBanner