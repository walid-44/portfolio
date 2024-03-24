import { Col, Row } from "react-bootstrap";
import "./about.css";
import IMG from "../../assets/header.jpg";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { SiVisualstudiocode } from "react-icons/si";
import { motion } from "framer-motion";

const variantsAboutText = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};
const variantsAboutImage = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const About = () => {
  return (
    <div className="w-100 mt-5">
      <p className="title-section">About</p>
      <Row className="mt-4">
        <Col md={12} lg={6} className="d-flex justify-content-center">
          <motion.div
            variants={variantsAboutImage}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="image-about"
          >
            <img src={IMG} alt="about image" />
            <div className="frame-animation"></div>
          </motion.div>
        </Col>
        <Col md={12} lg={6} className="align-self-center mt-5">
          <motion.div
            variants={variantsAboutText}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <h2 className="subtitle-about text-md-start text-center mb-3">
              About <span>Us</span>
            </h2>
            <p className="decs-about lh-lg  ">
              As a beginner in programming, I have acquired proficiency in a
              range of programming languages, including JavaScript, CSS, and
              HTML. My expertise extends to utilizing libraries such as React
              and Redex effectively. Furthermore, I am competent in handling
              APIs, enabling seamless integration into web development projects.
              With a solid foundation in these languages and libraries, along
              with API management skills, I am well-equipped to contribute
              meaningfully to diverse programming endeavors.
            </p>
            <h2 className="subtitle-about text-md-start text-center my-3">
              Skills <span>My</span>
            </h2>
            <motion.ul
              variants={variantsAboutText}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="p-0 m-0 d-flex  flex-wrap gap-2  justify-content-center justify-content-md-start  group-skills "
            >
              <motion.li variants={variantsAboutText}>
                html5
                <FaHtml5 data-set="orange" />
              </motion.li>
              <motion.li variants={variantsAboutText}>
                css3
                <FaCss3Alt />
              </motion.li>
              <motion.li variants={variantsAboutText}>
                JavaScript
                <IoLogoJavascript />
              </motion.li>
              <motion.li variants={variantsAboutText}>
                bootstrap
                <FaBootstrap />
              </motion.li>
              <motion.li variants={variantsAboutText}>
                react js
                <FaReact />
              </motion.li>

              <motion.li variants={variantsAboutText}>
                git
                <FaGitAlt />
              </motion.li>
              <motion.li variants={variantsAboutText}>
                github
                <FaGithub />
              </motion.li>
              <motion.li variants={variantsAboutText}>
                vite
                <TbBrandVite />
              </motion.li>
              <motion.li variants={variantsAboutText}>
                vs code
                <SiVisualstudiocode />
              </motion.li>
              <motion.li variants={variantsAboutText}>
                redux
                <SiRedux />
              </motion.li>
            </motion.ul>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
