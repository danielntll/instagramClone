import './Login.css';
import InstagramLogo from '../../assets/InstagramLogo.png';
import { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthManager';


const Login = () => {
  const auth = getAuth();

  const { loggedIn, userId } = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState(false);

  const handleDoAccess = () => {
    setError(false)
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log("User Loggato : ", user);
      navigate("/home")
    })
      .catch((error) => {
        console.log("ERRORE DI CONNESSIONE: ", error);
        setError(true);
      })
  }

  const handleForgotPassword = () => {

  }

  const handleSignUp = () => {
    navigate("/signup");
  }


  useEffect(() => {
    if (loggedIn) {
      return navigate("/home");
    }
  }, [loggedIn])

  return (
    <div className='Login'>
      <div className="Login__logo">
        <img src={InstagramLogo} alt="" />
      </div>
      <div className="Login__form">
        <input onChange={(ev) => setEmail(ev.target.value)} className='Login__input' type='email' placeholder='Email' />
        <input onChange={(ev) => setPassword(ev.target.value)} className='Login__input' type='password' placeholder='Password' />
        <div className='Login__form__forgotPass'>
          <Button text={"Forgot password?"} styleClass={"Login__form__forgotPass__btn"} onClickEv={() => handleForgotPassword()} />
        </div>
        {error ?
          <div className='Login__form__error'>
            Email o password errata.
          </div>
          : null
        }

        <Button text={"Log in"} styleClass={"Login__button"} onClickEv={() => { handleDoAccess() }} />
      </div>
      <div className='Login__or'>
        <hr />
      </div>
      <div className='Login__SignUp'>
        <p>
          Don’t have an account?
        </p>
        <Button text={"Sign up."} styleClass='Login__SignUp__btn' onClickEv={() => { handleSignUp() }} />
      </div>
    </div>);
}

export default Login;