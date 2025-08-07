import React from 'react'
import HeroSection from '@/components/common/heroSection'
import JobHeaderCompany from '../_components/jobDetailLayout/CompanyHeader'
import JobHeaderJobRole from '../_components/jobDetailLayout/JobProfileInfoHeader'
import Container from '@/components/ui/container'
import Divider from '@/components/ui/divider'
import LayoutWithSidebar from '@/components/layout/LayoutWithSidebar'
import JobOverview from '../_components/jobDetailLayout/JobOverview'
import JobDescription from '../_components/jobDetailLayout/JobDescription'
import style from '../_components/jobDetailLayout/style.module.css'

const Page = () => {
    return (
        <>
            <HeroSection title={`<h1>ABC Tech Innovators</h1>`} />
            <section className='section'>
                <Container>
                    <div className='flex flex-col  gap-8'>
                        <div className='flex flex-col gap-4'>
                            <JobHeaderCompany />
                            <Divider height={1} color='#D9D9D9' />
                        </div>
                        <JobHeaderJobRole className={style.jobHeaderJobRoleBtn} buttonClass='bgFilled' btnText={'Login to apply'} />
                    </div>
                </Container>
            </section>
            <LayoutWithSidebar
                sidebar={<JobOverview />}
                main={<JobDescription />}
                mainOrder='order-1'
                asideOrder='order-2'
            />
        </>
    )
}

export default Page