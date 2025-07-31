"use client"
import React from 'react';
import styles from './style.module.css';
import { getDaySuffix } from '@/utils/helperFunction';


interface DateBadgeProps {
    date?: string | number;
    month?: string;
    year?: string | number;
}

const DateBadge = ({ date = '', month = '', year = '' }: DateBadgeProps) => {
    return (
        <div className={styles.dateBadge}>
            <div className={styles.date}>
                <div className={styles.day}>
                    <span className={styles.dayNumber}>{date}</span>
                    <span>{getDaySuffix(date)}</span>
                </div>
                <span>{month}</span>
            </div>
            <div className={styles.year}>{year}</div>
        </div>
    );
};

export default DateBadge;
