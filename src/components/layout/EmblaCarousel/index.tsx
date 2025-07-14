"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface EmblaCarouselProps {
    children: React.ReactNode[];
    showButtons?: boolean;
    showDots?: boolean;
    className?: string;
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({
    children,
    showButtons = true,
    showDots = true,
    className = "",
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        containScroll: "trimSnaps",
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi]
    );

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
    }, [emblaApi]);

    return (
        <div className={`relative w-full ${className}`}>
            {/* Embla viewport with extra vertical space to show shadows */}
            <div
                ref={emblaRef}
                className="w-full overflow-x-hidden py-8 bg-transparent"
            >
                <div className="flex items-center">
                    {children.map((child, index) => (
                        <div
                            key={index}
                            className="basis-[90%] shrink-0 grow-0 pr-4 overflow-visible"
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots + Buttons in one row */}
            {(showDots || showButtons) && (
                <div className="flex items-center justify-between mt-4 px-2">
                    {/* Pagination Dots */}
                    {showDots && (
                        <div className="flex gap-2">
                            {scrollSnaps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`h-2 w-2 rounded-full transition-all duration-200 ${index === selectedIndex
                                        ? "bg-blue-600 scale-110"
                                        : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    {showButtons && (
                        <div className="flex gap-2">
                            <button
                                onClick={scrollPrev}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full shadow transition"
                            >
                                ◀
                            </button>
                            <button
                                onClick={scrollNext}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full shadow transition"
                            >
                                ▶
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default EmblaCarousel;
