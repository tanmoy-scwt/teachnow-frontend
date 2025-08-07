import React from 'react';
import Container from '../container';

type SectionContentProps = {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
    className?: string;
    titleCSS?: string;
    title: string;
};

const SectionContent = ({ variant, title, children, className = '', titleCSS = '' }: SectionContentProps) => {
    const HeadingTag = variant;
    return (
        <section className={className}>
            <Container>
                <div className='section-content'>
                    <HeadingTag className={titleCSS}>{title}</HeadingTag>
                </div>
                {children}
            </Container>
        </section>
    );
};

export default SectionContent;
