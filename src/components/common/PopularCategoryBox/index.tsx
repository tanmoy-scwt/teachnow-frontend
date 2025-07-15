import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'

const PopularCategoryBox = ({ categoryName, categoryIcon }: { categoryName: string; categoryIcon: string }) => {
    return (
        <div className={`${styles.categoryBox} transition-all duration-300 ease-in-out h-full`}>
            <div className={styles.icons}>
                <Image className='absolute' src={categoryIcon} fill alt='category1' />
            </div>
            <div className={styles.sectionContent}>
                <h3>{categoryName}</h3>
            </div>
        </div>
    )
}

export default PopularCategoryBox