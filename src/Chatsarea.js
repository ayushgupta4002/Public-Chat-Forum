import React, { useState } from 'react'
import './Chats.css'
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodIcon from '@mui/icons-material/Mood';
import {useParams} from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';





function Chatsarea() {
    const[{ user },dispatch]= useStateValue();

    const [seed, setseed] = React.useState('');
    const[input,setInput]= React.useState("");
    const {roomId}= useParams();
    const [roomName,setRoomName]= React.useState("");
    const [messages,setMessages]= React.useState([]);
    const [id,setid]= React.useState("0");

    


    React.useEffect(()=>{
        if(roomId){

            

            db.collection("rooms").doc(roomId).onSnapshot((snapshot) =>(
                setRoomName(snapshot.data().name)

            ),
            
            db.collection("rooms").doc(roomId).collection("messages")
             .orderBy('timestamp','asc').onSnapshot((snapshot) =>(
                 setMessages(snapshot.docs.map(doc => doc.data()))
             ))

            
            );
        }
    },[roomId]);



    let date = new Date();  
    let options = {  
        weekday: "long", year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit"  
    };  
    
    console.log(date.toLocaleTimeString("en-us", options)); 

    const sendMessage=(e)=>{
        e.preventDefault();
        console.log(input);
        db.collection('rooms').doc(roomId)
        .collection("messages").add({
            message:input,
            name: user.displayName,
            timestamp:new Date().valueOf()
        });
    setInput("");
    setid(id+1);
        
    };


    React.useEffect(() => {
        setseed(Math.floor(Math.random() * 500));
    }, [roomId]);
    


    

    return (
        <div className="chat">
       
            <div className="header_chats">
            <div className="headerchats_left">
                <Avatar src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`} />

                <div className="Name">
                    <h3>{roomName}</h3>
  

                </div>   
                </div>

                <div className="iconsright">
                    <MoreVertIcon />
                </div>
            </div>

            <div className="body_chats">


       
            {messages.map((message)=>(
                <p className={`chat_message ${true}`}>
                    <span className="chat_name">{message.name}</span>
                    {message.message}
                    <span className="time">{date.toLocaleTimeString("en-us", options)}</span>
                    
                  
                </p>

            ))}

                

            </div>
            <div className="footer_chats">
            <MoodIcon/>
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value) }
               
                placeholder="type your message"
                type="text"
                />
                <button onClick={sendMessage}  type="submit">Send</button>
            </form>

            </div>
        </div>

    )
}

export default Chatsarea