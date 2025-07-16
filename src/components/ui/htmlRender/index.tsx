'use client';
import React, { FC, useMemo } from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

interface HtmlRenderProps {
    htmlString: string;
    className?: string;
}

const HtmlRender: FC<HtmlRenderProps> = ({ htmlString, className }) => {
    const cleanHTML = useMemo(() => DOMPurify.sanitize(htmlString), [htmlString]);

    return <div className={className}>{parse(cleanHTML)}</div>;
};

export default HtmlRender;
