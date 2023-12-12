
import Nav from "./Components/Nav"
import './Assets/Css/Nav.css'
import Footer from "./Components/Footer.js/Footer";
import img from './Assets/img/11745.jpg' 
function App() {
  return (
    <div>
      <Nav/>
      <div className="img">
      <img src={img} alt="Image not found"/>

      </div>
            <Footer/> 
    </div>
  )
}

export default App;
