'use client'

import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
const ProfileImageWithName = () => {
    return (
        <div className={styles.resoucesOwner}>
            <div className={styles.imageWrapper}>
                <Image
                    src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                    fill
                    className={`${styles.profileImage}`}
                    sizes="40px"
                />
            </div>
            <p>Jennifer Findley</p>
        </div>
    )
}

export default ProfileImageWithName