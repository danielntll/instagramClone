import Button from '../button/Button';
import './ChatComponent.css'
import CameraIcon from '../../assets/camera.png'
import { useNavigate } from 'react-router-dom';

const ChatComponent = ({ chat }) => {
  const navigate = useNavigate();

  const handleOpenChat = (useCamera = false) => {
    navigate("/chat/" + chat.useruid, {
      state: {
        dir: "forward",
        isCamera: useCamera,
        userimage: chat.userimage,
        username: chat.username,
      }
    })
  }

  return (
    <div className="ChatComponent">
      <div className='ChatComponent__sx'>
        <div className='ChatComponent__avatar'>
          <img src={chat.userimage} />
        </div>
        <div className='ChatComponent__info' onClick={() => handleOpenChat()}>
          <p className='ChatComponent__info__username'>
            {chat.username}
          </p>
          <div className='ChatComponent__info__last__container'>
            <p className='ChatComponent__info__last__msg'>
              {chat.last}
            </p>
            <p className='ChatComponent__info__last'>
              now
            </p>
          </div>
        </div>
      </div>
      <div className='ChatComponent__camera'>
        <Button imgUrl={[CameraIcon]} onClickEv={() => { handleOpenChat(true) }} />
      </div>
    </div>
  );
}

export default ChatComponent;