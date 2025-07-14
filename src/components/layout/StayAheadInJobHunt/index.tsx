import Container from '@/components/ui/container'
import StayAheadSubscribeInput from '@/components/ui/StayAheadSubscribeInput'
import React from 'react'
import styles from './style.module.css'
import RingCircleBgElement from '@/components/ui/RingCircleBgElement'

const StayAheadInJobHunt = () => {
    return (
        <div className={styles.stayWrapper}>
            <Container>
                <div className={`${styles.stayAheadInJobHuntContainer} relative`}>
                    <RingCircleBgElement size={335} position='rightBottomAlign' image={"/image/half-circle.png"} />
                    <RingCircleBgElement size={335} position='leftTopAlign' image={"/image/half-circle-left-top.png"} />
                    <div className={`${styles.sectionContent} section-content`}>
                        <h3>Stay Ahead in Your Job Hunt</h3>
                    </div>
                    <StayAheadSubscribeInput />
                </div>
            </Container>
        </div>
    )
}

export default StayAheadInJobHunt