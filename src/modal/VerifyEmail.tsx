import React, {useEffect, useState} from 'react'
import './modal.css'
import { SecondaryButton } from '../components/buttons/SecondaryButton'
import { PrimaryButton } from '../components/buttons/PrimaryButton'

//functions
import {verifyEmail, registerUser} from './LoginModel'

//hooks
import {useUser, useUserChange} from '../login/LoginContext'

interface IUser{
    email: string
    password: string
    summonerName: string | undefined
    region: string | undefined
    username: string | undefined
  }

interface Props{
    setParentState: (state:string) => void
    user: IUser
  }

export const VerifyEmail:React.FC<Props> = ({setParentState, user}) => {
    const userContext = useUser()
    const userChange = useUserChange()

    const [correctCode, setCorrectCode] = useState("");

    const[code, setCode] = useState([0,0,0,0]);
    const [errorLabel, setErrorLabel] = useState<string>("")

    useEffect(() => {
        if(user === null || user.email === null){
            setErrorLabel("An unexpected error has occured please refresh the page")
        }
        else{
            verifyEmail(user!.email).then(res => {
                console.log(res)
                console.log(res.data)
                console.log(res.data.verificationCode)
                setCorrectCode(res.data.verificationCode)
            })
        }

    }, [])

    function handleInputChange(e: any){
        let validRegex = /^\d+$/;


        if (e.target.value.match(validRegex)) {
            let tempCode:number[] = []
            code.forEach((num, index) => {
                if(parseInt(e.target.id) === index){
                    tempCode.push(parseInt(e.target.value))
                }
                else{
                    tempCode.push(num)
                }
            })
            setCode(tempCode)
            let nextElemId : number = parseInt(e.target.id) + 1
            let nextElement = document.getElementById(nextElemId.toString()) as HTMLInputElement
            try{
                nextElement.focus();
            }
            catch{
                return
            }

        }
        else{
            let element = document.getElementById(e.target.id) as HTMLInputElement
            element!.value = ""
        }
    }

    function onComplete(){
        let codeStr = ""
        code.forEach((digit) => {
            if(digit > 9){
                setErrorLabel("Code should consist of 4 one-digit")
                return
            }
            else{
                codeStr += digit.toString()
            }
        })
        console.log(correctCode, codeStr, typeof codeStr)

        if(codeStr === correctCode){
            console.log(user)
            registerUser(user).then(res => {
                console.log(res)
                userChange(user)
                setParentState("CreateCompletion")
            })
        }
        else{
            setErrorLabel("Incorrect code")
        }

    }

  return (
    <>
        <div className='modal-head'>
          <h3>Please check your email</h3>
          <p className='body-small'>We’ve sent a code to baginnz@gmail.com</p>
        </div>
        <div className='email-code-wrapper'>
            <h5>Insert your code here</h5>
            <form className='email-code-form'>
                <input className='email-code-input' id="0" onChange={handleInputChange}/>
                <input className='email-code-input' id="1" onChange={handleInputChange}/>
                <input className='email-code-input' id="2" onChange={handleInputChange}/>
                <input className='email-code-input' id="3" onChange={handleInputChange}/>
            </form>
            <p className='error-label caption'>{errorLabel}</p>
            <p className='caption'>Didn't get a code?<span className='underline-button'>Click here to resend</span></p>
        </div>
        <div className='buttons-container'>
            <PrimaryButton text="Cancel" fn={() => setParentState("SignUp")}/>
            <SecondaryButton text='Verify' fn={onComplete}/>
        </div>


    </>
  )
}

export default VerifyEmail