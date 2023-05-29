import React, { useState } from "react";
import './ChatBox.css'
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
let user

export default function ChatBox(props){
  
 const [name ,setName]=useState('')
//     var navigate=useNavigate()

//    const handleLogin=()=>{
//         navigate('/chating')
//     }

const handleUser=()=>{
user=document.getElementById('textInput').value
document.getElementById('textInput').value=''

}
 
    return(
        <div className="mainContainer">
            <div className="secondContainer">
                <img src='/assets/logo2.webp'></img>
                <h1>Khud Ki ChatApp</h1>
                <input onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" type='text' id='textInput'/>
                <Link onClick={(event)=>!name?event.preventDefault():null} to={"/Chating"}><button onClick={handleUser} className="textbtn" >Login</button></Link>
                

            </div>

        </div>
    )
}
export{user}