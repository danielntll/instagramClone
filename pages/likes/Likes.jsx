import Tabs from "../../components/tabs";
import "./Likes.css";
import { pageAnimation } from "../Animations";
import { motion } from "framer-motion";
import PageToolbar from "../../components/pageToolbar/PageToolbar";
import { useState } from "react";
import ContentSwitch from "../../components/contentSwitch";

const Likes = () => {
  // V --------------------
  const headerTabs = [{
    text: "Following",
    value: "Following",
    icon: undefined
  }, {
    text: "You",
    value: "You",
    icon: undefined
  }];
  const [selectedTab, setSelectedTab] = useState(headerTabs[1].text);
  // C --------------------

  const Content = {
    "You": () => {
      // FETCH
      return (
        <div>
          <p className="Likes__content__title">Likes</p>
        </div>
      )
    },
    "Following": () => {
      // FETCH
      return (
        <div>
          <p className="Likes__content__title">Following</p>
        </div>
      )
    },
  }
  // R --------------------
  return (
    <motion.div
      variants={pageAnimation()}
      initial="initial"
      animate="final"
      className="Likes"
    >
      <div className="Likes__header">
        <PageToolbar
          leftButton={<></>}
          pageTitle={"Likes"}
          rightButton={<></>}
          child={
            <ContentSwitch headerTabs={headerTabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          }
        />
      </div>
      <div className="Likes__content">

        {Content[selectedTab]()}

      </div>
      <div className="Likes__tabs">
        <Tabs />
      </div>
    </motion.div>
  );
}

export default Likes;