import CarrerResourceBox from '@/components/common/CarrerResourceBox'
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                        <CarrerResourceBox />
                        <CarrerResourceBox />
                        <CarrerResourceBox />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CarrerResourceTips