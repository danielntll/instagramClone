import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Backbutton from '../../components/backButton/Backbutton';
import PageToolbar from '../../components/pageToolbar/PageToolbar';
import './SingleChat.css'
import Button from '../../components/button/Button';
import AddIcon from '../../assets/plus.png'
import { useEffect, useState } from 'react';
import { useAuth } from '../../AuthManager';
import MessageChat from '../../components/messageChat';
import { motion } from "framer-motion";
import { pageAnimation } from '../Animations';

const SingleChat = () => {
  let { useruid } = useParams();
  const { loggedIn, userId } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isCamera = location.state?.isCamera;
  const userimage = location.state?.userimage;
  const username = location.state?.username;
  console.log("isCamera : ", isCamera, " userimage:", userimage, " username:", username);

  const [allMessages, setAllMessages] = useState([])
  // ----------------------------------------------
  useEffect(() => {
    if (!loggedIn) {
      return navigate("/login");
    }
  }, [loggedIn]);

  // ----------------------------------------------
  useEffect(() => {
    setAllMessages([
      {
        message: "Ciaoooo",
        useruid: useruid,
        when: "2023-06-21 11:12:32"
      },
      {
        message: "Ciaoooo a te!!",
        useruid: userId,
        when: "2023-06-21 11:12:32"
      },
    ])
  }, [])

  // ----------------------------------------------
  return (
    <motion.div
      variants={pageAnimation()}
      initial="initial"
      animate="final"

      className="SingleChat"
    >
      <div className='SingleChat__toolbar'>
        <PageToolbar
          leftButton={<Backbutton to="/chat" />}
          pageTitle={username}
          rightButton={<Button imgUrl={[AddIcon]} />}
        />
      </div>

      <div className='SingleChat__chat'>
        <div className='SingleChat__chat__content'>
          {allMessages.map((message, index) => {
            return (
              <div className='SingleChat__chat__content__message'>
                <MessageChat key={index + "chatMessage"} message={message} />
              </div>
            )
          })}
        </div>
      </div>
      <div className='SingleChat__footer'>

      </div>
    </motion.div>
  );
}

export default SingleChat;