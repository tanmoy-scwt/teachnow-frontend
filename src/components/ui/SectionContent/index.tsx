import React from 'react';
import Container from '../container';

type SectionContentProps = {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
    className?: string;
    titleCSS?: string;
    title: string;
    isContainerActive?: boolean;
    useCustomCSS?: boolean;
};

const SectionContent = ({ isContainerActive = true, variant, title, children, className = '', titleCSS = '', useCustomCSS = false }: SectionContentProps) => {
    const HeadingTag = variant;
    return (
        <section className={className}>
            {isContainerActive ? (
                <Container>
                    <div className='section-content'>
                        <HeadingTag className={titleCSS}>{title}</HeadingTag>
                    </div>
                    {children}
                </Container>
            ) : (
                <>
                    <div className='section-content'>
                        <HeadingTag className={`${titleCSS} ${useCustomCSS ? "!text-[clamp(22px,4vw,36px)] !font-medium text-[var(--primary-color)] !mb-6" : ''}`}>{title}</HeadingTag>
                    </div>
                    {children}
                </>
            )}

        </section>
    );
};

export default SectionContent;
