import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './style.module.css'
import { MdArrowRightAlt } from 'react-icons/md';
import DateBadge from '@/components/ui/dateBadge';
import ProfileImageWithName from '@/components/ui/profileImageWithName';
interface CarrerResourceBoxProps {
    isDateBadgeActive?: boolean;
    isResourceOwnerProfileActive?: boolean;
}
const CarrerResourceBox = ({ isDateBadgeActive = true, isResourceOwnerProfileActive = false }: CarrerResourceBoxProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src="https://assets.td.org/m/6acb0623c293f3b0/webimage-7-Tips-for-Applying-for-a-Job-Within-Your-Company.png"
                    alt="Interview session"
                    fill
                    className="absolute"
                />
                {isDateBadgeActive && (<DateBadge date={20} month='MAR' year={2025} />)}
            </div>
            <div className={`${styles.sectionContent} ${isDateBadgeActive ? styles.badgePadding : styles.profilePadding}`}>
                <Link href={"/teaching-resources/how-to-answer"}><h3>How to Answer: Tell Me About Yourself</h3></Link>
                {isResourceOwnerProfileActive && (<ProfileImageWithName />)}
                <Link href="/teaching-resources/how-to-Answer" className="read-link flex gap-1 items-center">Read Details <MdArrowRightAlt size={20} /></Link>
            </div>
        </div>
    )
}

export default CarrerResourceBox