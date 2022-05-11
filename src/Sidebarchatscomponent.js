import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./SidebarChat.css"
import Avatar from '@mui/material/Avatar';
import db from './firebase';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Sidebarchatscomponent({ id, name, addNewChat }) {

  /////////////

  const [seed, setseed] = React.useState('');
  React.useEffect(() => {
    setseed(Math.floor(Math.random() * 500));
  }, []);
  //////////////// 
  const createChat = () => {
    const roomname = prompt("Enter Room Name");
    if (roomname) {
      db.collection("rooms").add({
        name: roomname,
      })

    }

  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className="chats">
      <div className="icon">
        <Avatar src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`} />
      </div>

      <div className="sidechatcontent">
        <h3>{name}</h3>
        <p>Last message...</p>
      </div>
    </div>
    </Link>

  ) : (
    <div onClick={createChat} className="chats">
      <h2>Click Here to Add New Room</h2>
    </div>
  )
}

export default Sidebarchatscomponent