// app/components/FiveCircleLoader.tsx
"use client";
import React from "react";
import styles from './style.module.css';

const FiveCircleLoader = () => {
    return (
        <div className={styles.dancerWrapper}>
            <div className={styles.head}></div>
            <div className={styles.body}></div>
            <div className={styles.arms}>
                <div className={styles.arm + ' ' + styles.left}></div>
                <div className={styles.arm + ' ' + styles.right}></div>
            </div>
            <div className={styles.legs}>
                <div className={styles.leg + ' ' + styles.left}></div>
                <div className={styles.leg + ' ' + styles.right}></div>
            </div>
        </div>
    );
};

export default FiveCircleLoader;
