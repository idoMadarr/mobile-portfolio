import classes from './Emulator.module.css';

const Emulator = () => {
  return (
    <div className={classes['container']}>
      <img
        width={460}
        src={require('../../assets/iphone.png')}
        alt={'iphone'}
      />
      <video autoPlay={true} muted>
        <source src={require('../../assets/record.mp4')} type={'video/mp4'} />
      </video>
    </div>
  );
};

export default Emulator;
