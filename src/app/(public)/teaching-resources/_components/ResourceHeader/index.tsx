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



const ResourceHeader = () => {
    return (
        <>
            <div className={style.resourceHeader}>
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                        <div className={style.imageCarousel}>
                            <ImageCarousel
                                images={carouselImages}
                                autoPlay={true}
                                autoPlayInterval={4000}
                                showArrows={true}
                                className="mb-8"
                            />
                        </div>
                        <div>
                            <div className={` section-content ${style.sectionContent} flex flex-col gap-5`}>
                                <h2>Epiphany Activity - Feast of the Three Kings Wisemen Reading Passage & Booklets</h2>
                                <ProfileImageWithName />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat enim quis turpis eleifend, nec efficitur nunc auctor.</p>
                                <div className='flex items-center justify-between'>
                                    <ButtonRound name='Download Resources' className={`bgFilled`} extraClass='w-max' />
                                    <div className='flex gap-2 items-center' aria-label="Share this page on social media">
                                        <p className='text-sm font-medium mb-0'>Share:</p>
                                        {socialArr?.map((social, index) => (
                                            <Link href={social.link} className='' key={`social${index}`} aria-label={`Share on ${social.label}`}>
                                                <Image src={social.icon} height={30} width={30} alt={social.label} />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ResourceHeader