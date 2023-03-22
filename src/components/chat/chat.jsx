import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import {
  AddCircle,
  CenterFocusStrong,
  SendOutlined,
} from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [inputChat, setInputChat] = useState("");
  const [inputUsername, setInputUsername] = useState("");

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
        chatId: currentChat.id, // required, must be an existing chat id
        username: inputUsername, // required
        text: inputMessage, // required
      };

      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
        },
        body: JSON.stringify(message),
      });

      setInputMessage("");
    } else {
      console.log("cannot post a message because currentChat is null");
    }
  }

  function onMessageInput(event) {
    console.log(event);
    setInputMessage(event.target.value);
  }

  function onUsernameInput(event) {
    setInputUsername(event.target.value);
  }

  function postChat() {
    const chat = {
      name: inputChat, // required
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
      },
      body: JSON.stringify(chat),
    });

    setInputChat("");
  }
  function onChatInput(event) {
    setInputChat(event.target.value);
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
    5000,
    currentChat && currentChat.id
  );

  return (
    <Box
      className="chatBody"
      display="left-align"
      justifyContent={"space-between"}
    >
      <Typography variant="h4" component="h1">
        Chat Page:
      </Typography>
      <Box display="center">
        <Box width="50%">
          <Box display="flex" flexDirection="column">
            <Box mb={1}>
              <TextField
                id="username-input"
                label="Username"
                value={inputUsername}
                onChange={onUsernameInput}
                variant="standard"
                color="primary"
              />
            </Box>
          </Box>
          <Box mb={1}>
            <Box component="form" display="left-align">
              <Typography variant="body1" sx={{ paddingRight: "20px" }}>
                <br></br>Create a new chat or choose an existing one from the
                list below: <br></br>
              </Typography>
              <TextField
                id="chat-input"
                label="New Chat"
                value={inputChat}
                onChange={onChatInput}
                variant="standard"
                color="primary"
                sx={{ paddingRight: "20px" }}
                InputProps={{ style: { fontSize: "15px" } }}
              />
              <IconButton onClick={postChat} display="flex" color="primary">
                <AddCircle />
              </IconButton>
              <br></br>
            </Box>
          </Box>
          <Box display="flex" width="30%">
            <FormControl size="medium" fullWidth>
              <InputLabel id="chat-select-label" color="primary" display="flex">
                All Chats
              </InputLabel>
              <Select
                labelId="chat-select-label"
                id="chat-select"
                color="primary"
                textColor="primary"
                value={currentChat ? currentChat.id : ""}
                onChange={(e) =>
                  setChat(chats.find((chat) => chat.id === e.target.value))
                }
              >
                {chats.map((chat) => (
                  <MenuItem key={chat.id} value={chat.id}>
                    {chat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" mb={1}>
            <Typography variant="h5">
              Messages:<br></br>
            </Typography>
            {currentChat && currentChat.name}
          </Typography>
          <Box>
            <TextField onInput={onMessageInput} value={inputMessage} />
            <Button onClick={() => postMessage()}>POST</Button>
          </Box>
          <div>
            {messages.map((message) => (
              <div key={message.id}>
                {message.username}: {message.text}
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  );
};
