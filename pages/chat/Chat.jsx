import './Chat.css';
import AddIcon from '../../assets/plus.png'
import PageToolbar from "../../components/pageToolbar/PageToolbar";
import Backbutton from '../../components/backButton/Backbutton';
import Button from '../../components/button/Button';
import ChatList from '../../components/chatList/ChatList';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { pageAnimation } from '../Animations';

const Chat = () => {
  // V ----------------------
  const [allChats, setAllChats] = useState([]);
  // C ----------------------
  useEffect(() => {
    fetch("https://api.npoint.io/3500f635438f2ad6e157")
      .then((res) => res.json())
      .then((data) => setAllChats(data))
  }, []);

  // R ----------------------
  return (
    <motion.div
      variants={pageAnimation()}
      initial="initial"
      animate="final"

      className="Chat"
    >
      <PageToolbar
        leftButton={<Backbutton to="/home" />}
        pageTitle={"Chat"}
        rightButton={<Button imgUrl={[AddIcon]} />}
      />

      {/* -------- */}
      <div className='Chat__content'>
        <ChatList allChats={allChats} />
      </div>

    </motion.div>
  );
}

export default Chat;