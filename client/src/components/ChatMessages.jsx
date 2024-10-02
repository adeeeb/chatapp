/* eslint-disable react/prop-types */
const ChatMessages = ({ messages, username, userPhoto, messagesEndRef }) => (
  <div className="flex-1 overflow-auto p-4">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`flex items-start mb-4 ${
          msg.username === username ? "justify-end" : "justify-start"
        }`}
      >
        {msg.username !== username && (
          <img
            src={msg.userPhoto}
            alt={msg.username}
            className="w-10 h-10 rounded-full mr-3"
            style={{ marginTop: "10px" }}
          />
        )}
        <div
          className={`max-w-xs p-4 rounded-lg shadow-lg text-white transition-transform duration-300 animate__animated animate__fadeIn ${
            msg.username === username ? "bg-primary" : "bg-secondary"
          } relative`}
          style={{
            borderRadius: "15px 15px 5px 5px",
            width: "350px",
          }}
        >
          <h5 className="font-bold text-sm mb-1 flex justify-between">
            <span>{msg.username}</span>
            <span className="text-gray-300 text-xs">{msg.time}</span>
          </h5>
          <p>{msg.text}</p>
        </div>
        {msg.username === username && (
          <img
            src={userPhoto}
            alt={username}
            className="w-10 h-10 rounded-full ml-3"
            style={{ marginTop: "10px" }}
          />
        )}
      </div>
    ))}
    <div ref={messagesEndRef} />
  </div>
);

export default ChatMessages;
