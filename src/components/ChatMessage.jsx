import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({ chat }) => {
  if (chat.hideInChat) return null;

  const isBot = chat.role === "model";

  return (
    <div
      className={`message ${isBot ? "bot" : "user"}-message ${
        chat.isError ? "error" : ""
      }`}
    >
      {isBot && <ChatbotIcon />}
      <div className="message-text">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{chat.text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessage;
