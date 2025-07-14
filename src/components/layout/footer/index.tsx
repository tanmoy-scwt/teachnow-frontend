import Container from "@/components/ui/container";
import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import styles from './style.module.css'
import Logo from "@/components/ui/logo";
import Link from "next/link";
import SocialLinkImage from "@/components/ui/SocialLinkImage/SocialLinkImage";
import StayAheadInJobHunt from "../StayAheadInJobHunt";

const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { label: "Contact Us", path: "/contact" },
            { label: "About Us", path: "/about" },
            { label: "Blog", path: "/blog" },
        ],
    },
    {
        title: "For JobSeekers",
        links: [
            { label: "Find Jobs", path: "/jobs" },
            { label: "Free Resume Builder", path: "/resume-builder" },
            { label: "Teaching Resources", path: "/teaching-resources" },
        ],
    },
    {
        title: "For Employers",
        links: [
            { label: "Post a Job", path: "/post-job" },
            { label: "Pricing", path: "/pricing" },
            { label: "Employer Login", path: "/employer-login" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy & Policy", path: "/privacy-policy" },
            { label: "Terms & Conditions", path: "/terms" },
            { label: "FAQs", path: "/faqs" },
        ],
    },
    {
        title: "Contact Us",
        contact: {
            email: "support@technow.com",
            phone: "+91 9874 561 230",
        },

    },
];

const socialLinks = [
    {
        name: "Facebook",
        icon: "/image/social/fb.svg",
        url: "https://www.facebook.com/yourprofile",
    },
    {
        name: "Instagram",
        icon: "/image/social/insta.svg",
        url: "https://www.instagram.com/yourprofile",
    },
    {
        name: "X",
        icon: "/image/social/x.svg",
        url: "https://x.com/yourprofile",
    },
    {
        name: "LinkedIn",
        icon: "/image/social/linkedin.svg",
        url: "https://www.linkedin.com/in/yourprofile",
    },
];


const Footer = () => {
    return (
        <>
            <div className={styles.StayAheadInJobHuntWrapper}>
                <StayAheadInJobHunt />
            </div>
            <footer className={styles.footer}>
                <Container>
                    <div className={styles.footerWrapper}>
                        <div className={`flex items-center justify-between ${styles.bottomLine}`}>
                            <Logo className={styles.Logo} />
                            <div className="flex items-center gap-10">
                                <div className={`${styles.sectiionContent}`} >
                                    <h4>Follow Us</h4>
                                </div>
                                <ul className="flex gap-5 items-center">
                                    {socialLinks?.map((social, index) => (
                                        <SocialLinkImage key={`socailLinks${index}`} className={`${styles.socialIcons}`} url={social.url} icon={social.icon} name={social.name} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {footerLinks.map((section, index) => (
                                <div key={index} className={`${styles.sectiionContent} section-content`}>
                                    <h4>{section.title}</h4>
                                    {section.links && (
                                        <ul className={styles.footerNavItemUl}>
                                            {section.links.map((link, idx) => (
                                                <li key={idx}><Link href={link.path}>{link.label}</Link></li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.contact && (
                                        <ul className={`${styles.footerNavItemUl} ${styles.footerContactLink}`}>
                                            <li className="flex items-center gap-2">
                                                <FiMail className="shrink-0" />
                                                <Link href={`mailto:${section.contact.email}`}>
                                                    {section.contact.email}
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <FiPhone className="shrink-0" />
                                                <Link href={`tel:${section.contact.phone}`}>
                                                    <span>{section.contact.phone}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}

                                </div>
                            ))}
                        </div>

                        <div className={`flex items-center justify-between ${styles.topLine}`}>
                            <div className={`${styles.sectiionContent}`} >
                                <p>Copyright  &copy; {new Date().getFullYear()} TeachNow. All rights reserved.</p>
                            </div>
                            <div className={`${styles.sectiionContent}`} >
                                <ul className={`${styles.footerNavItemUl} flex gap-12 items-center`}>
                                    <li><Link href={"/terms"}>Terms & Conditions </Link></li>
                                    <li><Link href={"/privacy-policy"}>Privacy & Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
