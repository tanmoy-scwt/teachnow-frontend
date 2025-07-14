import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'

const EmployeeLogo = ({ employeeLogo }: { employeeLogo: string }) => {
    return (
        <div className={styles.employeeLogo}>
            <Image className='absolute' src={employeeLogo} fill alt='Employee Logo' />
        </div>
    )
}

export default EmployeeLogo