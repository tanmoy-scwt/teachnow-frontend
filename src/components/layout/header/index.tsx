"use client"
import React, { useState } from 'react';
import styles from "./style.module.css";
import Logo from '@/components/ui/logo';
import Container from '@/components/ui/container';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ButtonRound from '@/components/ui/button';
import { CgMenuMotion } from 'react-icons/cg';
import { HiMenu } from 'react-icons/hi';

// const navItems = [
//     { itemName: "Home", navLinks: "/" },
//     { itemName: "Find", navLinks: "/about" },
//     { itemName: "Jobs", navLinks: "/jobs" },
//     { itemName: "Employers", navLinks: "/employers" },
//     { itemName: "Candidates", navLinks: "/candidates" },
//     { itemName: "FAQ", navLinks: "/faq" },
//     { itemName: "Contact Us", navLinks: "/contact" },
// ];
const navItems = [
    { itemName: "Find Jobs", navLinks: "/jobs" },
    { itemName: "Free Resume Builder", navLinks: "/resume-builder" },
    { itemName: "Teaching Resources", navLinks: "/resources" },
    { itemName: "Pricing", navLinks: "/pricing" },
];

const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <header className={styles.header}>
            <Container>
                <Logo />
                <nav className={`${styles.navbar} ${isMenuOpen ? styles.navbarOpen : ''}`}>
                    <ul className={styles.navbarList}>
                        {navItems.map((items, index) => (
                            <li key={`navLinks${index}`}>
                                <Link
                                    href={items.navLinks}
                                    prefetch={true}
                                    className={`${pathname === items.navLinks ? styles.activeNavLink : ""}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {items.itemName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.headerAction}>
                    <ButtonRound name='Login' goTo='/' className='bgOutlined' />
                    <ButtonRound name='Post a job' goTo='/' className='bgFilled' />
                    <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
                        {isMenuOpen ? <CgMenuMotion className={styles.hamburger} size={32} color='#1E2D42' /> : <HiMenu className={styles.hamburger} size={32} color='#1E2D42' />}
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
