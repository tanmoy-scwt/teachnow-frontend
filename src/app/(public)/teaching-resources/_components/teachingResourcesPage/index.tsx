"use client";

import React, { useState } from "react";
import TeachingResourcesToolbar from "../teachingResourcesToolbar";
import Container from "@/components/ui/container";
import style from "./style.module.css"
import CarrerResourceBox from "@/components/common/CarrerResourceBox";

const TeachingResourcesPage = () => {
    const [category, setCategory] = useState(null);
    const [topic, setTopic] = useState(null);
    const [classLevel, setClassLevel] = useState(null);
    const [board, setBoard] = useState(null);
    const [language, setLanguage] = useState(null);
    const [perPage, setPerPage] = useState(10);

    return (
        <>
            <div className={style.teachingResourcesToolbar}>
                <Container>
                    <TeachingResourcesToolbar
                        category={category}
                        topic={topic}
                        classLevel={classLevel}
                        board={board}
                        language={language}
                        perPage={perPage}
                        onChangeCategory={setCategory}
                        onChangeTopic={setTopic}
                        onChangeClassLevel={setClassLevel}
                        onChangeBoard={setBoard}
                        onChangeLanguage={setLanguage}
                        onChangePerPage={(val) => setPerPage(val.value)}
                    />
                </Container>
            </div>
            <section className="section">
                <Container>
                    <div className="grid grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 15 }).map((_, index) => (<CarrerResourceBox key={index} isResourceOwnerProfileActive={true} isDateBadgeActive={false} />))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default TeachingResourcesPage;
