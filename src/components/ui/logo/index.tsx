import Link from 'next/link'
import React from 'react'
import styles from './style.module.css'
const Logo = ({ className }: { className?: string }) => {
    return (
        <Link href={"/"} aria-label="Go to homepage">
            <span className={`${styles.logoName} ${className}`}>
                Teach<span>Now</span>
            </span>
        </Link>
    )
}

export default Logo