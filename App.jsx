import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext, useAuthInit } from "./AuthManager";
import Loading from "./components/loading";
import Login from "./pages/login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Chat from "./pages/chat";
import SingleChat from "./pages/singleChat";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { PAGES_URLS } from "./data/internalUrls";
import Likes from "./pages/likes";
import Profile from "./pages/profile";
import Search from "./pages/search";
import Upload from "./pages/upload";




const App = () => {
  const { loading, auth } = useAuthInit();
  // C --------------------------
  if (loading) {
    return <Loading />;
  }
  function LocationProvider({ children }) {
    return <AnimatePresence
    >{children}</AnimatePresence>;
  }

  function RoutesWithAnimation() {
    const location = useLocation();
    return (
      <AuthContext.Provider value={auth}>
        <Routes location={location} key={location.key}>
          {/* ACCESS */}
          <Route exact path="/" element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />


          {/* TABS */}
          <Route exact path={PAGES_URLS.home.url} element={<Home />} />
          <Route exact path={PAGES_URLS.search.url} element={<Search />} />
          <Route exact path={PAGES_URLS.upload.url} element={<Upload />} />
          <Route exact path={PAGES_URLS.likes.url} element={<Likes />} />
          <Route exact path={PAGES_URLS.profile.url} element={<Profile />} />


          {/* HOMEPAGE INTERNAL */}
          <Route exact path="/chat" element={<Chat />} />
          <Route path="/chat/:useruid" element={<SingleChat />} />

        </Routes>
      </AuthContext.Provider>
    );
  }


  // R --------------------------
  return (
    <div>
      <BrowserRouter>
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>

    </div>

  );
}

export default App;