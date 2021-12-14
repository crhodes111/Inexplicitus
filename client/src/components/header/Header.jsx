import "./header.css"
import logo from "../../assets/images/Screensho.jpg"

export default function Header(){
    return(
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg"> Blog</span>
            </div>
            <img
            className="headerImg"
            src={logo} alt=""
            />
        </div>
    )
}