import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Sidebar from "../section/Sidebar";
import UserForm from "../components/UserForm";
import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";
import RightMenu from "../components/RightMenu";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [userPhoto, setUserPhoto] = useState(
    "https://static.vecteezy.com/system/resources/previews/012/177/622/original/man-avatar-isolated-png.png"
  );
  const [showInput, setShowInput] = useState(true);
  const [users, setUsers] = useState([]);
  const [chatFull, setChatFull] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleReceiveMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      updateUsersList(message);
    };

    socket.on("receiveMessage", handleReceiveMessage);
    socket.on("userJoined", (user) =>
      setUsers((prevUsers) => [...prevUsers, user])
    );
    socket.on("updateUserList", setUsers);
    socket.on("chatFull", (message) => {
      toast.error(message);
      setChatFull(true);
    });

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
      socket.off("userJoined");
      socket.off("updateUserList");
      socket.off("chatFull");
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const updateUsersList = (message) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.username === message.username
          ? { ...user, lastMessage: message.text, time: message.time }
          : user
      )
    );
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const messageData = {
        username,
        subtitle,
        text: input,
        userPhoto,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      socket.emit("sendMessage", messageData);
      setInput("");
    }
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (!chatFull) {
      setShowInput(false);
      const user = { username, subtitle, userPhoto };
      socket.emit("joinChat", user);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUserPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const otherUser = users.find((user) => user.username !== username);

  return (
    <div className="flex h-screen">
      <Sidebar
        username={username}
        userPhoto={userPhoto}
        users={users}
        subtitle={subtitle}
      />
      <div className="flex-1 flex flex-col bg-gray-100">
        {showInput ? (
          <UserForm
            userPhoto={userPhoto}
            handleFileChange={handleFileChange}
            username={username}
            setUsername={setUsername}
            subtitle={subtitle}
            setSubtitle={setSubtitle}
            handleUsernameSubmit={handleUsernameSubmit}
          />
        ) : (
          <>
            {otherUser && <ChatHeader otherUser={otherUser} />}
            <ChatMessages
              messages={messages}
              username={username}
              userPhoto={userPhoto}
              messagesEndRef={messagesEndRef}
            />
            <ChatInput
              input={input}
              setInput={setInput}
              sendMessage={sendMessage}
            />
          </>
        )}
      </div>
      {otherUser && <RightMenu otherUser={otherUser} />}
      <ToastContainer />
      <Modal
        isOpen={chatFull}
        onRequestClose={() => setChatFull(false)}
        contentLabel="Chat Full"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Chat Full</h2>
        <p>The chat is full. Please try again later.</p>
        <button onClick={() => setChatFull(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default Chat;
