import Button from '../button/Button';
import './ChatComponent.css'
import CameraIcon from '../../assets/camera.png'
import { useNavigate } from 'react-router-dom';

const ChatComponent = ({ chat }) => {
  const navigate = useNavigate();

  return (
    <div className="ChatComponent">
      <div className='ChatComponent__sx'>
        <div className='ChatComponent__avatar'>
          <img src={chat.userimage} />
        </div>
        <div className='ChatComponent__info' onClick={() => { navigate("/chat/" + chat.useruid + "/" + chat.username + "/false") }}>
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
        <Button imgUrl={[CameraIcon]} onClickEv={() => { navigate("/chat/" + chat.useruid + "/" + chat.username + "/true") }} />
      </div>
    </div>
  );
}

export default ChatComponent;