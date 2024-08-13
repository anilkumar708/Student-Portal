import React from "react";
import { ChatContext, useDetails } from "./Chat";

const Message = () => {
  const value = useDetails();
  return (
    <div>
      <p>{value.name}</p>
      {/* <ChatContext.Consumer>
        {(value) => <div>{value.name}</div>}
      </ChatContext.Consumer> */}
    </div>
  );
};

export default Message;
