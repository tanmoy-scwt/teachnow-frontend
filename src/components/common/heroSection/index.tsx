import Container from '@/components/ui/container';
import React from 'react';
import styles from './style.module.css';
import SearchBox from '@/components/common/SearchBox';
import HtmlRender from '@/components/ui/htmlRender';
import RingCircleBgElement from '@/components/ui/RingCircleBgElement';
import ClientBreadcrumb from '@/components/ui/clientBreadCrumb';

interface HeroSectionProps {
    isSearchBoxActive?: boolean;
    title?: string;
}

const HeroSection = ({ isSearchBoxActive = false, title = "" }: HeroSectionProps) => {

    return (
        <div>
            <div className={styles.heroSectionContainer}>
                <Container>
                    <div className={`${styles.heroContent} relative`}>
                        <div className={`${isSearchBoxActive ? styles.sBHeight : ""} ${styles.heroSectionContent}`}>
                            <div className={`${styles.sectionContent} section-content text-white`}>
                                <HtmlRender htmlString={title} />
                            </div>
                            <ClientBreadcrumb />
                        </div>

                    </div>
                </Container >

                <RingCircleBgElement size={335} position='rightBottomAlign' image={"/image/half-circle.png"} />
                <RingCircleBgElement size={335} position='leftTopAlign' image={"/image/half-circle-left-top.png"} />
            </div >
            <Container>
                {
                    isSearchBoxActive && (
                        <div className={styles.searchBoxContainer}>
                            <SearchBox className={styles.searchBox} />
                        </div>
                    )
                }
            </Container>
        </div>
    )
}

export default HeroSection