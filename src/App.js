import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import ExerciseDisplay from './components/exerciseDisplay/ExerciseDisplay';

import { useEffect, useState } from 'react';

import './app.css';

const URL = "https://raw.githubusercontent.com/vineetbi/VignamDB/main/db.json";

export const searchButtonIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>
);

function getSearchDataFromApiData(apiData) {
  const searchData = [];
  apiData.forEach(topic => {
    topic.exercises.forEach(exercise => {
      searchData.push({...exercise});
    })
  });

  return searchData;
}

function App() {
  const [data, setData] = useState([]);
  const searchSpace = data ? getSearchDataFromApiData(data): null;
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(resData => {
      setData(resData)
      setSelectedExercise(resData[0].exercises[0]);
      });
  }, [])

  return (
    <div className="app">
     <Navbar searchSpace={searchSpace} setSelectedExercise={setSelectedExercise}/>
     <div className='main-container'>
      <Sidebar data={data} setExercise={setSelectedExercise} selectedExercise={selectedExercise}/>
      <ExerciseDisplay exercise={selectedExercise}/>
     </div>
    </div>
  );
}

export default App;
