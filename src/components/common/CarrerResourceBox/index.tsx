import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './style.module.css'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdArrowRightAlt } from 'react-icons/md';
const CarrerResourceBox = () => {

    function getDaySuffix(dayNumber: number | string) {
        let day = +dayNumber;
        if (day < 1 || day > 31) return "";
        if (day % 100 >= 11 && day % 100 <= 13) return day + "th";

        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src="https://assets.td.org/m/6acb0623c293f3b0/webimage-7-Tips-for-Applying-for-a-Job-Within-Your-Company.png"
                    alt="Interview session"
                    fill
                    className="absolute"
                />
                <div className={`${styles.dateBadge}`}>
                    <div className={styles.date}>
                        <div className="day">
                            <span>20</span>
                            <span>th</span>
                        </div>
                        <span className="month">MAR</span>
                    </div>
                    <div className={styles.year}>2025</div>
                </div>
            </div>
            <div className={styles.sectionContent}>
                <Link href={""}>
                    <h3>How to Answer: Tell Me About Yourself</h3>
                </Link>
                <Link href="#" className="read-link flex gap-1 items-center">Read Details <MdArrowRightAlt size={20} /></Link>
            </div>
        </div>
    )
}

export default CarrerResourceBox