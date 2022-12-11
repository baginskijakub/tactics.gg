import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import CloseButton from './CloseButton'

//styles
import './modal.css'

//modal components
import SignUp from './SignUp'
import ConfirmRiotAccount from './ConfirmRiotAccount'
import Login from './Login'
import VerifyEmail from './VerifyEmail'
import CreateCompletion from './CreateCompletion'
import RecoveryEmailSent from './RecoveryEmailSent'
import ResetPassword from './ResetPassword'

//modal util
import {useModalChange, useModal} from './ModalContext'

interface IUser{
  email: string
  password: string
  summonerName: string
  region: string
  username: string
}

export const ModalContainer:React.FC = ({}) => {

const[user, setUser] = useState<IUser>({
  email: "",
  password: "",
  summonerName: "",
  region: "",
  username: ""
})
const[currentState, setCurrentState] = useState("Login");
const[currentElement, setCurrentElement] = useState(<Login setParentState={setCurrentState} setUser={setUser}/>);
const modalOpen:() => void = useModalChange()
const isOpen:boolean = useModal()

useEffect(() => {
  switch(currentState){
    case "SignUp":
      setCurrentElement(<SignUp  setParentState={setCurrentState} setUser={setUser}/>)
      break
    case "ConfirmRiotAccount":
      setCurrentElement(<ConfirmRiotAccount setParentState={setCurrentState}/>)
      break
    case "VerifyEmail":
      setCurrentElement(<VerifyEmail setParentState={setCurrentState} user={user}/>)
      break
    case "CreateCompletion":
      setCurrentElement(<CreateCompletion/>)
      break
    case "Login":
      setCurrentElement(<Login  setParentState={setCurrentState} setUser={setUser}/>)
      break
    case "RecoveryEmailSent":
      setCurrentElement(<RecoveryEmailSent />)
      break
    case "ResetPassword":
      setCurrentElement(<ResetPassword setParentState={setCurrentState}/>)
      break
    
  }
},  [currentState])

  function onModalClose(){
    modalOpen()
    setCurrentState("SignUp")
  }

  let portalDiv = document.getElementById("portal") as HTMLElement;

  if(!isOpen) return <></>
  
  return ReactDom.createPortal(
    <>
      <div className='modal-overlay'/>
      <div className='modal-wrapper'>
        <CloseButton closeModal={onModalClose}/>
        {currentElement}
      </div>
    </>,
    portalDiv
  )
}