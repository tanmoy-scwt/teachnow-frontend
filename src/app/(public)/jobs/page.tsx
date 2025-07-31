import HeroSection from '@/components/common/heroSection'
import React from 'react'
import ListLayout from './_components/listLayout'

const Page = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
    const { page } = await searchParams
    return (
        <>
            <HeroSection title='<h1>Find Jobs</h1>' isSearchBoxActive={true} />
            <ListLayout currentPage={page ? +page : 1} />
        </>
    )
}

export default Page