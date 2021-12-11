import "./singlePost.css"
import logo from "../../assets/images/Screensho.jpg"



export default function SinglePost(){
    return(
       
        <div className='singlePost'>
            <div className="singlePostWrapper">
            <img src={logo} alt='' className="singlePostImg"/>
            </div>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet
                </h1>
                <div className="singlePostEdit">
                    <i className = "singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Conner</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi, sint nesciunt recusandae illo assumenda dolor sed adipisci sit quis, 
                sapiente quod ex nam. Nostrum accusantium cum voluptatem placeat fuga.</p>
        </div>
        
    )
}