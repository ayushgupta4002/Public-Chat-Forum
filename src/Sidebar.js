import React, { useState } from 'react'
import './Sidebar.css';
import Sidebarchatscomponent from './Sidebarchatscomponent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import db from './firebase';
import Avatar from '@mui/material/Avatar';
import { useStateValue } from './StateProvider';

function Sidebar() {
var name={};
const[{ user },dispatch]= useStateValue();
const [rooms,setRooms]= React.useState([]);
React.useEffect(() => {
  
  db.collection("rooms").onSnapshot(snapshot =>(

    setRooms(snapshot.docs.map(doc=>({

      id: doc.id,
      data:doc.data(),

    })
    ))

  ))



},[]);
 var profilepic=user.photoURL;


  return (
    <div className="Sidebar">
      <div className="Header">
        <Avatar src={profilepic} />
       

        <div className="SidebarRight">
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />

        </div>
      </div>
      <div className="SidebarSearch">
        <div className="sidebarcontainer">
        <h4 className="h4">Welcome {user.displayName}</h4> 
        </div>


      </div>
      <div className="Sidebar_Chat">
        <div className="height">

          <Sidebarchatscomponent addNewChat />
          {rooms.map ( (room) =>(
            <Sidebarchatscomponent key={room.id} id={room.id} name={room.data.name} />
          )
        )}
     
        </div>



      </div>

    </div>
  )
}

export default Sidebar