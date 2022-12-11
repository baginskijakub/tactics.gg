import axios from "axios";

interface IUser{
    email: string
    password: string
    summonerName: string | undefined
    region: string | undefined
    username: string | undefined
  }

function verifyEmail(email: string){
    console.log(email)
    return axios.post(
        `https://server-tactixgg.com/verifyEmail`,
        {
            "email" : email
        }
      );
}

function registerUser(
    user: IUser
    ){
    return axios.post(
        `https://server-tactixgg.com/register`,
        {
            "user":
                {
                    "email" : user.email,
                    "password" : user.password,
                    "summonerName" : user.summonerName,
                    "username" : user.username,
                    "region" : user.region
                }
        }
      );
}

function loginUser(
    email: string,
    password: string
    ){
    return axios.post(
        `https://server-tactixgg.com/login`,
        {
            "user":{
            "email" : email,
            "password" : password
            }
        }
      );
}

function logout(){
    return axios.get(`https://server-tactixgg.com/logout`,);
}

function requestPasswordResetEmail(
    email: string,
    ){
    return axios.post(
        `https://server-tactixgg.com/resetPasswordEmail`,
        {
            "email" : email
        }
      );
}

function resetPassword(
    email: string,
    token: string
){
    return axios.post(
        `https://server-tactixgg.com/resetPassword`,
        {
            "email" : email,
            "token" : token
        }
      );
}

function getRiotAccount(
    region: string,
    summonerName: string
){
    let regionId: string = region

    switch (region){
        case "EUW":
            regionId = "euw1"
            break
        case "EUNE":
            regionId = "eun1"
            break
        case "NA":
            regionId = "na1"
            break
    }

    return axios.get(
        `https://server-tactixgg.com/riotAccount/${regionId}/${summonerName}`
      );
}

export {verifyEmail, registerUser, loginUser, logout, resetPassword, getRiotAccount}

