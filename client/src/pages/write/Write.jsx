import "./write.css"
import logo from "../../assets/images/Screensho.jpg"




export default function SinglePost(){
    return(
            <div className="write">
                <img src={logo} alt="" className="writeImg" />
                <form className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeIcon fas fa-plus"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} />
                        <input type="text" name="" placeholder="Title" className="writeInput" autoFocus={true} />
                    </div>
                    <div className="writeFormGroup">
                        <textarea placeholder="Tell your story..." type='text' className="writeInput writeText"></textarea>
                    </div>
                    <button className="writeSubmit">Publish</button>
                </form>
            </div>

    )

}