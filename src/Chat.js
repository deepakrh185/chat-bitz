import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import { db } from "./firebase";

function Chat() {
  const [seed, setseed] = useState("");
  const [input, setinput] = useState("");
  const { roomId } = useParams();
  const [roomName, setroomName] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setroomName(snapshot.data().name));
    }
  }, [roomId]);

  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    setinput("");
    console.log(input);
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>last seen...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">deepak</span>
          hey guys
          <span className="chat__timestamp">3:50 am</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">deepak</span>
          hey guys
          <span className="chat__timestamp">3:50 am</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">deepak</span>
          hey guys
          <span className="chat__timestamp">3:50 am</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Send the message"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          {/* <button type="submit" onClick={sendMessage}>
            Send message
          </button> */}
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
