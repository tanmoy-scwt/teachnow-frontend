import React from "react";
import TeachingResourcesToolbar from "../teachingResourcesToolbar";
import Container from "@/components/ui/container";
import style from "./style.module.css"
import CarrerResourceBox from "@/components/common/CarrerResourceBox";

const TeachingResourcesPage = () => {

    return (
        <>
            <div className={style.teachingResourcesToolbar}>
                <Container>
                    <TeachingResourcesToolbar />
                </Container>
            </div>
            <section className="section">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 15 }).map((_, index) => (<CarrerResourceBox key={index} isResourceOwnerProfileActive={true} isDateBadgeActive={false} />))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default TeachingResourcesPage;
