import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { isAndroid } from 'react-device-detect';
import classes from './ProjectsHeader.module.css';

const ProjectsHeader = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const animation = !isAndroid
    ? {
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -100,
        transition: {
          duration: 1,
          ease: 'easeInOut',
        },
      }
    : {};

  return (
    <motion.div
      className={classes.header}
      initial={{ opacity: !isAndroid ? 0 : 1 }}
      animate={animation}
      ref={ref}
    >
      <small>MY WORK</small>
      <h1>Experience</h1>
      <p>
        Please check my projects to learn more about my development skills,
        ability to write clean code, solve complex problems, and optimize
        architecture experience through my work. Each of my projects is 100%
        written by myself with all the advanced technologies such React Native,
        React, NodeJS, MongoDB and much more.
      </p>
    </motion.div>
  );
};

export default ProjectsHeader;
