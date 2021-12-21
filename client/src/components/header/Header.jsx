import "./header.css"
import logo from "../../assets/images/Logo.png"



export default function Header({posts}){
 console.log({posts})
 
 
 const PF = "http://localhost:5000/images/"
    return(
        
        <div className='header'>
            
            <div className="headerTitles">
              <img src={logo} alt="" className="logo" />
                <span className="headerTitleLg"> Inexplicitus </span>

            </div>
            
        
       
                    
                    
      


    </div>
  );
    
}