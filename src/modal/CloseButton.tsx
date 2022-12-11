import React from 'react'
import closeIcon from '../images/icons/close.svg'
import './modal.css'

interface Props{
    closeModal: () => void
}
export const CloseButton:React.FC<Props> = ({closeModal}) => {
  
  return (
    <div className='close-button' onClick={closeModal}>
        <img src={closeIcon} alt="Close"/>
    </div>
  )
}

export default CloseButton