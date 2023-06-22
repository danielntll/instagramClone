import Button from '../button/Button';
import './ContentSwitch.css'
import { motion } from "framer-motion";

const ContentSwitch = ({
  headerTabs,
  selectedTab,
  setSelectedTab,
}) => {
  // V-------------------
  // C-------------------
  // R-------------------
  return (
    <div className="ContentSwitch">
      {headerTabs.map((tab, index) => {
        return (
          <div
            key={index + "ContentSwitch"}
            onClick={() => setSelectedTab(tab.value)}
            className={selectedTab === tab.value ? "selected headerTab" : "headerTab"}
          >
            <Button imgUrl={tab.iconUrl ? [tab.iconUrl] : ""} text={tab.text ? tab.text : ""} onClickEv={() => { }} />
            {selectedTab === tab.value ?
              <motion.div
                className="underline"
                variants={{
                  initial: {
                    x: '100%'
                  },
                  final: {
                    x: '0',
                    transition: { duration: 0.3 }
                  }
                }}
                initial="initial"
                animate="final"
              />
              : null
            }
          </div>
        )
      })}
    </div>
  );
}

export default ContentSwitch;