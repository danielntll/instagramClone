import './Signup.css';

import InstagramLogo from '../../assets/InstagramLogo.png';
import { useState } from 'react';
import Button from '../../components/button/Button';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthManager';



const Signup = () => {
  const auth = getAuth();

  const { loggedIn, userId } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);


  const handleSignupWithEmailAndPass = () => {
    console.log(email, " ----- ", password)
    setError(false);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("LOGGED : ", user);


      }).catch((error) => {
        console.log("ERR INVIO MAIL!")
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
        console.log("er:", errorCode, " em: ", errorMessage)
      });

  }
  const handleLogin = () => {
    return navigate("/login");
  }


  return (
    <div className='Signup'>
      <div className="Signup__logo">
        <img src={InstagramLogo} alt="" />
      </div>
      <div className="Signup__form">
        <input onChange={(ev) => setEmail(ev.target.value)} className='Signup__input' type='email' placeholder='Email' />
        <input onChange={(ev) => setPassword(ev.target.value)} className='Signup__input' type='password' placeholder='Password' />
        {error ?
          <div className='Signup__form__error'>
            Email non valida o password troppo debole
          </div>
          : null
        }
        <Button text={"Sign up with email"} styleClass={"Signup__button"} onClickEv={() => { handleSignupWithEmailAndPass() }} />
      </div>
      <div className='Signup__or'>
        <hr />
      </div>
      <div className='Signup__SignUp'>
        <p>
          Already have an account?
        </p>
        <Button text={"Login."} styleClass='Signup__SignUp__btn' onClickEv={() => { handleLogin() }} />
      </div>
    </div>
  );
}

export default Signup;