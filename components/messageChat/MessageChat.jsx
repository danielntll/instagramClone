import './MessageChat.css'

const MessageChat = ({ message }) => {
  return (
    <div className="MessageChat">
      <p>
        {message.message}
      </p>
    </div>
  );
}

export default MessageChat;