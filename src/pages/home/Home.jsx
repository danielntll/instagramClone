import { useEffect, useState } from 'react';
import PostsContainer from '../../components/postsContainer/PostsContainer';
import Stories from '../../components/stories';
import Toolbar from '../../components/toolbar';
import './Home.css'
import { useAuth } from '../../AuthManager';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // V ----------------------
  const { loggedIn, userId } = useAuth();
  const navigate = useNavigate();

  const [yourStories, setYourStories] = useState([{
    userId: "userId00000001",
    username: "utente1",
    userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
    when: "2023-06-16 16:36:07",
    imageUrl: "https://picsum.photos/500/800?851",
    liked: false,
    seen: false,
    isLive: false,
  }]);

  const [friendsStories, setFriendsStories] = useState();
  const [storyToView, setStoryToView] = useState();


  // C ----------------------
  const friendsStoryActions = {
    handleOpenUserStories: (storyInfo) => {
      if (storyInfo !== "-1") {
        const auxAllStories = [...friendsStories];
        const auxStory = auxAllStories[storyInfo];
        auxAllStories.splice(storyInfo, 1);
        auxStory.seen = true;
        auxAllStories.push(auxStory);
        setFriendsStories(auxAllStories);
        setStoryToView({ index: storyInfo, story: auxStory });
      } else {
        console.log("opens user stories.")
      }
    },
    handleLikeUserStories: () => {

    }
  }

  useEffect(() => {
    fetch("https://api.npoint.io/059d221a09db8c7c914b")
      .then((res) => res.json())
      .then((data) => { console.log(data); setFriendsStories(data) });
  }, []);

  if (!loggedIn) {
    return navigate("/login");
  }

  // R ----------------------
  return (
    <div className="Home">
      <Toolbar />
      <div className="Home__content">
        <Stories you={yourStories} friendsStories={friendsStories} onClickEv={(storyInfo) => friendsStoryActions.handleOpenUserStories(storyInfo)} />
        <PostsContainer />
      </div>

    </div>
  );
}

export default Home;