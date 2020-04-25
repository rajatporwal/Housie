import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import "./Chat.css";

let socket;

const Chat = ({ name, room }) => {
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://housie-server.herokuapp.com/";

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, name, room]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  );
};

export default Chat;
