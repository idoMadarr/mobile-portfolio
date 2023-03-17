import Device from '../3DModels/Device';
import ThreeDModel from '../3DModels/3DModel';
import classes from './HeroSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

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
      id={'About'}
      className={classes['hero-container']}
      variants={variants}
      initial={'init'}
      animate={'animate'}
    >
      <div>
        <h2>About</h2>
      </div>
      <div>
        <h1>
          Hi, I'm <span>Ido Adar</span>, a self-taught Fullstack & Cross
          Platform Mobile developer.
        </h1>
        <p>
          After two years in the law field as a young Corporate Lawyer, I
          decided to switch my whole career to something entirly different – Web
          and Mobile Development.
        </p>
        <p>
          Since then, I've found myself working with loads of web technologies,
          and was exposed to all of the nitty-gritty details of web development
          by self-learning, Inc Modern JavaScript/TypeScript ES6, React, React
          Native, Nodejs, SQL & NoSQL Databases (MongoDB), Docker, Kubernetes
          and much more. I'm highly motivated and proven self-taught developer
          who likes to solve problems.
        </p>
        <div className={classes.details}>
          <FontAwesomeIcon icon={faEnvelope} color={'#3498db'} />
          <small>Idox2x@Gmail.com</small>
          <FontAwesomeIcon icon={faLink} color={'#3498db'} />
          <a href={'https://www.linkedin.com/in/ido-adar-1b953314b/'}>
            Linkedin
          </a>
          <FontAwesomeIcon icon={faPhone} color={'#3498db'} />
          <small>052-5577-575</small>
        </div>
      </div>
      <div>
        <ThreeDModel autoRotate>
          <Device />
        </ThreeDModel>
      </div>
    </motion.div>
  );
};

export default HeroSection;
