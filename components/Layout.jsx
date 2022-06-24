import { useState } from "react";

//components
import Navbar from "./Navbar";
import Footer from "./Footer";
import LanguageModal from "./LanguageModal";

const Layout = ({ children }) => {
  const [ShowModal, setShowModal] = useState(false);

  return (
    <div className="content">
      <Navbar ShowModal={ShowModal} setShowModal={setShowModal} />
      <LanguageModal ShowModal={ShowModal} setShowModal={setShowModal} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
