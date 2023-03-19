import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/useInterval";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessages, setInputMessages] = useState("");

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        console.log("chats:");
        console.log(data);

        setChats(data.Items);
      });
  }

  function setChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }

  function getMessages(chatId) {
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("messages:");
        console.log(data);

        setMessages(data.Items);
      });
  }

  function postMessage() {
    if (currentChat != null) {
      const message = {
        chatId: currentChat.id,
        username: "class 2023",

        text: inputMessages,
      };
      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      setInputMessages("");
    } else {
      console.log("cannot post a message because the currentChat is null");
    }
  }
  function onMessageInput(event) {
    console.log(event);
    setInputMessages(event.target.value);
  }

  useEffect(() => {
    getChats();
  }, []);

  useInterval(
    (params) => {
      const chatId = params[0];
      if (chatId) {
        getMessages(chatId);
      }
    },
    1000,
    currentChat && currentChat.id
  );

  return (
    <div>
      <h1>Chat</h1>
      <div style={{ display: "flex" }}>
        <div>
          <h2>Chats</h2>
          {chats.map((chat) => (
            <div key={chat.id}>
              <button onClick={() => setChat(chat)}>{chat.name}</button>
            </div>
          ))}
        </div>
        <div>
          <h2>{currentChat && currentChat.name} Messages</h2>
          {/* {messages.map((message) => (
            <div key={message.id}>
              {message.username}: {message.text}
            </div>
          ))} */}
          <div>
            <input onInput={onMessageInput} value={inputMessages} />{" "}
            <button onClick={() => postMessage()}>POST</button>
          </div>
          <div>
            {messages.map((message) => (
              <div key={message.id}>
                {message.username}: {message.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
