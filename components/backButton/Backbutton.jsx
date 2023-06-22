import Button from "../button/Button";
import './Backbutton.css'
import BackIcon from '../../assets/angle-left.png'
import { useNavigate } from "react-router-dom";

const Backbutton = ({ to = "/home" }) => {
  const navigate = useNavigate();
  console.log("BACK BUTTON")
  return (
    <Button imgUrl={[BackIcon]} onClickEv={() => {
      navigate(to, {
        state: {
          dir: "back"
        }
      })
    }} />
  );
}

export default Backbutton;