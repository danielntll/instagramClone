import ChatComponent from '../chatComponent/ChatComponent';
import './ChatList.css'


const ChatList = ({ allChats }) => {


  return (
    <div className="ChatList">
      {
        allChats?.map((chat, index) => {
          return (
            <ChatComponent key={index + "chat"} chat={chat} />
          )
        })
      }
    </div>
  );
}

export default ChatList;