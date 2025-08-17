import React from 'react'
import styles from './style.module.css'
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';

type ButtonRoundProps = {
    name?: string;
    goTo?: string;
    icon?: React.ReactNode;
    className?: string;
    type?: string;
    action?: () => void;
    extraClass?: string;
    buttonType?: 'button' | 'submit' | 'reset';
};

const ButtonRound = ({ name, goTo = "/", icon, className, type = 'Link', buttonType = "button" , action, extraClass }: ButtonRoundProps) => {
    return (
        <>
            {type.toLowerCase() === 'link' ? (
                <Link href={goTo} className={`${styles.roundBtn} ${styles[`${className}`]} ${extraClass}`}>
                    <span className={styles.btnText}>{name}</span>
                    <span className="sr-only">{name}</span>
                    {icon || <MdOutlineArrowOutward size={30} className={styles.btnIcon} />}
                </Link>
            ) : (
                <button type={buttonType} onClick={action} className={`${styles.roundBtn} ${styles[`${className}`]} ${extraClass}`}>
                    <span className={styles.btnText}>{name}</span>
                    <span className="sr-only">{name}</span>
                    {icon || <MdOutlineArrowOutward size={30} className={styles.btnIcon} />}
                </button>
            )}
        </>
    )
};

export default ButtonRound;
