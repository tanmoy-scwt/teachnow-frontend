import ImageCarousel from '@/components/layout/ImageCarousel'
import ButtonRound from '@/components/ui/button'
import Container from '@/components/ui/container'
import ProfileImageWithName from '@/components/ui/profileImageWithName'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './style.module.css'

const socialArr = [
    { icon: '/image/social/fbdark.svg', label: 'facebook', link: 'https://www.facebook.com' },
    { icon: '/image/social/xdark.svg', label: 'X', link: 'https://www.twitter.com' },
    { icon: '/image/social/linkedindark.svg', label: 'linkedin', link: 'https://www.linkedin.com' },
    { icon: '/image/social/instadark.svg', label: 'instagram', link: 'https://www.instagram.com' }
];

const carouselImages = [
    "/image/employeeResources/r1.png",
    "/image/employeeResources/r2.png",
    "/image/employeeResources/r3.png",
    "/image/employeeResources/r4.png",
    "/image/employeeResources/r1.png",
    "/image/employeeResources/r1.png",
    "/image/employeeResources/r2.png",
    "/image/employeeResources/r3.png",
    "/image/employeeResources/r4.png",
    "/image/employeeResources/r1.png",
    "/image/employeeResources/r1.png",
    "/image/employeeResources/r2.png",
    "/image/employeeResources/r3.png",
    "/image/employeeResources/r4.png",
    "/image/employeeResources/r1.png",
];


const whatsIncludedData = [
    { label: "Total Pages", value: "14 pages" },
    { label: "Answer Key", value: "Included" },
    { label: "Teaching Duration", value: "N/A" },
];
const ResourceHeader = () => {
    return (
        <>
            <div className={`${style.resourceHeader}`}>
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div className={style.imageCarousel}>
                            <ImageCarousel
                                images={carouselImages}
                                autoPlay={true}
                                autoPlayInterval={4000}
                                showArrows={true}
                                className="mb-8"
                            />
                        </div>
                        <div className='flex flex-col gap-[30px]'>
                            <div className="section-content flex flex-col items-center lg:items-start text-center lg:text-start gap-5">
                                <h2>Epiphany Activity - Feast of the Three Kings Wisemen Reading Passage & Booklets</h2>
                                <ProfileImageWithName />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat enim quis turpis eleifend, nec efficitur nunc auctor.</p>
                                <div className='flex items-center flex-col w-full lg:flex-row gap-4 justify-between'>
                                    <ButtonRound name='Download Resources' className={`bgFilled`} extraClass='w-max' />
                                    <div className='flex gap-2 items-center ' aria-label="Share this page on social media">
                                        <p className='text-sm font-medium mb-0 text-[#4679B5]'>Share:</p>
                                        {socialArr?.map((social, index) => (
                                            <div key={`socialLink${index}`} className={`inline-flex items-center justify-center transition-all duration-300 rounded-full hover:bg-[#E6F0FB]hover:shadow-[0_4px_12px_rgba(78,150,234,0.4)] hover:scale-105`}>
                                                <Link area-label={social.label} href={social.link} className='hover' key={`social${index}`} aria-label={`Share on ${social.label}`}>
                                                    <Image
                                                        src={social.icon}
                                                        alt={social.label}
                                                        width={30}
                                                        height={30}
                                                        sizes="30px"
                                                        className="w-[30px] h-[30px]"
                                                    />
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={style.whatsInclude}>
                                <h3 >{`What's Included`}</h3>
                                <ul className='flex flex-col gap-[10px]'>
                                    {whatsIncludedData?.map((option, index) => (
                                        <li key={`whatsIncludeOption${index}`} className='grid grid-cols-2 items-start'>
                                            <dt className="text-[#949494]">{option?.label}</dt>
                                            <dd className="text-[#505050] font-medium">{option?.value}</dd>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div >
                </Container>
            </div >
        </>
    )
}

export default ResourceHeader