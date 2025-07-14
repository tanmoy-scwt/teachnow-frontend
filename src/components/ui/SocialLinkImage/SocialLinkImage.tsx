import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SocialLinkImageProps {
    icon: string;
    name: string;
    url: string;
    className: string;
}

const SocialLinkImage = ({ icon, name, url, className }: SocialLinkImageProps) => {
    return (
        <li className={`${className}`}>
            <Link href={url}>
                <Image src={icon} width={32} height={32} alt={name} />
            </Link>
        </li>
    )
}

export default SocialLinkImage