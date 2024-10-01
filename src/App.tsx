import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import EducationSection from './components/EducationSection/EducationSection';
import TechStack from './components/TechStack/TechStack';
import './App.css';

const App = () => {
  return (
    <div className={'main-screen'}>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <EducationSection />
      <TechStack />
    </div>
  );
};

export default App;
