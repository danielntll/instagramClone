import PostsContainer from '../../components/postsContainer/PostsContainer';
import Stories from '../../components/stories';
import Toolbar from '../../components/toolbar';
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <Toolbar />
      <div className="Home__content">

        <Stories />
        <PostsContainer />
      </div>
    </div>
  );
}

export default Home;