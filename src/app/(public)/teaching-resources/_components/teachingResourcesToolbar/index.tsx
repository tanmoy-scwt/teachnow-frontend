"use client"
import dynamic from 'next/dynamic';
import React from 'react';

const SelectBoxComponent = dynamic(() => import('@/components/inputComponent/SelectBoxComponent'), {
    ssr: false,
});

const categoryOptions = [
    { label: 'Videos', value: 'videos' },
    { label: 'Worksheets', value: 'worksheets' },
    { label: 'Interactive Quizzes', value: 'quizzes' },
    { label: 'Lesson Plans', value: 'lesson_plans' },
];

const topicOptions = [
    { label: 'Algebra', value: 'algebra' },
    { label: 'Photosynthesis', value: 'photosynthesis' },
    { label: 'World War II', value: 'ww2' },
    { label: 'Grammar', value: 'grammar' },
];

const classLevelOptions = [
    { label: 'Class 1', value: '1' },
    { label: 'Class 2', value: '2' },
    { label: 'Class 3', value: '3' },
    { label: 'Class 4', value: '4' },
    { label: 'Class 5', value: '5' },
];

const boardOptions = [
    { label: 'CBSE', value: 'cbse' },
    { label: 'ICSE', value: 'icse' },
    { label: 'State Board', value: 'state' },
    { label: 'IB', value: 'ib' },
];

const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Hindi', value: 'hi' },
    { label: 'Tamil', value: 'ta' },
    { label: 'Bengali', value: 'bn' },
];

const perPageOptions = [
    { label: '10 per page', value: 10 },
    { label: '20 per page', value: 20 },
    { label: '50 per page', value: 50 },
];

const TeachingResourcesToolbar = ({
    category,
    topic,
    classLevel,
    board,
    language,
    perPage,
    onChangeCategory,
    onChangeTopic,
    onChangeClassLevel,
    onChangeBoard,
    onChangeLanguage,
    onChangePerPage,
}: {
    category: any;
    topic: any;
    classLevel: any;
    board: any;
    language: any;
    perPage: number;
    onChangeCategory: (val: any) => void;
    onChangeTopic: (val: any) => void;
    onChangeClassLevel: (val: any) => void;
    onChangeBoard: (val: any) => void;
    onChangeLanguage: (val: any) => void;
    onChangePerPage: (val: any) => void;
}) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6  gap-2 w-full selectBoxCSS">
            <SelectBoxComponent
                options={categoryOptions}
                value={category}
                onChange={onChangeCategory}
                name="category"
                placeholder="Category"
                className="react-select"
                classNamePrefix="react-select"
            />
            <SelectBoxComponent
                options={topicOptions}
                value={topic}
                onChange={onChangeTopic}
                name="topic"
                placeholder="Topic"
                className="react-select"
                classNamePrefix="react-select"
            />
            <SelectBoxComponent
                options={classLevelOptions}
                value={classLevel}
                onChange={onChangeClassLevel}
                name="classLevel"
                placeholder="Class Level"
                className="react-select"
                classNamePrefix="react-select"
            />
            <SelectBoxComponent
                options={boardOptions}
                value={board}
                onChange={onChangeBoard}
                name="board"
                placeholder="Board"
                className="react-select"
                classNamePrefix="react-select"
            />
            <SelectBoxComponent
                options={languageOptions}
                value={language}
                onChange={onChangeLanguage}
                name="language"
                placeholder="Language"
                className="react-select"
                classNamePrefix="react-select"
            />
            <SelectBoxComponent
                options={perPageOptions}
                value={perPageOptions.find(opt => opt.value === perPage) || null}
                onChange={onChangePerPage}
                name="perPage"
                placeholder="Results per page"
                className="react-select"
                classNamePrefix="react-select"
            />
        </div>
    );
};

export default TeachingResourcesToolbar;
