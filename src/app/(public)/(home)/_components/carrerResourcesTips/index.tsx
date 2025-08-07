import React from 'react'
import CarrerResourceBox from '@/components/common/CarrerResourceBox'
import SwiperCarousel from '@/components/layout/SwiperCarousel'
import Container from '@/components/ui/container'

const CarrerResourceTips = () => {
    return (
        <section >
            <Container className='flex gap-5 flex-col'>
                <div className="section-content text-center">
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
            </Container>
        </section>
    )
}

export default CarrerResourceTips