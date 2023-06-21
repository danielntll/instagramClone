import Button from "../button/Button";
import './Backbutton.css'
import BackIcon from '../../assets/angle-left.png'
import { useNavigate } from "react-router-dom";

const Backbutton = () => {
  const navigate = useNavigate();
  return (
    <Button imgUrl={[BackIcon]} onClickEv={() => { navigate(-1) }} />
  );
}

export default Backbutton;