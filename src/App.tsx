import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import RootTimeline from './components/TimelineSection/RootTimeline/RootTimeline';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import EducationSection from './components/EducationSection/EducationSection';

const App = () => {
  return (
    <div className={'main-screen'}>
      <Navbar />
      <HeroSection />
      <RootTimeline />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
};

export default App;
