import React from 'react'
import { useState } from 'react';

export default function SearchBox({ searchSpace, setSelectedExercise }) {
    const [inputValue, setInputValue] = useState("");

    function searchQuery({ title, topicName}) {
        const searchText = inputValue.toLowerCase();
        return title.toLowerCase().includes(searchText) || topicName.toLowerCase().includes(searchText);
    }

    const results = searchSpace.filter(entry => searchQuery(entry));
    const resultElements = results.map(result => <SearchEntry key={result.id} exercise={result} setSelectedExercise={setSelectedExercise}/>)
    
    return (
        <div className='searchbox-container'>
            <div className='search-input-container'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>
                <input className='search-input' value={inputValue} placeholder='Search for Topics/Chapter' onChange={e => setInputValue(e.target.value)}/>
            </div>
             <div className='search-results-container'>
               {resultElements}
            </div>
        </div>
    )
}

function SearchEntry({ exercise, setSelectedExercise }) {
    const { title, topicName } = exercise;

    return (
        <button onClick={() => setSelectedExercise(exercise)} className='search-entry'>
            <div className='search-entry-exercise'>{title}</div>
            <div className='search-entry-topic'>{topicName}</div>
        </button>
    )
}
