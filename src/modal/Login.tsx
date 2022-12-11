import React, {useEffect, useState} from 'react'
import './modal.css'
import { SecondaryButton } from '../components/buttons/SecondaryButton'

//modal hook
import { useModalChange } from './ModalContext'

//login hook
import {useUserChange, useUser} from '../login/LoginContext'

//functions
import {loginUser, getRiotAccount} from './LoginModel'

interface IUser{
  email: string
  password: string
  summonerName: string
  region: string
  username: string
}

interface Props{
  setUser: (user : IUser) => void
  setParentState: (state:string) => void
}

export const Login:React.FC<Props> = ({setUser, setParentState}) => {
  //controling modal
  const changeModal = useModalChange()

  //global user
  const changeUser = useUserChange()
  const user = useUser()

  //email
  const [email, setEmail] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")

  //password
  const [password, setPassword] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")

  function handleEmailChange(e:any){
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (e.target.value.match(validRegex)) {
      setEmail(e.target.value);
      setEmailError("")
    } else {
      setEmailError("Invalid email address")
    }
  }

  function handlePasswordChange(e:any){
    let tempPassword = e.target.value as string
    if(tempPassword.length > 7){
      setPassword(tempPassword);
      setPasswordError("")
    }
    else{
      setPasswordError("Your password should have at least 8 characters")
    }
  }


  function onComplete(){
    if(email === ""){
      setEmailError("Please insert you email")
      return
    }
    else if(password === ""){
      setPasswordError("Please insert you password")
      return
    }
    else{
      loginUser(email, password).then(res => {
        console.log(res)
        if(res.data.message === "You are logged in"){
          if(res.data.region !== undefined && res.data.summonerName !== undefined){
            console.log("inside if")
            getRiotAccount(res.data.region, res.data.summonerName).then((resRiot: any) => {
              console.log("dupa")
              changeUser({
                email: email,
                password: password,
                summonerName: res.data.summonerName,
                region: res.data.region,
                username: res.data.username,
                icon: resRiot.data.iconUrl,
                lp: resRiot.data.lp,
                rank: resRiot.data.rank
              })
              console.log(user)
            })
          }
          else{
            changeUser({
              email: email,
              password: password,
              summonerName: res.data.summonerName,
              region: res.data.region,
              username: res.data.username
            })
          }
          changeModal(false)
        }
        else{
          setPasswordError("We couldn't find your account")
        }

      }).catch(function (error){
        setPasswordError("We couldn't find your account")
      })
    }
  }


  return (
    <>
      <div className='modal-head'>
          <h3>Login</h3>
          <p className='body-small'>Create your account to climb faster in Teamfight Tactics!</p>
      </div>
      <form className='form-wrapper'>
        <div className='input-wrapper'>
          <h5>Email address</h5>
          <input placeholder='example@email.com' type='email' id="email" onChange={handleEmailChange}/>
          <p className='error-label caption' id="emailError">{emailError}</p>
        </div>
        <div className='input-wrapper'>
          <h5>Password</h5>
          <input placeholder='Example$123' type='password' id="password" onChange={handlePasswordChange}/>
          <p className='error-label caption' id="emailError">{passwordError}</p>
        </div>
        <h5><span className='underline-button' onClick={() => setParentState("ResetPassword")}>Forgot your password?</span></h5>
      </form>
      <div className='form-completion'>
        <SecondaryButton text='Login' fn={onComplete}/>
        <p className='caption'>Don’t have an account?<span className='underline-button' onClick={() => setParentState("SignUp")}>Create an account</span></p>
      </div>
    </>
  )
}

export default Login