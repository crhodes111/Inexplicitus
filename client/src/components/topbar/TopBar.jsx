import "./topbar.css";
import logo from "../../assets/images/Screensho.jpg"
import { Link } from "react-router-dom";
export default function TopBar() {
    const user = false;
    return(
        <div className="top">
        <div className="topLeft"></div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
            
            <img
            className="topImg"
            src={logo}
            alt=""
            />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                    
                    <Link className="link" to="/login">LOGIN</Link> </li>

                    <li className="topListItem">
                    <Link className="link" to="/register">REGISTER</Link></li>
                    </ul>
                )
            }
            <i className="topSearchIcon  fas fa-search"></i>
        </div>
        </div>
    )
}
