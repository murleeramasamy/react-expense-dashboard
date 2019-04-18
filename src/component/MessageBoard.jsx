import React from "react";

const MessageBoard = ({ messages }) => {
  let keyIndex = 1;
  return (
    <div
      style={{
        borderStyle: "solid",
        width: 512,
        marginTop: 20,
        height: 150,
        overflow: "scroll"
      }}
    >
      {messages.map(message => (
        <p key={keyIndex++} style={{ textAlign: "center" }}>
          {message.text}
        </p>
      ))}
    </div>
  );
};

export default MessageBoard;
