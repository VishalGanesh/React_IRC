// import '../components/Home.css';
import '../Assets/Home.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Home =()=>{
    return(
        <>
        <form className="cont">
           <marque> <img src="https://toycra.com/cdn/shop/files/Home_banner_1901x634.jpg?v=1695062888"/></marque>
        </form>
        <form className='txt'>
        <h2>Shop by age</h2>
        </form>
        <form className='ag'>
            <ul>
                <Link to="Shop">
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/0-12m_180x_a4542543-c305-435b-8944-7d2b15b7523e_170x.webp?v=1668157030"/></li>
                </Link>
                <Link>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/1-2_180x_4975aebf-4b8c-446d-a8a0-621ec4bee7bd_170x.jpg?v=1668164436"/></li>
                </Link>
                <Link>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/3-4_180x_88162e2a-e4b6-4fd8-9b33-59c82e7bf7cb_170x.jpg?v=1668162939"/></li>
                </Link>
                <Link>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/8-11_180x_32bdd88e-d87b-4872-bbfb-d8ca612077f9_170x.jpg?v=1668164019"/></li>
                </Link>
                <Link>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/12-14_180x_b75ef0fa-47fb-4a87-b4e9-a986d316ed2b_170x.webp?v=1668161779"/></li>
                </Link>

            </ul>
        </form>
        
        <form className='txt2'>
        <h2>Top and Most selling</h2>
        </form>
        <form className='fa'>
            <ul>
               <a href='https://www.funcorp.in/cdn/shop/files/HW_Monster_trucks_080623_785x.jpg?v=1686220522'> <li className='fav'><img src="https://www.funcorp.in/cdn/shop/files/HW_Monster_trucks_080623_785x.jpg?v=1686220522"/></li></a>
                <a href='https://www.funcorp.in/cdn/shop/files/Disney_mattel_080623_785x.jpg?v=1686220522'><li className='fav'><img src="https://www.funcorp.in/cdn/shop/files/Disney_mattel_080623_785x.jpg?v=1686220522"/></li></a>
            </ul>
        </form>
        <div className='FREE SHIPPING AVAILABLE'>
            <form></form>
        </div>
        <Footer/>
        </>
        
    )
}

export default Home