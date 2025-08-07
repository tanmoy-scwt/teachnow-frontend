import Container from '@/components/ui/container'
import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import ButtonRound from '@/components/ui/button'

const HireTheRightTalent = () => {
    return (
        <section className='section'>
            <Container className={styles.hireTheRightTalent}>
                <div className={`${styles.sectionContent} section-content`}>
                    <h2>Hire the Right Talent, Faster</h2>
                    <p>Post jobs, screen candidates, and fill positions with ease.</p>
                    <div className={`w-max ${styles.sectionBtn}`}>
                        <ButtonRound name='view all jobs' className='bgOutlined' />
                    </div>
                </div>
                <div className={`${styles.imageWrapperContainer}`}>
                    <div >
                        <div className={styles.imageWrapper}>
                            <Image src={"/image/hire.png"} alt='hire' width={325} height={325} />
                        </div>
                    </div>
                    <div className={styles.imageBtn}>
                        <ButtonRound name='view all jobs' className='bgOutlined' />
                    </div>
                </div>
            </Container>
        </section >
    )
}

export default HireTheRightTalent