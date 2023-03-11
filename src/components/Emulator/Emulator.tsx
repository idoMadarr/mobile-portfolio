import React from 'react';
import classes from './Emulator.module.css';

interface EmulatorPropsType {
  record?: string;
}

const Emulator: React.FC<EmulatorPropsType> = ({ record }) => {
  return (
    <div className={classes.main}>
      <img
        className={classes['device-img']}
        src={require('../../assets/iphone.png')}
        alt={'iphone'}
      />
      <video className={classes['record']} autoPlay={true} muted loop>
        {/* <source
          src={require(`../../assets/${record}.mp4`)}
          type={'video/mp4'}
        /> */}
      </video>
    </div>
  );
};

export default Emulator;
