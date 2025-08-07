import React from 'react'
import AccordionBox from '@/components/layout/AccordianBox';
import SectionContent from '@/components/ui/SectionContent';
import PricingCarousel from './_components/PricingCarousel';
import HeroSection from '@/components/common/heroSection';

const faqData = [
    {
        question: "In which cities can I hire via Teachnow?",
        answer:
            "Curabitur malesuada ipsum in magna pellentesque, sed tincidunt metus ornare. Nullam egestas neque sit amet ipsum aliquet.",
    },
    {
        question: "Does Teachnow offers EMI options?",
        answer: "Yes, EMI options are available on selected plans.",
    },
    {
        question: "Is job validity different than credits validity?",
        answer: "Yes, job validity refers to the time a job is active, while credits are used to post jobs or access features.",
    },
    {
        question: "Do I get GST invoice for my purchase?",
        answer: "Yes, GST invoices are issued for all valid purchases.",
    },
    {
        question: "What type of payments do you accept?",
        answer: "We accept credit/debit cards, UPI, net banking, and EMI options.",
    },
];


const page = () => {
    return (
        <>
            <HeroSection title='<h1>Pricing</h1>' />
            <SectionContent isContainerActive={false} variant='h2' title='Choose from our tailored plans.' titleCSS='text-center' className='section'>
                <PricingCarousel />
            </SectionContent>
            <SectionContent variant='h2' title='Frequently Asked Question' titleCSS='text-center' className='section'>
                <AccordionBox items={faqData} />
            </SectionContent>
        </>
    )
}

export default page