import Image from 'next/image'
import React from 'react'

interface RingCircleBgElementProps {
    size: number;
    position: string;
    image: string;
}

const RingCircleBgElement = ({ size, position, image }: RingCircleBgElementProps) => {
    return (
        <div className={`ringCircleBgElement ${position}`}>
            <Image src={image} alt='half-circle' width={size} height={size} />
        </div>
    )
}

export default RingCircleBgElement