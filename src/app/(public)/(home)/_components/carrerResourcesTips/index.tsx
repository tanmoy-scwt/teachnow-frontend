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
                    <SwiperCarousel>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div
                                style={{ padding: '1rem 0rem', width: '100%', height: '100%' }}
                                key={num}
                            >
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