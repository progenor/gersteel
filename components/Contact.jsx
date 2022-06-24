import sty from "../styles/contact.module.scss";
//tools

//icons
import { MdOutlineMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  const icon_size = 70;

  return (
    <div id="contact" className={sty.container}>
      <h1>Contact </h1>
      <div className={sty.contact_links}>
        <a
          href="mailto:our.biss0132@gmail.com"
          className={(sty.contact, sty.youtube)}
          target={"blank"}
        >
          <MdOutlineMailOutline size={icon_size} />
          <h2>Email</h2>
          <span>our.biss0132@gmail.com</span>
        </a>

        <div className={sty.line}></div>

        <a
          href="tel:+40757386289"
          className={(sty.contact, sty.whatsapp)}
          target={"blank"}
        >
          <MdCall size={icon_size} />
          <h2>Call us</h2>
          <span>+40757 386 289</span>
        </a>

        <div className={sty.line}></div>

        <a
          href="https://www.instagram.com/lorb0t/"
          className={(sty.contact, sty.instagram)}
        >
          <RiInstagramLine size={icon_size} />
          <h2>Instagram</h2>
          <span>@lorb0t</span>
        </a>

        <div className={sty.line}></div>

        <a
          href="https://github.com/progenor"
          className={(sty.contact, sty.instagram)}
        >
          <AiFillGithub size={icon_size} />
          <h2>GitHub</h2>
          <span>progenor</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
