
import './Header.scss';
const Header = ({ connectedUser }) => {
    const logout = () => {
        localStorage.clear();  
        location.reload();
    }
    return (
        <div className="Navbar">
            <div className="logoDiv">
                <h2 className="logo">UniLog</h2>
            </div>
            <div className="menu">
                <nav>
                    <ul className="lists flex">
                        <li>
                            <a href="/">Home</a>
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
                        </li>{!connectedUser ? (<>
                            <li>
                                <a href="/signup">SignUp</a>
                            </li>
                            <li>
                                <a href="/signin">SignIn</a>
                            </li>
                        </>) : (<>
                            <li>
                                {`Hello ${connectedUser?.username}`}
                            </li>
                            <li>
                                <a className="logout" onClick={(e) => logout(e)}>logout</a>
                            </li>
                        </>)}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header