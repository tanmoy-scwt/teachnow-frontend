import Container from '@/components/ui/container';
import React from 'react';
import styles from './style.module.css';
import SearchBox from '@/components/common/SearchBox';
import HtmlRender from '@/components/ui/htmlRender';
import BreadCrumb from '@/components/ui/breadCrumb';
import RingCircleBgElement from '@/components/ui/RingCircleBgElement';

interface HeroSectionProps {
    isSearchBoxActive?: boolean;
    title?: string;
}

const HeroSection = ({ isSearchBoxActive = false, title = "" }: HeroSectionProps) => {
    return (
        <div className={styles.heroSectionContainer}>
            <Container>
                <div className='relative'>
                    <div className={styles.heroSectionContent}>
                        <div className={`${styles.sectionContent} section-content text-white`}>
                            <HtmlRender htmlString={title} />
                        </div>
                        <BreadCrumb />
                    </div>
                    {isSearchBoxActive && (
                        <div className={styles.searchBoxContainer}>
                            <SearchBox className={styles.searchBox} />
                        </div>
                    )}
                </div>
            </Container >
            <RingCircleBgElement size={335} position='rightBottomAlign' image={"/image/half-circle.png"} />
            <RingCircleBgElement size={335} position='leftTopAlign' image={"/image/half-circle-left-top.png"} />
        </div >
    )
}

export default HeroSection