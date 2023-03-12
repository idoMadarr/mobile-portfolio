import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AinvestingProject from './components/AinvestingProject/AinvestingProject';
import RootTimeline from './components/TimelineSection/RootTimeline/RootTimeline';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

const App = () => {
  return (
    <div className={'main-screen'}>
      <Navbar />
      <HeroSection />
      <RootTimeline />
      <ProjectsSection />
      {/* <AinvestingProject /> */}
      {/* <img src={logo} className='react-logo' alt='logo' /> */}
    </div>
  );
};

export default App;
