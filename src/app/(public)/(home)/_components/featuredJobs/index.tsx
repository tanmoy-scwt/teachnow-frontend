import Container from '@/components/ui/container'
import React from 'react'
import styles from './style.module.css'
import FeaturedJobBox from '@/components/common/FeaturedJobBox'
// import EmblaCarousel from '@/components/layout/EmblaCarousel'
import ButtonRound from '@/components/ui/button'

const FeaturedJobs = () => {
    return (
        <section className='section'>
            <Container>
                <div className={styles.featuredJobsWrapper}>
                    <div className={`${styles.sectionContent} section-content`}>
                        <h2>Featured <span>Jobs</span></h2>
                    </div>
                    {/* <EmblaCarousel showButtons showDots>
                        {[1, 2, 3].map((num) => (
                            <div
                                className={styles.slides}
                                key={num}
                            >
                                <FeaturedJobBox />
                                </div>
                                ))}
                                </EmblaCarousel> */}

                    <div className='grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <FeaturedJobBox />
                        <FeaturedJobBox />
                        <FeaturedJobBox />
                        <FeaturedJobBox />
                        <FeaturedJobBox />
                        <FeaturedJobBox />
                    </div>
                    <div className='flex items-center justify-center'>
                        <ButtonRound name='View More' className='bgFilled' />
                    </div>
                </div>
            </Container>
        </section >
    )
}

export default FeaturedJobs