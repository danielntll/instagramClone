import Tabs from "../../components/tabs";
import "./Search.css";
import { pageAnimation } from "../Animations";
import { motion } from "framer-motion";
import PageToolbar from "../../components/pageToolbar/PageToolbar";

const Search = () => {
  return (
    <motion.div
      variants={pageAnimation()}
      initial="initial"
      animate="final" className="Search">
      <div className="Search__header">
        <PageToolbar
          leftButton={<></>}
          pageTitle={"Searchbar"}
          rightButton={<></>}
        />
      </div>
      <div className="Search__content">
        <h1>SEARCH PAGE</h1>
      </div>
      <div className="Search__tabs">
        <Tabs />
      </div>
    </motion.div>
  );
}

export default Search;