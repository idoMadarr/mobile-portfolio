import React from 'react';
import classes from './ItemSection.module.css';

interface ItemSectionPropsType {
  title: string;
  image: any;
  updateState(): void;
}

const ItemSection: React.FC<ItemSectionPropsType> = ({
  title,
  image,
  updateState,
}) => {
  return (
    <div onClick={updateState} className={classes['item-section-container']}>
      <img src={image} />
      <p>{title}</p>
    </div>
  );
};

export default ItemSection;
