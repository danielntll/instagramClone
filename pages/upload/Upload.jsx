import Tabs from "../../components/tabs";
import "./Upload.css";
import { pageAnimation } from "../Animations";
import { motion } from "framer-motion";
import PageToolbar from "../../components/pageToolbar/PageToolbar";


const Upload = () => {
  return (
    <motion.div
      variants={pageAnimation()}
      initial="initial"
      animate="final" className="Upload">
      <div className="Upload__header">
        <PageToolbar
          leftButton={<></>}
          pageTitle={"Upload"}
          rightButton={<></>}
        />
      </div>
      <div className="Upload__content">
        <h1>Upload PAGE</h1>
      </div>
      <div className="Upload__tabs">
        <Tabs />
      </div>
    </motion.div>
  );
}

export default Upload;