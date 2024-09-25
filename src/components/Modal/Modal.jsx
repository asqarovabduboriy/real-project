import React, { useState } from 'react'
import './Modal.scss'

const Modal = ({children}) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="wrapper_modal">
        {children}
      </div>
    </>
  )
}

export default Modal