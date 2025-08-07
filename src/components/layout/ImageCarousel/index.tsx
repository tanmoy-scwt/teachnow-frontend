"use client"
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { IoPauseCircleOutline, IoPlayCircleOutline } from 'react-icons/io5';

interface CarouselProps {
    images: string[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showArrows?: boolean;
    className?: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({
    images,
    autoPlay = true,
    autoPlayInterval = 4000,
    showArrows = true,
    className = '',
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const thumbnailContainerRef = useRef<HTMLDivElement>(null);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 300);
    }, [images.length, isTransitioning]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setTimeout(() => setIsTransitioning(false), 300);
    }, [images.length, isTransitioning]);

    const goToSlide = (index: number) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 300);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const scrollToActiveThumbnail = useCallback(() => {
        if (thumbnailContainerRef.current) {
            const container = thumbnailContainerRef.current;
            const activeButton = container.children[currentIndex] as HTMLElement;

            if (activeButton) {
                const scrollLeft = activeButton.offsetLeft - (container.offsetWidth / 2) + (activeButton.offsetWidth / 2);
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, [currentIndex]);

    useEffect(() => {
        scrollToActiveThumbnail();
    }, [currentIndex, scrollToActiveThumbnail]);

    useEffect(() => {
        if (!isPlaying || images.length <= 1) return;

        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [isPlaying, nextSlide, autoPlayInterval, images.length]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                prevSlide();
            } else if (event.key === 'ArrowRight') {
                nextSlide();
            } else if (event.key === ' ') {
                event.preventDefault();
                togglePlayPause();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!thumbnailContainerRef.current) return;
        setIsDragging(true);
        startXRef.current = e.pageX - thumbnailContainerRef.current.offsetLeft;
        scrollLeftRef.current = thumbnailContainerRef.current.scrollLeft;
        document.body.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        document.body.style.cursor = '';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.cursor = '';
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !thumbnailContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - thumbnailContainerRef.current.offsetLeft;
        const walk = (x - startXRef.current) * 2;
        thumbnailContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
    };

    if (images.length === 0) {
        return (
            <div className={`flex items-center justify-center bg-gray-200 rounded-lg ${className}`}>
                <p className="text-gray-500">No images to display</p>
            </div>
        );
    }

    return (
        <div className={`relative flex flex-col h-full ${className} gap-5`}>
            {/* Main Image Container - Takes up remaining space */}
            <div className="relative flex-grow overflow-hidden bg-blue-300 " style={{ borderRadius: '40px' }}>
                <div
                    className="flex h-full transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} style={{ borderRadius: "40px" }} className="w-full h-full flex-shrink-0 relative">
                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover object-center"
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows - Always visible (no hover needed) */}
                {showArrows && images.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            disabled={isTransitioning}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Previous image"
                        >
                            <MdKeyboardArrowLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={isTransitioning}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Next image"
                        >
                            <MdKeyboardArrowRight className="w-6 h-6" />
                        </button>
                    </>
                )}

                {/* Play/Pause Button */}
                {autoPlay && images.length > 1 && (
                    <button
                        onClick={togglePlayPause}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                    >
                        {isPlaying ? <IoPauseCircleOutline className="w-5 h-5" /> : <IoPlayCircleOutline className="w-5 h-5" />}
                    </button>
                )}

                {/* Image Counter */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Navigation - Fixed height at bottom */}
            {images.length > 1 && (
                <div className="h-20 p-2">
                    <div
                        ref={thumbnailContainerRef}
                        className="flex overflow-x-auto h-full items-center gap-2 cursor-grab active:cursor-grabbing no-scrollbar"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                disabled={isTransitioning}
                                className={`flex-shrink-0 rounded overflow-hidden border-2 transition-all duration-200 ${index === currentIndex
                                    ? 'border-blue-600 scale-105 shadow-lg'
                                    : 'border-gray-300 hover:border-gray-400 opacity-70 hover:opacity-100'
                                    } disabled:cursor-not-allowed`}
                                style={{
                                    width: '80px',
                                    height: '60px',
                                    borderRadius: '15px',
                                }}
                            >
                                <Image
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={80}
                                    height={60}
                                    className="object-cover w-full h-full"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;