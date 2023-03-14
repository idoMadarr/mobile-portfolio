import React from 'react';
import classes from './ProjectsItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faStore } from '@fortawesome/free-solid-svg-icons';

interface ProjectsItemPropsType {
  id: number;
  image: string;
  title: string;
  desc: string;
  tech: string;
  repo: string | null;
  url: string | null;
  repoNavigate: Function;
}

const ProjectsItem: React.FC<ProjectsItemPropsType> = ({
  id,
  image,
  title,
  desc,
  tech,
  repo,
  url,
  repoNavigate,
}) => {
  const dynamicColor = id === 2 ? 'black' : 'white';

  return (
    <div className={classes['list-item']}>
      <div>
        <div className={classes['img-wrapper']}>
          <div>
            {repo && (
              <FontAwesomeIcon
                onClick={repoNavigate.bind(this, repo)}
                icon={faCode}
                color={dynamicColor}
                fontSize={22}
              />
            )}
            {url && (
              <FontAwesomeIcon
                onClick={repoNavigate.bind(this, url)}
                icon={faStore}
                color={dynamicColor}
                fontSize={22}
              />
            )}
          </div>
          <img src={image} alt={'img'} />
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
