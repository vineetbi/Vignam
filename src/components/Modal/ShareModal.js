import React, { useState } from 'react';
import './modal.css'


function ShareModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className='share-modal-button' onClick={openModal}>
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" cursor="pointer"><path d="M25.4333 37.0835H14.5667C6.38333 37.0835 2.88333 33.5835 2.88333 25.4001V25.1835C2.88333 17.7835 5.8 14.2168 12.3333 13.6001C13 13.5501 13.6333 14.0501 13.7 14.7335C13.7667 15.4168 13.2667 16.0335 12.5667 16.1001C7.33333 16.5835 5.38333 19.0501 5.38333 25.2001V25.4168C5.38333 32.2001 7.78333 34.6001 14.5667 34.6001H25.4333C32.2167 34.6001 34.6167 32.2001 34.6167 25.4168V25.2001C34.6167 19.0168 32.6333 16.5501 27.3 16.1001C26.6167 16.0335 26.1 15.4335 26.1667 14.7501C26.2333 14.0668 26.8167 13.5501 27.5167 13.6168C34.15 14.1835 37.1167 17.7668 37.1167 25.2168V25.4335C37.1167 33.5835 33.6167 37.0835 25.4333 37.0835Z" fill="#2289E9"></path><path d="M20 26.2499C19.3167 26.2499 18.75 25.6832 18.75 24.9999V6.0332C18.75 5.34987 19.3167 4.7832 20 4.7832C20.6833 4.7832 21.25 5.34987 21.25 6.0332V24.9999C21.25 25.6832 20.6833 26.2499 20 26.2499Z" fill="#2289E9"></path><path d="M25.5833 11.0001C25.2667 11.0001 24.95 10.8834 24.7 10.6334L20 5.9334L15.3 10.6334C14.8167 11.1167 14.0167 11.1167 13.5333 10.6334C13.05 10.1501 13.05 9.35007 13.5333 8.86673L19.1167 3.2834C19.6 2.80007 20.4 2.80007 20.8833 3.2834L26.4667 8.86673C26.95 9.35007 26.95 10.1501 26.4667 10.6334C26.2333 10.8834 25.9 11.0001 25.5833 11.0001Z" fill="#2289E9"></path></svg>
      </button>
      {showModal && (
        <div className="modal" onClick={e => {
          if(e.target.matches('.modal') || e.target.closest('.share-modal-close-button')) {
            closeModal();
          }
          }
        }>
          <div className="modal-content share-modal-content">
            <div className="share-modal-header">
                <div style={{fontWeight: "400"}}>Share Link</div>
                <button className='share-modal-close-button'>
                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" stroke="rgb(134, 142, 150)" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="share-modal-body">
                <div style={{color: "black", fontWeight: "700", marginTop: "12px", fontSize: "22px"}}>Share this link for students</div>
                <div style={{marginBottom: "14px", fontSize: "17px", fontWeight: "400"}}>{window.location.href}</div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="rgb(51, 154, 240)" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg>
                    <div style={{color: "rgb(51, 154, 240)", fontWeight: "700", fontSize: "14px"}}>Copy Link</div>
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareModal;