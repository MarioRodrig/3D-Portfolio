import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion, useInView } from "framer-motion"; // Correct Framer Motion imports
import ContactModelContainer from "./ContactModelContainer"; // Import your 3D model container

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        {/* Motion form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 className="cTitle" variants={listVariant}>
            Let's keep in touch
          </motion.h1>
          <motion.div className="formItem" variants={listVariant}>
            <label>Name</label>
            <input
              type="text"
              name="user_username"
              placeholder="John doe..."
            />
          </motion.div>
          <motion.div className="formItem" variants={listVariant}>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="JohnDoe@gmail.com"
            />
          </motion.div>
          <motion.div className="formItem" variants={listVariant}>
            <label>Message</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="Write your message..."
            />
          </motion.div>
          <motion.button
            type="submit"
            className="formButton"
            variants={listVariant}
          >
            Send
          </motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>

      {/* 3D Model Section */}
      <div className="cSection">
        <ContactModelContainer />
      </div>
    </div>
  );
};

export default Contact;
