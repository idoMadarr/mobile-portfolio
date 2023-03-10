import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import AinvestingProject from './components/AinvestingProject/AinvestingProject';
import Timeline from './components/Timeline/Timeline';

const App = () => {
  return (
    <div className={'main-screen'}>
      <Navbar />
      <About />
      <Timeline />
      <AinvestingProject />
      {/* <img src={logo} className='react-logo' alt='logo' /> */}
    </div>
  );
};

export default App;
