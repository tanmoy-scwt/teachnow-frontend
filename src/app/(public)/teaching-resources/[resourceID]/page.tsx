import HeroSection from '@/components/common/heroSection'
import React from 'react'
import YouMayAlsoLike from '../_components/youMayAlsoLike'
import ResourceDescription from '../_components/ResourceDescription'
import ResourceHeader from '../_components/ResourceHeader'

const Page = () => {
    return (
        <>
            <HeroSection title='<h1>Epiphany Activity - Feast of the </h1>' />
            <section className='section'>
                <ResourceHeader />
                <ResourceDescription />
            </section>
            <YouMayAlsoLike />
        </>
    )
}

export default Page