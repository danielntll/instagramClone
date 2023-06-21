import './Toolbar.css'
import InstagramLogo from "../../assets/InstagramLogo.png"
import Camera from "../../assets/camera.png"
import Igtv from "../../assets/igtv.png"
import messages from "../../assets/messages.png"

import Button from '../button/Button';
import { useNavigate } from 'react-router-dom'


const Toolbar = () => {
  // V ----------------------
  const navigate = useNavigate();

  // C ----------------------
  const handleOpenCamera = () => {
    console.log("Open camera");
  }

  const handleOpenIgTV = () => {
    console.log("Open Ig TV")
  }

  const handleOpenMessages = () => {
    console.log("Open messages");
    return navigate("/chat")
  }

  // R ----------------------
  return (
    <div className="Toolbar">
      <div className="Toolbar__sx">
        <Button
          imgUrl={[Camera]}
          onClickEv={() => handleOpenCamera()}
        />
      </div>
      <div className="Toolbar__center">
        <img className='Toolbar__center__logo' src={InstagramLogo} />
      </div>
      <div className="Toolbar__dx">
        <Button
          imgUrl={[Igtv]}
          onClickEv={() => handleOpenIgTV()}
          notification
        />
        <Button
          imgUrl={[messages]}
          onClickEv={() => { handleOpenMessages() }}
          notification
        />
      </div>
    </div>
  );
}

export default Toolbar;