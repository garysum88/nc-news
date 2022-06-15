import { UserLoginContext } from "../contexts/User"
import { useContext } from "react"

function LoginBar () {

    const {userLogin, setUserLogin} = useContext(UserLoginContext)

    if (userLogin==="") {
    return (
    <div className="LoginBar">
    <span>You are currently using this app as a <b>guest</b>!</span>
    </div>
    )
    }

    return (
        <div className="LoginBar">
        <span> Logged in as <b>{userLogin }</b>
        <button type="Submit" onClick={()=>setUserLogin("")}> ⏏️ Logout </button></span>
        </div>  
    
    
        )

}

export default LoginBar

