import Container from '@/components/ui/container'
import React from 'react'
import styles from './style.module.css'
import FeaturedJobBox from '@/components/common/FeaturedJobBox'
import ButtonRound from '@/components/ui/button'
import SwiperCarousel from '@/components/layout/SwiperCarousel'

const FeaturedJobs = () => {
    return (
        <section className='section'>
            <Container>
                <div className={styles.featuredJobsWrapper}>
                    <div className={`${styles.sectionContent} section-content`}>
                        <h2>Featured <span>Jobs</span></h2>
                    </div>
                    <div className={styles.slidesDisplay}>
                        <SwiperCarousel>
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <div
                                    className="py-4 w-full h-full"
                                    key={num}
                                >
                                    <FeaturedJobBox />
                                </div>
                            ))}
                        </SwiperCarousel>
                    </div>
                    <div className={`${styles.gridDisplay} grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <FeaturedJobBox key={num} />
                        ))}
                    </div>
                    <div className='flex items-center justify-center'>
                        <ButtonRound name='View All Jobs' className='bgFilled' />
                    </div>
                </div >
            </Container>
        </section >
    )
}

export default FeaturedJobs