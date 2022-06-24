import sty from "../styles/languageModal.module.scss";

import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const comeIn = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-100vh" },
};

const LanguageModal = ({ setShowModal, showModal }) => {
  const ChangeLanguage = (props) => {
    // i18next.changeLanguage(props);
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className={sty.backdrop}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            variants={comeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={sty.language_box}
          >
            <p onClick={() => ChangeLanguage("hu")}>
              <span className="ctr-logo">
                <img src="" alt="" className={sty.magyar_flag} />
              </span>
              Magyar
            </p>
            <p onClick={() => ChangeLanguage("ro")}>
              <span className="ctr-logo">
                <img src="" alt="" className={sty.roman_flag} />
              </span>
              Română
            </p>
            <p onClick={() => ChangeLanguage("en")}>
              <span className="ctr-logo">
                <img src="" alt="" className={sty.english_flag} />
              </span>
              English
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageModal;
