import React from 'react';
import classes from './ItemDetails.module.css';
import { faStore, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isAndroid, isIOS, isBrowser } from 'react-device-detect';

interface ItemDetailsPropsType {
  title: string;
  desc: string;
  about: string;
  tech: string;
  demo: any;
  repo: string | null;
  image: string;
  url: { google: string | null; apple: string | null };
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
  const onStore = () => {
    if (isBrowser && isAndroid) {
      return window.open(url.google!);
    }

    if (isBrowser && isIOS) {
      return window.open(url.apple!);
    }

    if (isBrowser) {
      return window.open(url.google!);
    }
  };

  const onGitHub = () => window.open(repo!);

  return (
    <div className={classes['item-details-container']}>
      <div className={classes['item-details-container-header']}>
        <h1>{title}</h1>
        <div>
          {(url.google || url.apple) && (
            <div className={classes['icon']}>
              <FontAwesomeIcon
                icon={faStore}
                size={'2x'}
                onClick={onStore}
                cursor={'pointer'}
              />
              <small className={classes['icon-title']}>Stores</small>
            </div>
          )}
          {repo && (
            <div className={classes['icon']}>
              <FontAwesomeIcon
                icon={faCode}
                size={'2x'}
                onClick={onGitHub}
                cursor={'pointer'}
              />
              <small className={classes['icon-title']}>Code</small>
            </div>
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
