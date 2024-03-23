import { Card, Col, Row } from "react-bootstrap";
import { category } from "./category";
import { data } from "./data";
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import "./work.css";
import { useState } from "react";
import { motion } from "framer-motion";
const animationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const Work = () => {
  const [active, setActive] = useState("all");
  const [isData, setISData] = useState(data);
  const [isFilter, setISFilter] = useState(isData);
  // console.log(isData, "data");
  // console.log(isFilter, "filter");
  const handleAction = (e) => {
    setISData(data);
    setActive(e);
    const filData = isData.filter((nawData) => nawData.category === e);
    setISFilter(filData);
  };
  const handleAllWork = () => {
    setISFilter(data);
    setActive("all");
  };

  return (
    <>
      <h2 className="title-section">Work</h2>
      <Row>
        <Col lg={3} className="align-self-center align-self-lg-start flex-wrap">
          <ul className="group-items p-3">
            <li
              className={`item ${active === "all" ? "active" : null}`}
              onClick={handleAllWork}
            >
              All
            </li>
            {category.map((item) => (
              <motion.li
                variants={animationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className={`item ${active === item ? "active" : null}`}
                key={item}
                onClick={() => handleAction(item)}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </Col>
        <Col lg={9}>
          <Row>
            {isFilter.map((project) => (
              <Col key={project.id} sm={6} lg={4} xl={4} className="mt-3 ">
                <motion.div
                  variants={animationVariants}
                  initial={`initial ${{ transform: "scale(0)" }}`}
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  layout
                  // initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring" }}
                  className="card-work"
                  key={project.id}
                >
                  <span className="work-image">
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </span>
                  <Card.Body className="p-2">
                    <Card.Title className="title-work">
                      {project.title}
                    </Card.Title>

                    <div className="buttons">
                      <a href={project.repo} target="_blank">
                        <FaGithub />
                      </a>
                      <a href={project.link} target="_blank">
                        <BsGlobe2 />
                      </a>
                    </div>
                  </Card.Body>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Work;
