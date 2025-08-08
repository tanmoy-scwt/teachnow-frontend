import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import styles from './style.module.css'

const StayAheadSubscribeInput = () => {
    return (
        <div className="w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] z-2">
            <div className={`flex items-center justify-between ${styles.subscribeInputBox}`} >
                <input className={`${styles.inputBox}`} type="email" placeholder='Enter your email address' />
                <button className={styles.btnBox} aria-label="Send Message">
                    <FaTelegramPlane size={28} />
                </button>
            </div>
        </div>
    )
}

export default StayAheadSubscribeInput