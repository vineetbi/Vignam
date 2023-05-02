import React, { useState } from 'react';
import './modal.css'
import { searchButtonIcon } from '../../App.js';


function SearchModal({ children, buttonText, buttonClass }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className={buttonClass} onClick={openModal}>
        {searchButtonIcon ? searchButtonIcon : null}
        {buttonText}
      </button>
      {showModal && (
        <div className="modal" onClick={e => {
          if(e.target.matches('.modal') || e.target.closest('.search-entry')) {
            closeModal();
          }
          }
        }>
          <div className="modal-content">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchModal;