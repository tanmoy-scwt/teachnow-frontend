import Container from '@/components/ui/container';
import React, { Suspense } from 'react';
import styles from './style.module.css';
import SearchBox from '@/components/common/SearchBox';
import HeroSectionBanner from '@/components/common/herosectionbanner';
import HtmlRender from '@/components/ui/htmlRender';

const HeroSection = () => {
    const title = `<h1>Explore <span>Top Job</span> Opportunities In <span>Education</span></h1>`
    return (
        <div>
            <Container>
                <div className={styles.containerWrapper}>
                    <div className={styles.bannerContentWrapper}>
                        <div className={styles.sectionContent}>
                            <HtmlRender htmlString={title} />
                            <p>Your one-stop job portal for teaching, training & education</p>
                        </div>
                        <Suspense fallback={<div>Loading Searchbox...</div>}>
                            <SearchBox />
                        </Suspense>
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