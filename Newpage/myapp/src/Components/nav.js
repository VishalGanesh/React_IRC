import './nav.css'
import {Link} from 'react-router-dom'
import '../Assets/images/1.png'
import Out from '@mui/icons-material/Logout';
const Navbar=()=>
{
return (
    // <li>img src</li>
  <nav>
    {/* <div class "Box">

    </div> */}

      <ul className="nav">
          <li><Link to="/" className="same">Home</Link></li>
          <li><Link to="#" className="same">Track Order</Link></li>
          <li><Link to="/login" className="same">Login</Link></li>
          <li><Link to="" className="same">Cart</Link></li>
          <li><Link to="/" className="same"><Out/></Link></li>
          
      </ul>
</nav>
 )
}

export default Navbar;