import React, { useEffect, useState } from "react";
import {user} from './ChatBox'
import io from 'socket.io-client'
import "./Chating.css"
import Message from "./Message";
import ReactScrollToBottom from "react-scroll-to-bottom"
import sockt from "socket.io-client/lib/socket";
// import Emoji from "./EmojiPicker";
// import InputEmoji from 'react-input-emoji'
// import 'emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart'



var socket=io.connect('http://localhost:8002/')


export default function Chating(){

    const[id ,setId]=useState('')
    const[message,setMessage]=useState([])
    const [ text, setText ] = useState('')
    // const[emoji,setEmoji]=useState(false)
    // const [emojiValue,setEmojiValue]=useState('')


    // function handleOnEnter (text) {
    //     alert(text)
    //   }

 
   
    

useEffect(function(){
    socket.emit("joined",{user})
    console.log("socketid",socket)
    setId(socket.id)
    socket.on("welcome",(data)=>{
        // console.log(data.user,data.message)
        setMessage([...message,data])//spred opeator

    })
    socket.on("userjoined",(data)=>{
        setMessage([...message,data])//spred opeator
        // console.log(data.user,data.message)
    })
    socket.on("leave",(data)=>{
        setMessage([...message,data])//spred opeator
        // console.log(data.user,data.message)
    })



return()=>{
    socket.emit("disconnect",()=>{
        socket.off()
    })
}



},[])




   const handleMessage=()=>{
    const message= document.getElementById('chatInput').value
  
    //  alert(text)

    socket.emit("message",{message,id})
    document.getElementById('chatInput').value=""
   }

useEffect(function(){
    socket.on("sendmessage",(data)=>{
        setMessage([...message,data])//spred opeator
// console.log(data.user,data.message,data.id)
    })
    return()=>{
        socket.off()
    }
},[message])


// const EmojiHandle=()=>{
// setEmoji(<Emoji height={100} width={800} />)



// }

// const handleOffEmoji=()=>{
//     setEmoji(false)
 
// }


    return(
         <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                 <h2>Khud Ki ChatApp</h2>
                 <img src="assets/logo3.jpg"/>
                 <p>welcome ::   {user}</p>
                     </div>
                <ReactScrollToBottom className="chatBox">
                {message.map((item,i)=> < Message  user={item.id===id?'':item.user} message={item.message} classs={item.id===id?'right':'left'}/>)}
                
                </ReactScrollToBottom>
               
            
                <div className="inputBox">
                <input placeholder="Type message" id='chatInput' type='text' />
                {/* <InputEmoji
          placeholder="Type a message"
          id='chatInput' 

        /> */}

          
                  

                   

                    {/* <img id="emoji"src="assets/emoji.png" onClick={EmojiHandle}></img> */}
                    <button className="sendbtn" onClick={handleMessage}  >send</button>
                </div>

            </div>
            
        
        </div>
    )
}