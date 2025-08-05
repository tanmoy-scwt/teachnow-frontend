import React from 'react';
import Container from '../container';

type SectionContentProps = {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
    className?: string;
    title: string;
};

const SectionContent = ({ variant, title, children, className = '' }: SectionContentProps) => {
    const HeadingTag = variant;
    return (
        <section className={className}>
            <Container>
                <div className='section-content'>
                    <HeadingTag>{title}</HeadingTag>
                </div>
                {children}
            </Container>
        </section>
    );
};

export default SectionContent;
