import { Link } from 'react-router-dom'
import '../Components/nav.css'
const Navbar=()=>
{
return (

  <nav>

      <ul className="nav">
        <li><Link to ="" >Home</Link></li>
        <li><Link to ="" >About</Link></li>
        <li><Link to ="" >Contacts</Link></li>
        <li><Link to ="" >Login</Link></li>
          </ul>
</nav>
 )
}
export default Navbar