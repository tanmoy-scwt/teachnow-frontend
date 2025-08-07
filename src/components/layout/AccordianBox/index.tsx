"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

interface AccordionItem {
    question?: string;
    answer?: string;
}

interface AccordionBoxProps {
    items?: AccordionItem[];
    className?: string;
}

const AccordionBox: React.FC<AccordionBoxProps> = ({ items, className }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(
        items?.length ? 0 : null
    );

    const toggleAccordion = (index: number) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className={`${styles.accordionWrapper} ${className || ""}`}>
            {items?.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                    <div
                        key={index}
                        className={`${styles.accordionItem} ${isActive ? styles.active : ""}`}
                    >
                        <button
                            className={styles.accordionHeader}
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className={styles.question}>
                                {item?.question || "No question"}
                            </span>
                            <span className={styles.icon}>
                                {isActive ? <GrFormSubtract size={22} /> : <IoMdAdd size={22} />}
                            </span>
                        </button>

                        <div
                            className={`${styles.accordionContent} ${isActive ? styles.open : styles.closed
                                }`}
                        >
                            <div className={styles.answer}>
                                {item?.answer || "No answer"}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AccordionBox;
