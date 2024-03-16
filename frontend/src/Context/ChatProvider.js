import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null); // Initialize with null or appropriate default value
  const [user, setUser] = useState(null); // Initialize with null or appropriate default value
  const [notification, setNotification] = useState([]); // Initialize with empty array
  const [chats, setChats] = useState([]); // Initialize with empty array or appropriate default value
  const [messages, setMessages] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate(); 

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) navigate("/"); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
        messages,
        setMessages,
        refresh,
        setRefresh
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
