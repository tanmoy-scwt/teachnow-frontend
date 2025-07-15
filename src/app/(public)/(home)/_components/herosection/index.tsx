import Container from '@/components/ui/container';
import React from 'react';
import styles from './style.module.css';
import SearchBox from '@/components/common/SearchBox';
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
                    <HeroSectionBanner />
                </div>
            </Container >
        </div >
    )
}

export default HeroSection