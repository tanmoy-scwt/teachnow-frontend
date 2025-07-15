'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SwiperCarousel = ({ children }: { children: React.ReactNode[] }) => {
    return (
        <div style={{ background: '#ffffff' }} className="py-10 px-4 sm:px-6 lg:px-8">
            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    0: { slidesPerView: 1.05 },
                    480: { slidesPerView: 1.2 },
                    640: { slidesPerView: 1.4 },
                    768: { slidesPerView: 1.8 },
                    1024: { slidesPerView: 2.5 },
                    1280: { slidesPerView: 3 },
                }}
                className="pb-16 overflow-visible"
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full w-full flex justify-center items-center p-4">
                            {child}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperCarousel;
