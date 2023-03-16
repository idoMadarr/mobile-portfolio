import { useState } from 'react';
import navbar from '../../fixtures/navbar-links.json';
import classes from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [navburger, setNavburger] = useState(false);

  const handleClickScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      setNavburger(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={classes.nav}>
      <AnimatePresence>
        {navburger && (
          <motion.div
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            exit={{ opacity: 0, y: -800 }}
            className={classes.drawer}
          >
            <div className={classes['burger-links']}>
              {navbar.links.map(({ id, route }) => (
                <a key={id} onClick={handleClickScroll.bind(this, route)}>
                  {route}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ul className={classes['main-links']}>
        {navbar.links.map(({ id, route }) => (
          <li key={id}>
            <a onClick={handleClickScroll.bind(this, route)}>{route}</a>
          </li>
        ))}
      </ul>
      <FontAwesomeIcon
        onClick={() => setNavburger(prevState => !prevState)}
        icon={faBars}
        fontSize={32}
      />
    </nav>
  );
};

export default Navbar;
