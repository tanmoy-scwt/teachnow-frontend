'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const SwiperCarousel = ({ children }: { children: React.ReactNode[] }) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const handleMouseEnter = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
        }
    };
    const handleMouseLeave = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
    };

    return (
        <div
            style={{ background: '#ffffff' }}
            className="py-10 px-4 sm:px-6 lg:px-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Swiper
                modules={[Autoplay]}
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
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={600}
                loop={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
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
