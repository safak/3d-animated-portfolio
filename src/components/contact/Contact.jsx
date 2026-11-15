import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import toast, { Toaster } from "react-hot-toast";

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

  const ref = useRef();
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      );

      toast.success("Your message has been sent!");
      form.current.reset();
    } catch (err) {
      console.error("EmailJS submission failed:", err);
      toast.error("Message could not be sent. Please try again.");
    }
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let's keep in touch!
          </motion.h1>

          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="user_username"
              placeholder="John Doe"
              required
            />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="user_email"
              placeholder="john@gmail.com"
              required
            />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows={5}
              name="user_message"
              placeholder="Write your message..."
              required
            />
          </motion.div>

          <motion.button variants={listVariant} className="formButton" type="submit">
            Send
          </motion.button>
          <Toaster position="top-right" />
          {success && <span role="status">Your message has been sent!</span>}
          {error && <span role="alert">Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection"></div>
    </div>
  );
};

export default Contact;