import {Link} from "react-router-dom"

function Navbar () {
    
    return (

      <div className="Navbar">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/articles">Articles</Link></div>
        <div><Link to="/myaccount">My Account</Link></div>
      </div>

    )
}

export default Navbar