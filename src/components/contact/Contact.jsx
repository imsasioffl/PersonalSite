import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3764GL', 'template_3764GL', form.current, 'Esk6RyRYn9PODAaSB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact-icon" />
            <h4>E-mail</h4>
            <h5>sasikumar3764@gmail.com</h5>
            <a
              href="mailto:sasikumar3764@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <FaTelegramPlane className="contact-icon"/>
            <h4>Telegram</h4>
            <h5>Sasikumar.S</h5>
            <a
              href="http://t.me/+916382229485"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <MdOutlineWhatsapp className="contact-icon"/>
            <h4>WhatsApp</h4>
            <h5>+91 638 222 9485</h5>
            <a
              href="https://wa.me/+916382229485"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact form*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your FullName" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
