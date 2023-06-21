import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext, useAuthInit } from "./AuthManager";
import Loading from "./components/loading";
import Login from "./pages/login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Chat from "./pages/chat";
import SingleChat from "./pages/singleChat";


const App = () => {
  const { loading, auth } = useAuthInit();

  if (loading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <AuthContext.Provider value={auth}>
        <Routes>
          {/* ACCESS */}
          <Route exact path="/" element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />

          {/* APP */}
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route path="/chat/:useruid/:username/:useCamera" element={<SingleChat />} />


        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;