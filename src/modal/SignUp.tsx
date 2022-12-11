import React, {useEffect, useState} from 'react'
import './modal.css'
import { Dropdown } from '../components/buttons/Dropdown'
import { SecondaryButton } from '../components/buttons/SecondaryButton'

//functions
import {verifyEmail} from './LoginModel'

//hooks
import {useUserChange} from '../login/LoginContext'

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

export const SignUp:React.FC<Props> = ({setUser, setParentState}) => {
  //user context
  const changeUserContext = useUserChange()

  //which account to use
  const [useRiot, setUseRiot] = useState<boolean>(true)

  //email
  const [email, setEmail] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")

  //password
  const [password, setPassword] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")

  //summoner name
  const [summonerName, setSummoner] = useState<string>("")
  const [summonerError, setSummonerError] = useState<string>("")

  //region
  const [region, setRegion] = useState<string>("EUW")

  //username
  const [username, setUsername] = useState<string>("")
  const [usernameError, setUsernameError] = useState<string>("")

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
    console.log(tempPassword)
    if(tempPassword.length > 7){
      setPassword(tempPassword);
      setPasswordError("")
    }
    else{
      setPasswordError("Your password should have at least 8 characters")
    }
  }

  function handleUsernameChange(e:any){
    let tempUsername = e.target.value as string
    console.log(tempUsername)
    if(tempUsername.length > 7){
      setUsername(tempUsername);
      setUsernameError("")
    }
    else{
      setUsernameError("Your username should have at least 8 characters")
    }
  }

  function handleSummonerChange(e:any){
    setSummoner(e.target.value);
  }

  function handleRegionChange(value: string){
    setRegion(value)
  }

  function changeAccountOption(){
    let bool = useRiot
    setUseRiot(!bool)
  }


  function onComplete(){
    if(email === ""){
      setEmailError("Please insert you email")
      return
    }
    if(password === ""){
      setPasswordError("Please insert you password")
      return
    }
    if(useRiot){
      if(summonerName === ""){
        return
      }
    }
    else{
      if(username === ""){
        setUsernameError("Please insert your username")
        return
      }
    }
    let user: IUser  = {
      email: email,
      password: password,
      summonerName: summonerName,
      region: region,
      username: username
    }
    changeUserContext(user)
    setUser(user)
    setParentState("ConfirmRiotAccount")
  }


  return (
    <>
      <div className='modal-head'>
          <h3>Sign up</h3>
          <p className='body-small'>Create your account to start writing posts</p>
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
        <div className='toggle-wrapper'>
          <label className="switch" >
            <input type="checkbox" defaultChecked={true} onClick={changeAccountOption} id="checkbox"/>
            <span className="slider round"></span>
          </label>
          <h5>Use Riot account</h5>
        </div>


        {useRiot ?
        <div className='summoner-input'>
          <div className='input-wrapper'>
            <h5>Summoner name</h5>
            <input placeholder='ExampleTFT' type='username' id="summonerName" onChange={handleSummonerChange}/>
          </div>
          <Dropdown name="Region" defaultValue='EUW' values={["EUW", "EUNE", "NA", "KR", "BR"]} onChange={handleRegionChange} size="small"/>
        </div> 
        :
        <div className='input-wrapper username-wrapper'>
          <h5>Username</h5>
          <input placeholder='ExampleUsername' type='username' id="username" onChange={handleUsernameChange}/>
          <p className='error-label caption' id="usernameError">{usernameError}</p>
        </div>}
      </form>
      <div className='form-completion'>
        <SecondaryButton text='Create account' fn={onComplete}/>
        <p className='caption'>Already have an account?<span className='underline-button' onClick={() => setParentState("Login")}>Log in here</span></p>
      </div>
    </>
  )
}

export default SignUp