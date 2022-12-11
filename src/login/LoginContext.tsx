import React, {useContext, useState, useEffect} from 'react'

interface IUser{
    email: string
    password: string
    summonerName: string | undefined
    region: string | undefined
    username: string | undefined
    rank?: string
    lp?: string
    icon?: string
  }

const UserContext = React.createContext<IUser | null>(null);
const UserChangeContext = React.createContext<(user: IUser)=>void>(() => {})



export function useUser(){
    return useContext(UserContext)
}

export function useUserChange(){
    return useContext(UserChangeContext)
}

type Props = {
    children?: React.ReactNode;
  };

export const LoginContextProvider:React.FC<Props> = ({children}) => {
    const[user, setUser] = useState<IUser | null>(null)

    function changeUser(user: IUser | null){
        setUser(user)
    }
    
    
  return (
    <UserContext.Provider value={user}>
        <UserChangeContext.Provider value={changeUser}>
            {children}
        </UserChangeContext.Provider>
    </UserContext.Provider>
  )
}

export default UserContext