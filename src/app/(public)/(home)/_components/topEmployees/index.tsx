import Container from '@/components/ui/container'
import React from 'react'
import styles from './style.module.css';
import ButtonRound from '@/components/ui/button';
import EmployeeLogo from '@/components/common/EmployeeLogo';

const employeesLogo = [
    "/image/employeeLogo/e1.png",
    "/image/employeeLogo/e2.png",
    "/image/employeeLogo/e3.png",
    "/image/employeeLogo/e4.png",
    "/image/employeeLogo/e5.png",
    "/image/employeeLogo/e6.png",
]

const TopEmployees = () => {
    return (
        <section className={`${styles.topEmployeeSection} section`}>
            <Container className={styles.topEmployeesWrapper}>
                <div className={styles.topEmployeesTop}>
                    <div className={`${styles.sectionContent} section-content`}>
                        <h2>Top Employers</h2>
                    </div>
                    <div className={styles.topEmployeesBtnWrapper}>
                        <ButtonRound name='view all' type='radio' className='bgOutlined' />
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 p-4">
                    {employeesLogo?.map((item, index) => (<EmployeeLogo key={`employeelogo${index}`} employeeLogo={item} />))}
                </div>
                <div className={styles.topEmployeesBtnWrapperMbl}>
                    <ButtonRound name='view all' type='radio' className='bgOutlined' />
                </div>
            </Container>
        </section >
    )
}

export default TopEmployees