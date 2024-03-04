import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import RootTimeline from "./components/TimelineSection/RootTimeline/RootTimeline";
import TechStack from "./components/TechStack/TechStack";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import EducationSection from "./components/EducationSection/EducationSection";
import "./App.css";

const App = () => {
  return (
    <div className={"main-screen"}>
      <Navbar />
      <HeroSection />
      <RootTimeline />
      <TechStack />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
};

export default App;
