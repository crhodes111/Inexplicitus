import "./post.css"
import logo from "../../assets/images/Screensho.jpg"

export default function Post() {
    return(
        <div className="post">
            <img className="postImg" src= {logo} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, quidem accusantium? Optio reprehenderit animi facere, quaerat quisquam expedita fugiat temporibus dolor nihil debitis laborum magnam excepturi numquam mollitia totam distinctio!

            </p>
        </div>
    )
}