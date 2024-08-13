import { React, createContext, useContext } from "react";
import Message from "./Message";

export const ChatContext = createContext();
export const useDetails = () => {
  return useContext(ChatContext);
};

const Chat = () => {
  return (
    <div>
      <ChatContext.Provider value={{ name: "useContext Anil" }}>
        <Message />
      </ChatContext.Provider>
    </div>
  );
};

export default Chat;
