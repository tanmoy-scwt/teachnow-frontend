import CarrerResourceBox from '@/components/common/CarrerResourceBox'
import SwiperCarousel from '@/components/layout/SwiperCarousel'
import Container from '@/components/ui/container'
import React from 'react'

const CarrerResourceTips = () => {
    return (
        <section >
            <Container>
                <div className='flex gap-5 flex-col'>
                    <div className="section-content">
                        <h2>Career <span>Resources & Tips</span></h2>
                    </div>
                    <SwiperCarousel
                        isDots={true}
                        isNavigation={true}
                        isLoop={false}
                        autoplayDelay={5000}
                        className="my-custom-carousel"
                    >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={num}>
                                <CarrerResourceBox />
                            </div>
                        ))}
                    </SwiperCarousel>
                </div>
            </Container>
        </section>
    )
}

export default CarrerResourceTips