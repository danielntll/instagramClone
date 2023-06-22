import Tabs from "../../components/tabs";
import "./Profile.css";
import { pageAnimation } from "../Animations";
import { motion } from "framer-motion";
import PageToolbar from "../../components/pageToolbar/PageToolbar";
import Button from "../../components/button/Button";
import Story from "../../components/story/Story";
import ContentSwitch from "../../components/contentSwitch";
import { useState } from "react";
import GridIcon from '../../assets/grid.png';
import TagsIcon from '../../assets/tags.png';
import PostGridView from "../../components/postGridView/PostGridView";

const Profile = () => {
  // V----------------------
  const userData = {
    username: "Daniel_ntll",
    name: "Daniel Turcanu",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum unde quaerat sequi voluptatem sit voluptates exercitationem voluptatibus ab, mollitia consequatur!",
    posts: [
      {
        imgUrl: "https://picsum.photos/500/800?851",
      },
      {
        imgUrl: "https://picsum.photos/500/800?851",
      },
      {
        imgUrl: "https://picsum.photos/500/800?851",
      },
      {
        imgUrl: "https://picsum.photos/500/800?851",
      },
      {
        imgUrl: "https://picsum.photos/500/800?851",
      },
      {
        imgUrl: "https://picsum.photos/500/800?851",
      },

    ]
  }
  const headerTabs = [
    {
      text: "",
      value: "Posts",
      iconUrl: GridIcon,
    }, {
      text: "",
      value: "Tags",
      iconUrl: TagsIcon,
    }];
  const [selectedTab, setSelectedTab] = useState(headerTabs[0].value);
  // C----------------------
  // R----------------------
  return (
    <motion.div
      variants={pageAnimation()}
      initial="initial"
      animate="final"
      className="Profile">
      <div className="Profile__header">
        <PageToolbar
          leftButton={<></>}
          pageTitle={userData.username}
          rightButton={<></>}
        />
      </div>
      <div className="Profile__content">
        <div className="Profile__content__header">
          <div className="Profile__content__info">
            <div>
              <Story onlyAvatar size={1.6} />
            </div>
            <div className="Profile__content__info__counter">
              <p className="Profile__content__info__counter__number">54</p>
              <p className="Profile__content__info__counter__desc">Posts</p>
            </div>
            <div className="Profile__content__info__counter">
              <p className="Profile__content__info__counter__number">800</p>
              <p className="Profile__content__info__counter__desc">Followers</p>
            </div>
            <div className="Profile__content__info__counter">
              <p className="Profile__content__info__counter__number">165</p>
              <p className="Profile__content__info__counter__desc">Following</p>
            </div>
          </div>
          <div className="Profile__content__bio">
            <p className="Profile__content__bio__name">
              {userData.name}
            </p>
            <p className="Profile__content__bio__description">
              {userData.bio}
            </p>
          </div>

          <div className="Profile__content__cta__container">
            <Button styleClass="Profile__content__cta" text={"Edit profile"} />
          </div>
        </div>
        <div className="Profile__content__posts">
          <div className="Profile__content__posts__header">
            <ContentSwitch
              headerTabs={headerTabs}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </div>
          <div className="Profile__content__posts__grid">
            {userData.posts.map((post, index) => {
              return (
                <PostGridView key={index + "profileimg"} imgUrl={post.imgUrl} callback={() => { console.log("apri pagina immagine") }} />
              )
            })}
          </div>
        </div>
      </div>
      <div className="Profile__tabs">
        <Tabs />
      </div>
    </motion.div>
  );
}

export default Profile;