
import Container from '@/components/ui/container';
import React from 'react';

type LayoutWithSidebarProps = {
    sidebar: React.ReactNode;
    main: React.ReactNode;
    mainOrder: string;
    asideOrder: string;
};

const LayoutWithSidebar = ({ sidebar, main, asideOrder, mainOrder }: LayoutWithSidebarProps) => {
    return (
        <>
            <Container>
                <div className="flex gap-8 flex-wrap md:flex-nowrap relative">
                    <aside className={`hidden lg:block w-[30%] ${asideOrder}`}>
                        {sidebar}
                    </aside>
                    <main className={`w-full lg:w-[70%] z-10 ${mainOrder}`}>
                        {main}
                    </main>
                </div>
            </Container>
        </>
    );
};

export default LayoutWithSidebar;
