import { useState, useEffect, useContext } from "react";
import { fetchUsers } from "../utils/api";
import { LoadingMsg, NoLoginMsg } from "../utils/messages"
import { UserLoginContext } from "../contexts/User"


function MyAccount () {


const { userLogin } = useContext(UserLoginContext)
const [ usersArr, setUsersArr ] = useState([])
const [ isLoading, setIsLoading ] = useState(true)
const [ isError, setIsError ] = useState(false)

useEffect(()=>{

  fetchUsers()
  .then(({data})=>{
    setUsersArr(data.users)
    setIsLoading(false)
    setIsError(false)
  }).catch((err)=>{
    setIsError(true)
  })

},[userLogin])


const [thisUser] = usersArr.filter((user)=> user.username === userLogin)

if (userLogin==="") {
  return NoLoginMsg()
}

if (isError) {
  return <p>An error occured when fetching user information.</p>
}

if (isLoading) {
  return LoadingMsg()
}



    return (
      <>
      <h3>My Account</h3>
      <div className="MyDetails">
      <div className="MyDetails__information">
      <p><img src={thisUser.avatar_url} alt={userLogin}></img></p>
      <p>Username : { thisUser.username }</p>
      <p>Name : { thisUser.name }</p>
      </div>
      </div>
      </>
    )
}

export default MyAccount;
