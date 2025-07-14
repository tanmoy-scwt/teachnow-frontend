import Container from '@/components/ui/container';
import React from 'react';
import styles from './style.module.css';
import SearchBox from '@/components/common/SearchBox';
import Image from 'next/image';
import HeroSectionBanner from '../herosectionbanner';

const HeroSection = () => {
    return (
        <div>
            <Container>
                <div className={styles.containerWrapper}>
                    <div className={styles.bannerContentWrapper}>
                        <div className={styles.sectionContent}>
                            <h1>
                                Explore <span>Top Job</span> Opportunities In <span>Education</span>
                            </h1>
                            <p>Your one-stop job portal for teaching, training & education</p>
                        </div>

                        <SearchBox />

                        <div className={styles.sectionContents}>
                            <p>Popular Search: <span>Teacher, Clerks, Accountants, Prinicipals</span></p>
                        </div>
                    </div>
                    {/* <div className="bannerWrapper">
                        <div className={styles.bannerWrapperGrid}>
                            <div className="box">
                                <div className={styles.sectionContent}>
                                    <strong>
                                        Free AI-powered resume builder
                                    </strong>
                                </div>
                                <div className={styles.bannnerBoxImage}>
                                    <Image src="/image/box1.png" height={244} width={140} alt="Box 1" />
                                </div>
                            </div>
                            <div className="box">
                                <div className={styles.sectionContent}>
                                    <span>Hello World!</span>
                                </div>
                                <div className={styles.bannnerBoxImage}>
                                    <Image src="/image/box2.png" height={244} width={140} alt="Box 1" />
                                </div>
                            </div>
                            <div className="box">
                                <div className={styles.bannnerBoxImage}>
                                    <Image src="/image/box3.png" height={244} width={140} alt="Box 1" />
                                </div>
                                <div className={styles.sectionContent}>
                                    <span>Hello World!</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className={styles.sectionContent}>
                                    <span>Hello World!</span>
                                </div>
                                <div className={styles.bannnerBoxImage}>
                                    <Image src="/image/box4.png" height={244} width={140} alt="Box 1" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <HeroSectionBanner />
                </div>
            </Container >
        </div >
    )
}

export default HeroSection