import React from 'react'
import logo from '../../assets/logo.png'
import SearchBox from '../searchBox/SearchBox'
import Modal from '../Modal/SearchModal'

export default function Navbar({ searchSpace, setSelectedExercise }) {
  return (
    <nav className='navbar'>
      <img src={logo} alt=""/>
      <button>Class 6 English Grammar</button>
      <div className='navbar-search-container'>
        <Modal buttonClass="navbar-search-button" buttonText="Search for Topic and Chapters">
          <SearchBox searchSpace={searchSpace} setSelectedExercise={setSelectedExercise}/>
        </Modal>
      </div>
    </nav>
  )
}
