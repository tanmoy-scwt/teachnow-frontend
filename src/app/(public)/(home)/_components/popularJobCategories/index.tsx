import Container from '@/components/ui/container'
import React from 'react'
import styles from './style.module.css'
import PopularCategoryBox from '@/components/common/PopularCategoryBox'

const Categories = [
    {
        categoryName: "School Teachers",
        categoryIcon: "/image/icons/categoriesPopular/c1.svg",
    },
    {
        categoryName: "College & University Faculty",
        categoryIcon: "/image/icons/categoriesPopular/c2.svg",
    },
    {
        categoryName: "Engineering & Polytechnic",
        categoryIcon: "/image/icons/categoriesPopular/c3.svg",
    },
    {
        categoryName: "Medical & Paramedical",
        categoryIcon: "/image/icons/categoriesPopular/c4.svg",
    },
    {
        categoryName: "Coaching & Test Prep",
        categoryIcon: "/image/icons/categoriesPopular/c5.svg",
    },
    {
        categoryName: "Sports & Arts Trainers",
        categoryIcon: "/image/icons/categoriesPopular/c6.svg",
    },
    {
        categoryName: "Curriculum & Consulting",
        categoryIcon: "/image/icons/categoriesPopular/c7.svg",
    },
    {
        categoryName: "HR & Admin Roles",
        categoryIcon: "/image/icons/categoriesPopular/c8.svg",
    },
];


const PopularJobCategories = () => {
    return (
        <section className='section'>
            <Container>
                <div className={styles.popularJobWrapper}>
                    <div className={`${styles.sectionContent} section-content`}>
                        <h2>Most <span>Popular job</span> Categories</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 transition-all duration-300 ease-in-out">
                        {Categories?.map((item, index) => (
                            <PopularCategoryBox key={`popularCategoryBox${index}`} categoryName={item?.categoryName} categoryIcon={item?.categoryIcon} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>

    )
}

export default PopularJobCategories