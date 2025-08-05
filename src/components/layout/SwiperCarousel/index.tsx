'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperCarouselProps {
    children: React.ReactNode[];
    isDots?: boolean;
    isNavigation?: boolean;
    isLoop?: boolean;
    autoplayDelay?: number;
    className?: string;
}

const SwiperCarousel = ({
    children,
    isDots = false,
    isNavigation = false,
    isLoop = true,
    autoplayDelay = 3000,
    className = '',
}: SwiperCarouselProps) => {
    const swiperRef = useRef<SwiperType | null>(null);

    const handleMouseEnter = () => {
        swiperRef.current?.autoplay?.stop();
    };

    const handleMouseLeave = () => {
        swiperRef.current?.autoplay?.start();
    };

    return (
        <div
            style={{ background: '#ffffff' }}
            className={`py-10 relative px-4 sm:px-6 lg:px-8 ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Swiper
                modules={[Autoplay, ...(isDots ? [Pagination] : []), ...(isNavigation ? [Navigation] : [])]}
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
                className="pb-16 overflow-visible swiperCSS"
                autoplay={{
                    delay: autoplayDelay,
                    disableOnInteraction: false,
                }}
                speed={600}
                loop={isLoop}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                pagination={isDots ? { clickable: true, dynamicBullets: true } : false}
                navigation={isNavigation}
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index} style={{ padding: '1rem' }}>
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
