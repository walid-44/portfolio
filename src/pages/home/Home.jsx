import { Col, Row } from "react-bootstrap";
import { FaFileArrowDown } from "react-icons/fa6";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./home.css";
import SVG from "../../assets/hero.svg";
import Sociol from "../../components/sociol/Sociol";

const variantsText = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const variantsImage = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 8,
      duration: 1,
    },
  },
};
const Home = () => {
  return (
    <Row className="w-100">
      <Col md={12} lg={6} className="position-relative align-self-center">
        <motion.div variants={variantsText} initial="initial" animate="animate">
          <motion.h1 className="title_home" variants={variantsText}>
            Hi , I m Walid Fawzy
          </motion.h1>
          <motion.h2 className="subtitle_home" variants={variantsText}>
            FrontEnd Developer (React Js)
          </motion.h2>
          <motion.p className="desc_home" variants={variantsText}>
            I have a strong passion in teaching programming and front-end
            development . I am looking for a career with a presentation
            organization that can benefit from my experience and abilities . And
            if he gets more experience with them
          </motion.p>
          <motion.div className="group-coll" variants={variantsText}>
            <motion.a href="#Contact" variants={variantsText}>
              contact
              <BsFillTelephoneOutboundFill />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1YTnQNcrVRf4loSx4wrpmS5VpKiBzvX5h/view?usp=drive_link"
              variants={variantsText}
              target="_blank"
            >
              Download Cv
              <FaFileArrowDown />
            </motion.a>
          </motion.div>
          <motion.div className="mt-4" variants={variantsText}>
            <Sociol variants={variantsText} />
          </motion.div>
        </motion.div>
      </Col>
      <Col md={12} lg={6} className="d-none d-lg-flex">
        <motion.div
          variants={variantsImage}
          initial="initial"
          animate="animate"
          className="w-100"
        >
          <motion.img variants={variantsImage} src={SVG} alt="Hero image" />
        </motion.div>
      </Col>
    </Row>
  );
};

export default Home;
