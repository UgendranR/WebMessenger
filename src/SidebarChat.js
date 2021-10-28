import React, {useEffect, useState} from 'react';
import {Avatar} from "@material-ui/core";
import './SidebarChat.css';
import db from './firebase';
import {Link} from 'react-router-dom';

function SidebarChat({id,name,addNewChat}) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");
    
    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    const createChat = () => {
        const roomName = prompt("Please Enter Name for ChatRoom");

        if(roomName){
            db.collection("rooms").add({
                name: roomName
            })
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`} key={id}>
            <div className="sidebarChat"><span>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/></span>
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <div className="last_message">
                    <p>{messages[0]?.message}</p></div>
                </div>
            </div>
        </Link>
        
    ) : (
        <div onClick={createChat} className="add_new">
            <h3 className="add-new-chat-title"> --Create New Room--</h3>
        </div>
    )
}

export default SidebarChat
