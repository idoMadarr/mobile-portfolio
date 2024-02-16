import education from '../../../fixtures/education-content.json';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import classes from './EducationList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes } from '@fortawesome/free-solid-svg-icons';
import { isAndroid } from 'react-device-detect';
// asd
const EducationList = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const animation = !isAndroid
    ? {
        opacity: inView ? 1 : 0,
        y: inView ? 0 : -100,
        transition: {
          duration: 1,
          ease: 'easeInOut',
        },
      }
    : {};

  return (
    <motion.div
      className={classes.experience}
      initial={{ opacity: !isAndroid ? 0 : 1 }}
      animate={animation}
      ref={ref}
    >
      <FontAwesomeIcon icon={faShapes} color={'#2aaf19'} fontSize={32} />
      <h1>My Education</h1>
      <div>
        {education.list.map(({ id, name, desc, date }) => (
          <div key={id} className={classes['education-item']}>
            <h3>{name}</h3>
            <p>{desc}</p>
            <small>{date}</small>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationList;
