
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () =>{
    

    return( 
        <div className="Navbar"> 
        <div className="logoDiv">
             <h2 className="logo">UniLog</h2>
         </div>
             <div className="menu">
             <nav>
                 <ul className="lists flex">

                     <li>
                     
                     <a href="#Home">Home</a>
                     </li>
                     <li>
                        <a href="#research">Research</a>
                     </li>
                     <li>
                        <a href="#location">Location</a>
                     </li>
                     <li>
                        <a href="#rental-ads">Rental Ads</a>
                     </li>
                     <li>
                        <a href="#about">About</a>
                        
                     </li>
                     <li>
                        
                         <a href="">SignUp</a>
                     </li>
                </ul>       
            </nav>
                 
                 
                     
                 
                 
             </div>
     </div>
    )
}
export default Header