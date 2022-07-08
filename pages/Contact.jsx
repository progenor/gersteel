import sty from "../styles/contact.module.scss";
//tools
import { useRef } from "react";
import useTranslation from "next-translate/useTranslation";
//icons
import { MdOutlineMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

function Contact() {
  const icon_size = 70;

  let { t, lang } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1g0dmi2", //service Id
        "template_1oultbm",
        // form.current,
        form.current,
        "VoA0qkSw7QZn4vVDR"
      )
      .then(
        (result) => {
          // console.log(form.current);
          window.location.reload(false);
          console.log(result.text);
        },
        (error) => {
          alert("ERROR");
          console.log(error.text);
        }
      );
  };

  return (
    <div className={sty.big_container}>
      <div id="contact" className={sty.container}>
        <h1>Contact </h1>
        <div className={sty.form_container}>
          <form className={sty.form} ref={form} onSubmit={sendEmail}>
            <label htmlFor="from_name" className={sty.label}>
              {t("name")}
            </label>

            <input
              type="text"
              name="from_name"
              className={(sty.name, sty.cont)}
              placeholder={t("name_1")}
              tabIndex={1}
              required
            ></input>

            <label htmlFor="email" className={sty.label}>
              E-mail:
            </label>

            <input
              type="email"
              name="email"
              id="email"
              className={(sty.email, sty.cont)}
              placeholder="example@gmail.com"
              tabIndex={2}
              required
            />

            <label htmlFor="message" className={sty.label}>
              {t("message")}
            </label>

            <textarea
              name="message"
              id="message"
              placeholder={t("message_1")}
              className={(sty.msg, sty.cont)}
              tabIndex={3}
              required
            ></textarea>

            <button className={sty.subBtn} type="submit">
              Submit
              <FiSend className={sty.send_icon} size={18} />
            </button>
          </form>
        </div>

        {/* ################################################# */}

        <div className={sty.buttons_container}>
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

        {/* ########### MAP ############# */}
        <div className={sty.map}>
          <h1>Where can you find us:</h1>
          <a href="https://www.google.com/maps/place/Strada+Frunzei+10,+T%C3%A2rgu+Mure%C8%99+547525/@46.538634,24.5410713,15z/data=!4m13!1m7!3m6!1s0x474bb7ce9f7b278b:0xbf084ffd3fe15941!2sStrada+Frunzei+10,+T%C3%A2rgu+Mure%C8%99+547525!3b1!8m2!3d46.538634!4d24.549826!3m4!1s0x474bb7ce9f7b278b:0xbf084ffd3fe15941!8m2!3d46.538634!4d24.549826">
            <img src="/assets/images/romania_map_location.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
