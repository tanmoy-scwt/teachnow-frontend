import React from 'react'
import JobProfileInfoHeader from '../JobProfileInfoHeader'
import CompanyHeader from '../CompanyHeader'
import style from './style.module.css'

const JobsListingCard = ({ className }: { className?: string }) => {
    return (
        <article className={`${style.jobCard} ${className}`}>
            <CompanyHeader />
            <JobProfileInfoHeader className={style.jobProfileInfoHeader} />
        </article>
    )
}

export default JobsListingCard
