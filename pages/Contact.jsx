import sty from '../styles/contact.module.scss';
//tools
import { useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
//icons
import { MdOutlineMailOutline } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { RiInstagramLine } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { GiRotaryPhone } from 'react-icons/gi';

function Contact() {
  const icon_size = 70;

  const { t, lang } = useTranslation('contact');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1g0dmi2', //service Id
        'template_1oultbm',
        // form.current,
        form.current,
        'VoA0qkSw7QZn4vVDR'
      )
      .then(
        (result) => {
          // console.log(form.current);
          window.location.reload(false);
          console.log(result.text);
        },
        (error) => {
          alert('ERROR');
          console.log(error.text);
        }
      );
  };

  return (
    <div className={sty.big_container}>
      <div id="contact" className={sty.container}>
        <h1>{t('common:contact')}</h1>
        <div className={sty.form_container}>
          <form className={sty.form} ref={form} onSubmit={sendEmail}>
            <label htmlFor="from_name" className={sty.label}>
              {t('name')}
            </label>

            <input
              type="text"
              name="from_name"
              className={(sty.name, sty.cont)}
              placeholder={t('name_1')}
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
              {t('message')}
            </label>

            <textarea
              name="message"
              id="message"
              placeholder={t('message_1')}
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
              href="mailto:gersteelsrl@yahoo.com"
              className={sty.contact}
              target={'blank'}
            >
              <MdOutlineMailOutline size={icon_size} />
              <h2>Email</h2>
              <span>gersteelsrl@yahoo.com</span>
            </a>
            <div className={sty.line}></div>
            <a href="tel:+40742090664" className={sty.contact} target={'blank'}>
              <MdCall size={icon_size} />
              <h2>Call us</h2>
              <span>+40 742 099 664</span>
              {/* FIXME: fix he calling */}
            </a>
            <div className={sty.line}></div>
            <a href="fax:+40265266267" className={sty.contact}>
              <GiRotaryPhone size={icon_size} />
              <h2>Fix</h2>
              <span>+40 265 266 267</span>
            </a>
            {/* <div className={sty.line}></div>
            <a href="https://github.com/progenor" className={sty.contact}>
              <AiFillGithub size={icon_size} />
              <h2>GitHub</h2>
              <span>progenor</span>
            </a> */}
          </div>
        </div>

        {/* ########### MAP ############# */}
        <div className={sty.map}>
          <h1>{t('find_us')}</h1>
          <a href="https://www.google.com/maps/place/Strada+Frunzei+10,+T%C3%A2rgu+Mure%C8%99+547525/@46.538634,24.5410713,15z/data=!4m13!1m7!3m6!1s0x474bb7ce9f7b278b:0xbf084ffd3fe15941!2sStrada+Frunzei+10,+T%C3%A2rgu+Mure%C8%99+547525!3b1!8m2!3d46.538634!4d24.549826!3m4!1s0x474bb7ce9f7b278b:0xbf084ffd3fe15941!8m2!3d46.538634!4d24.549826">
            <img src="/assets/images/romania_map_location.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
