import ThreeDModel from "../3DModels/3DModel";
import classes from "./HeroSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { isAndroid } from "react-device-detect";

const HeroSection = () => {
  const variants = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2.0,
      },
    },
  };

  return (
    <motion.div
      id={"About"}
      className={classes["hero-container"]}
      variants={!isAndroid ? variants : {}}
      initial={"init"}
      animate={"animate"}
    >
      <div>
        <h2>About</h2>
      </div>
      <div>
        {!isAndroid && <ThreeDModel />}
        <h1>
          Hi, I'm <span>Ido</span>, a Fullstack & React Native Developer.
        </h1>
        <p>
          With a wealth of hands-on experience and a firm dedication to
          producing clean and reusable code, I've crafted and shipped several of
          advanced modern React Native applications from the gound up, including
          comprehensive cryptocurrency trading platform, a feature-rich music
          player, an insurance finance application, and more.
        </p>
        <p>
          My primary tech stack includes cutting-edge technologies, such as
          Modern JavaScript/TypeScript ES6, React, React Native, Node.js, SQL,
          MongoDB, Docker, kubernetes and beyond. I'm a highly motivated and
          proven self-taught developer who likes to solve problems. Feel free to
          get in touch.
        </p>
        <div className={classes.details}>
          <FontAwesomeIcon icon={faEnvelope} color={"#3498db"} />
          <small>Idox2x@Gmail.com</small>
          <FontAwesomeIcon icon={faLink} color={"#3498db"} />
          <a href={"https://www.linkedin.com/in/ido-adar-1b953314b/"}>
            Linkedin
          </a>
          <FontAwesomeIcon icon={faPhone} color={"#3498db"} />
          <small>052-5577-575</small>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
