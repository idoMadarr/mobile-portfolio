import React from 'react';
import classes from './ItemDetails.module.css';
import { faStore, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ItemDetailsPropsType {
  title: string;
  desc: string;
  about: string;
  tech: string;
  demo: any;
  repo: string | null;
  image: string;
  url: string | null;
}

const ItemDetails: React.FC<ItemDetailsPropsType> = ({
  title,
  desc,
  tech,
  about,
  demo,
  repo,
  image,
  url,
}) => {
  const onStore = () => window.open(url!);

  const onGitHub = () => window.open(repo!);

  return (
    <div className={classes['item-details-container']}>
      <div className={classes['item-details-container-header']}>
        <h1>{title}</h1>
        <div>
          {url && (
            <FontAwesomeIcon
              icon={faStore}
              size={'2x'}
              onClick={onStore}
              cursor={'pointer'}
            />
          )}
          {repo && (
            <FontAwesomeIcon
              icon={faCode}
              size={'2x'}
              onClick={onGitHub}
              cursor={'pointer'}
            />
          )}
        </div>
      </div>
      <small style={{ color: 'white', alignSelf: 'start' }}>
        * Tech stack: <small style={{ color: '#8b9194' }}>{tech}</small>
      </small>
      <p>{desc}</p>
      <p style={{ color: '#8b9194' }}>{about}</p>

      <img src={image} />
    </div>
  );
};

export default ItemDetails;
