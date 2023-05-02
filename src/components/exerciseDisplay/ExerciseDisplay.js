import React, { useState } from 'react'
import Modal from '../Modal/ShareModal'

export default function ExerciseDisplay({ exercise }) {
  const text = exercise ? exercise.text : null;
  const title = exercise ? exercise.title : null;

  const [isSelectedTab, setIsSelectedTab] = useState(0);

  return (
    <div className='exercise-display'>
      <header>
        <div className='exercise-tab-button-container'>
          <ExerciseTabButton id={0} text={"Theory"} isSelectedTab={isSelectedTab} setIsSelectedTab={setIsSelectedTab}/>
          <ExerciseTabButton id={1} text={"Simulation"} isSelectedTab={isSelectedTab} setIsSelectedTab={setIsSelectedTab}/>
          <ExerciseTabButton id={2} text={"Video"} isSelectedTab={isSelectedTab} setIsSelectedTab={setIsSelectedTab}/>
          <ExerciseTabButton id={3} text={"Homework"} isSelectedTab={isSelectedTab} setIsSelectedTab={setIsSelectedTab}/>
          <ExerciseTabButton id={4} text={"Exercise"} isSelectedTab={isSelectedTab} setIsSelectedTab={setIsSelectedTab}/>
        </div>
        <div className='exercise-action-button-container'>
          <ExerciseActionButton text={"Board"}/>
          <ExerciseActionButton text={"Clear All"}/>
          <ExerciseActionButton text={"Pen"}/>
        </div>
      </header>
      <div className='exercise-title'>{title}</div>
      <span>{text}</span>
      <div className='share-modal-container'>
        <Modal/>
      </div>
    </div>
  )
}

function ExerciseTabButton({ text, isSelectedTab, setIsSelectedTab, id }) {
  const isSelected = id === isSelectedTab;
  return <button onClick={() => setIsSelectedTab(id)} className={`exercise-tab-button ${isSelected ? "selected" : ""}`}>{text}</button>
}

function ExerciseActionButton({ text }) {
  return <button className="exercise-action-button">{text}</button>
}