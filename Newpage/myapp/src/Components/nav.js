import './nav.css'
import {Link} from 'react-router-dom'
const Navbar=()=>
{
return (

  <nav>
    <div class "Box">
        .'

    </div>

      <ul className="nav">
          <li><Link to="/" className="same">HOME</Link></li>
          <li><Link to="#" className="same">CONTACT</Link></li>
          <li><Link to="/login" className="same">LOGIN</Link></li>
          <li><Link to="" className="same">ABOUT US</Link></li>
      </ul>
</nav>
 )
}

export default Navbar;