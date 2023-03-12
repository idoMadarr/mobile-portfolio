import classes from './ProjectsHeader.module.css';

const ProjectsHeader = () => {
  return (
    <div className={classes.header}>
      <small>MY WORK</small>
      <h1>Projects</h1>
      <p>
        Please check my projects to learn more about my development skills,
        ability to write clean code, solve complex problems, and optimize
        architecture experience through my work. Each of my projects is 100%
        written by myself with all the advanced technologies such React Native,
        React, NodeJS, MongoDB and much more.
      </p>
    </div>
  );
};

export default ProjectsHeader;
