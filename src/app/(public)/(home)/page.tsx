import React from 'react'
import { CarrerResourceTips, FeaturedJobs, GetAsJobSeeker, HeroSection, HireTheRightTalent, PopularJobCategories, TopEmployees, } from './_components'

// import { getHomeMetadata } from '@/seo/getHomeMetaData';
// export async function generateMetadata() {
//     return await getHomeMetadata();
// }
const page = () => {
    return (
        <>
            <HeroSection />
            <PopularJobCategories />
            <TopEmployees />
            <GetAsJobSeeker />
            <FeaturedJobs />
            <HireTheRightTalent />
            <CarrerResourceTips />
        </>
    )
}

export default page