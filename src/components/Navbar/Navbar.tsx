import navbar from '../../fixtures/navbar-links.json';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <ul className={classes.navMenu}>
      {navbar.links.map(({ id, route }) => (
        <li key={id}>
          <a>{route}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
