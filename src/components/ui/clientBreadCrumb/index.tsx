'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const BreadcrumbLoader = () => (
    <div className="h-7 w-48 rounded-2xl bg-blue-300 animate-pulse" />
);

const BreadCrumb = dynamic(() => import('@/components/ui/breadCrumb'), {
    ssr: false,
    loading: () => <BreadcrumbLoader />,
});

const ClientBreadcrumb = () => {
    return <BreadCrumb />;
};

export default ClientBreadcrumb;
