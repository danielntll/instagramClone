import './Chat.css';
import AddIcon from '../../assets/plus.png'
import PageToolbar from "../../components/pageToolbar/PageToolbar";
import Backbutton from '../../components/backButton/Backbutton';
import Button from '../../components/button/Button';
import ChatList from '../../components/chatList/ChatList';
import { useEffect, useState } from 'react';


const Chat = () => {
  // V ----------------------
  const [allChats, setAllChats] = useState([]);
  // C ----------------------
  useEffect(() => {
    fetch("https://api.npoint.io/3500f635438f2ad6e157")
      .then((res) => res.json())
      .then((data) => setAllChats(data))
  }, [])
  // R ----------------------
  return (
    <div className="Chat">
      <PageToolbar
        leftButton={<Backbutton />}
        pageTitle={"Chat"}
        rightButton={<Button imgUrl={[AddIcon]} />}
      />

      {/* -------- */}
      <div className='Chat__content'>
        <ChatList allChats={allChats} />
      </div>

    </div>
  );
}

export default Chat;