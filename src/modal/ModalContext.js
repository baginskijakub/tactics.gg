import React, {useContext, useState} from 'react'

const ModalContext = React.createContext();
const ModalChangeContext = React.createContext()


export function useModal(){
    return useContext(ModalContext)
}

export function useModalChange(){
    return useContext(ModalChangeContext)
}

export function ModalContextProvider({ children }) {
    const[isOpen, setIsOpen] = useState(false)

    function changeState(){
        setIsOpen(!isOpen)
    }
    
  return (
    <ModalContext.Provider value={isOpen}>
        <ModalChangeContext.Provider value={changeState}>
            {children}
        </ModalChangeContext.Provider>
    </ModalContext.Provider>
  )
}

export default ModalContext