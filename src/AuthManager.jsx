import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


export const AuthContext = React.createContext({ loggedIn: false });

export const useAuth = () => {
  return useContext(AuthContext);
}

export const useAuthInit = () => {
  const [authInit, setAuthInit] = useState({ loading: true });
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      const auth = user ?
        { loggedIn: true, userId: user.uid } :
        { loggedIn: false };
      setAuthInit({ loading: false, auth });
    });
  }, []);

  return authInit;
}