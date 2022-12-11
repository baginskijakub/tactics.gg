import React, {useEffect, useState} from 'react'
import './modal.css'
import { SecondaryButton } from '../components/buttons/SecondaryButton'

interface Props{
  setParentState: (state:string) => void
}

export const Login:React.FC<Props> = ({setParentState}) => {

  //email
  const [email, setEmail] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")


  function handleEmailChange(e:any){
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (e.target.value.match(validRegex)) {
      setEmail(e.target.value);
      setEmailError("")
    } else {
      setEmailError("Invalid email address")
    }
  }


  function onComplete(){
    if(email === ""){
      setEmailError("Please insert you email")
      return
    }
    else{
        setParentState("RecoveryEmail")
    }
  }


  return (
    <>
      <div className='modal-head'>
          <h3>Reset your password</h3>
          <p className='body-small'>We’ll send you an email so you can reset your password</p>
      </div>
      <form className='form-wrapper'>
        <div className='input-wrapper'>
          <h5>Email address</h5>
          <input placeholder='example@email.com' type='email' id="email" onChange={handleEmailChange}/>
          <p className='error-label caption' id="emailError">{emailError}</p>
        </div>
      </form>
      <div className='form-completion'>
        <SecondaryButton text='Send email' fn={onComplete}/>
        <p className='caption'>Don’t have an account?<span className='underline-button' onClick={() => setParentState("SignUp")}>Create an account</span></p>
      </div>
    </>
  )
}

export default Login