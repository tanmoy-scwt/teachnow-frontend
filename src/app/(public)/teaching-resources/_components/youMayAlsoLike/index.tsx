import React from 'react'
import CarrerResourceBox from '@/components/common/CarrerResourceBox'
import SwiperCarousel from '@/components/layout/SwiperCarousel'
import SectionContent from '@/components/ui/SectionContent'
import style from './style.module.css'

const YouMayAlsoLike = () => {
    return (
        <SectionContent titleCSS='text-center' variant='h2' title='You may also like' className={`${style.section}`}>
            <SwiperCarousel
                isDots={true}
                isNavigation={false}
                isLoop={false}
                autoplayDelay={5000}
                className="my-custom-carousel"
            >
                {Array.from({ length: 100 }).map((_, index) => (
                    <CarrerResourceBox key={`carrerBoxResId${index}`} isResourceOwnerProfileActive={true} isDateBadgeActive={false} />
                ))}
            </SwiperCarousel>
        </SectionContent >

    )
}

export default YouMayAlsoLike