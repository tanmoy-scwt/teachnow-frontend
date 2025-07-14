import Container from '@/components/ui/container'
import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import ButtonRound from '@/components/ui/button'

const HireTheRightTalent = () => {
    return (
        <section className='section'>
            <Container>
                <div className={styles.hireTheRightTalent}>
                    <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2'>
                        <div className={`${styles.sectionContent} section-content`}>
                            <h2>Hire the Right Talent, Faster</h2>
                            <p>Post jobs, screen candidates, and fill positions with ease.</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div >
                                <div className={styles.imageWrapper}>
                                    <Image src={"/image/hire.png"} alt='hire' width={325} height={325} />
                                </div>
                            </div>
                            <div>
                                <ButtonRound name='post a job now' className='bgOutlined' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HireTheRightTalent