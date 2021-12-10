import "./topbar.css";
import logo from "../assets/images/Screensho.jpg"

export default function TopBar() {
    return(
        <div className="top">
        <div className="topLeft"></div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">Home</li>
                <li className="topListItem">About</li>
                <li className="topListItem">Write</li>
                <li className="topListItem">Logout</li>
            </ul>
        </div>
        <div className="topRight">
            <img
            className="topImg"
            src={logo}
            alt=""
            />
            <i className="topSearchIcon  fas fa-search"></i>
        </div>
        </div>
    )
}
