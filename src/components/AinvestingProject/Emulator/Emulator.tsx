import React from 'react';
import classes from './Emulator.module.css';

interface EmulatorPropsType {
  device?: number;
  record?: string;
}

const Emulator: React.FC<EmulatorPropsType> = ({ record, device }) => {
  // const deviceStyles =
  //   device === 1 ? classes['first-device-img'] : classes['second-device-img'];

  // const recordStyles =
  //   device === 1 ? classes['first-record'] : classes['second-record'];

  return (
    <div className={classes.main}>
      <img
        className={classes['first-device-img']}
        src={require('../../../assets/iphone.png')}
        alt={'iphone'}
      />
      <video className={classes['first-record']} autoPlay={true} muted loop>
        <source
          src={require(`../../../assets/${record}.mp4`)}
          type={'video/mp4'}
        />
      </video>
    </div>
  );
};

export default Emulator;
