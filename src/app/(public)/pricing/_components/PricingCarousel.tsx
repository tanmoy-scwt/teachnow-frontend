"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.css";
import { FaCheckCircle } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const plans = [
    {
        title: "1 Month",
        subtitle: "Ideal for small teams",
        credits: "3 Job credits",
        active: "Job will be active for 15 days",
        usage: "Use these credits in 30 days",
        price: "₹1799",
        original: "₹1950",
        discount: "7% OFF",
    },
    {
        title: "3 Months",
        subtitle: "Perfect for growing businesses",
        credits: "6 Job credits",
        active: "Job will be active for 15 days",
        usage: "Use these credits in 90 days",
        price: "₹3399",
        original: "₹3900",
        discount: "13% OFF",
        popular: true,
    },
    {
        title: "6 Months",
        subtitle: "Best fit for larger hiring needs",
        credits: "13 Job credits",
        active: "Job will be active for 15 days",
        usage: "Use these credits in 180 days",
        price: "₹6599",
        original: "₹8450",
        discount: "22% OFF",
    },
];

const PricingCarousel = () => {
    return (
        <div className={styles.wrapper}>
            <Swiper
                slidesPerView={1.4}
                breakpoints={{
                    568: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {plans.map((plan, idx) => (
                    <SwiperSlide className={styles.swiperSlide} key={idx}>
                        <div className={`${styles.card} ${plan.popular ? styles.popular : ""}`}>
                            {plan.popular && (
                                <div className={styles.popularTag}>Most Popular</div>
                            )}
                            <h3 className={styles.title}>{plan.title}</h3>
                            <p className={styles.subtitle}>{plan.subtitle}</p>
                            <ul className={styles.list}>
                                <li>
                                    <FaCheckCircle /> {plan.credits}
                                </li>
                                <li>
                                    <FaCheckCircle /> {plan.active}
                                </li>
                                <li>
                                    <FaCheckCircle /> {plan.usage}
                                </li>
                            </ul>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>{plan.price}</span>
                                <span className={styles.original}>{plan.original}</span>
                                <span className={styles.discount}>{plan.discount}</span>
                            </div>
                            <button className={styles.button}>
                                Buy Now <span className={styles.arrow}>→</span>
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PricingCarousel;
