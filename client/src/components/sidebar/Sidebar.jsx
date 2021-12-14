import "./sidebar.css"
import logo from "../../assets/images/Screensho.jpg"

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebarItem">
            <span className = "sidebarTitle">About me</span>
            <img src={logo} alt=""></img>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem consequuntur in quisquam, 

            </p>
            </div>
            <div className="sidebarItem">
            <span className = "sidebarTitle">Categories</span>
            <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>

        
        </div>
    )
}