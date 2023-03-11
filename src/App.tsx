import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AinvestingProject from './components/AinvestingProject/AinvestingProject';
import RootTimeline from './components/TimelineSection/RootTimeline/RootTimeline';

const App = () => {
  return (
    <div className={'main-screen'}>
      <Navbar />
      <HeroSection />
      <RootTimeline />
      {/* <AinvestingProject /> */}
      {/* <img src={logo} className='react-logo' alt='logo' /> */}
    </div>
  );
};

export default App;
