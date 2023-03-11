import navbar from '../../fixtures/navbar-links.json';
import classes from './Navbar.module.css';

const Navbar = () => {
  const handleClickScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={classes.nav}>
      <ul>
        {navbar.links.map(({ id, route }) => (
          <li key={id}>
            <a onClick={handleClickScroll.bind(this, route)}>{route}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
