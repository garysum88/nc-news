import { useEffect, useState, useContext } from "react"
import { UserLoginContext } from "../contexts/User";
import { fetchUsers } from "../utils/api";
import { LoadingMsg, LoginMsg, NoLoginMsg } from "../utils/messages"

function Home () {

  const {userLogin, setUserLogin} = useContext(UserLoginContext)

  const [ users, setUsers ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  const [ userSelected, setUserSelected ] = useState("")

  useEffect(()=>{
    fetchUsers()
    .then(({data})=>{
      setUsers(data.users)
      setIsLoading(false)
    })
  },[])

  const LoginForm = () => {
    return (
      <fieldset>
      <legend>Account Login</legend>
      <form onSubmit={handleLogin}>
      <label htmlFor="loginID">Username: </label>
      <br></br>
   
      <select id="username" name="username" onChange={(event)=>setUserSelected(event.target.value)}>
      { users.map((user)=> {
              return <option key={user.username} value={user.username}>{user.username}</option>
      })}
      </select>
      <br></br>
      <br></br>
      <label htmlFor="loginID">Password: </label>
      <br></br>
   
      ************
      <br></br>
      <br></br>
      <button type="submit">Log in</button>
      </form>
      </fieldset>
    )
  }

  const handleLogin = (event) => {
    event.preventDefault()
    if (userSelected==="") {
      setUserLogin(users[0].username)
    }
    else {
      setUserLogin(userSelected)
    }
    
    }
    
    if (isLoading) {
      LoadingMsg()
    }

    

    return (
      <>


      <h3>Welcome to NC News! </h3>
      
     { userLogin==="" ? NoLoginMsg() : LoginMsg() }
      
     { userLogin==="" ? LoginForm() : null}


      </>
    )
}

export default Home;
