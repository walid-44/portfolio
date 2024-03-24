import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Row } from "react-bootstrap";
import "./contact.css";
import SVG from "../../assets/message.svg";
import { motion } from "framer-motion";
const animationContact = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};
const animationContactImage = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (name.length < 4) {
      setError("Name should be at least 4 characters long");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (message.trim().split(/\s+/).length < 1) {
      setError("Message should be at least 80 words long.");
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVER_ID,
        import.meta.env.VITE_SERVER_TEMPLATE,
        form.current,
        {
          publicKey: import.meta.env.VITE_SERVER_KEY,
        }
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setError("");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatusMessage("Failed to send message. Please try again later.");
          setError("error");
        }
      );
  };
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <h2 className="title-section">Contact</h2>
      <Row>
        <Col md={12} lg={6}>
          <motion.div
            variants={animationContactImage}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="image-contact"
          >
            <img src={SVG} alt="image svg" />
          </motion.div>
        </Col>
        <Col md={12} lg={6} className="align-self-center order-1 mt-4 mt-lg-0">
          <motion.div
            variants={animationContact}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="form-contact"
              action=""
            >
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                rows={6}
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {statusMessage && (
                <p className={error ? "error" : "success"}>{statusMessage}</p>
              )}
              <input className="border-0" type="submit" value="Send" />
            </form>
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
