import ProjectsHeader from './ProjectsHeader/ProjectsHeader';
import ProjectsList from './ProjectsList/ProjectsList';
import classes from './ProjectsSection.module.css';

const ProjectsSection = () => {
  return (
    <div id={'Main Projects'} className={classes['projects-main']}>
      <ProjectsHeader />
      <ProjectsList />
    </div>
  );
};

export default ProjectsSection;
