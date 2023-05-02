import React from 'react'
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

export default function Sidebar({ data, setExercise, selectedExercise }) {
    return (
        <div className='sidebar'>
            {data.length > 0 ? <SidebarContent topics={data} setExercise={setExercise} selectedExercise={selectedExercise}/> : <div>Loading</div>}
        </div>
    )
}

function SidebarContent({ topics, setExercise, selectedExercise }) {
    const topicButtons = topics.map(topic => {
        return <SidebarTopicButton key={topic.id} {...topic} setExercise={setExercise} selectedExercise={selectedExercise}/>
    })

    return (
        <>
            {topicButtons}
        </>
    )
}

function SidebarTopicButton({id, name, exercises, setExercise, selectedExercise}) {
    const isTopicSelected = id === selectedExercise.topicId;

    const [height, setHeight] = useState(0);

    const exerciseLinks = exercises.map(exercise => {
        return <SidebarExerciseLink key={exercise.id} {...exercise} selectedExercise={selectedExercise} onClick={() => setExercise(exercise) }/>
    })

    const topicIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#339af0" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="5" y="3" width="14" height="18" rx="2"></rect><line x1="9" y1="7" x2="15" y2="7"></line><line x1="9" y1="11" x2="15" y2="11"></line><line x1="9" y1="15" x2="13" y2="15"></line></svg>
    );

    const arrow = (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{transform: "rotate(90deg)"}}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="9 6 15 12 9 18"></polyline></svg>
    );

    return (
        <div className='sidebar-topic-container'>
            <button onClick={() => setHeight(height === 0 ? 'auto' : 0)} className={`topic-button ${isTopicSelected ? "selected" : ""}`}>
                <div className='topic-button-icon-container'>
                    {topicIcon}
                </div>
                <span className='topic-title'>{name}</span>
                {arrow}
            </button>
            <AnimateHeight duration={500} height={isTopicSelected ? "auto" : height}>
                <div className='topic-exercise-container'>
                    {exerciseLinks}
                </div>
            </AnimateHeight>
        </div>
    )
}

function SidebarExerciseLink({ title, onClick, selectedExercise, id }) {
    const isExerciseSelected = id === selectedExercise.id;
    return (
        <div>
            <button className={`exercise-button ${isExerciseSelected ? "selected" : ""}`} onClick={onClick}>{title}</button>
        </div>
    )
}
