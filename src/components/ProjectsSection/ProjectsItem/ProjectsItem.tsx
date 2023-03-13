import React from 'react';
import classes from './ProjectsItem.module.css';

interface ProjectsItemPropsType {
  image: string;
  title: string;
  desc: string;
  tech: string;
  navigate(): void;
}

const ProjectsItem: React.FC<ProjectsItemPropsType> = ({
  image,
  title,
  desc,
  tech,
  navigate,
}) => {
  return (
    <div onClick={navigate} className={classes['list-item']}>
      <div>
        <div className={classes['img-wrapper']}>
          <img src={image} alt={'IMG'} />
        </div>
        <p>{title}</p>
        <small>{desc}</small>
      </div>
      <div className={classes.tag}>
        <small>
          <span>Main Tech</span> : {tech}
        </small>
      </div>
    </div>
  );
};

export default ProjectsItem;
