import Emulator from './Emulator/Emulator';
import classes from './AinvestingProject.module.css';

const AinvestingProject = () => {
  return (
    <div className={classes.container}>
      <Emulator record={'record_v2'} device={1} />
      <div>
        <h1>
          <span>Ainvesting: </span>Online CFD Trading
        </h1>
        <small>
          A real-time application that requires full optimization performance,
          including authentication process, full and customized navigation, RTL
          support, upload files, push notifications, sending emails, Reanimated
          effects and much more.
        </small>
        <small>
          Along with my team, we built from the ground up a real cross-platform
          application (React Native CLI) for Crypto CFDs trading that provides
          real-time market data with advanced trading tools.
        </small>
        <small>Available on App Store (IOS) & Play Store (Android).</small>
        <small>
          Built from the ground up over one year with me as the{' '}
          <span>main</span> developer for the project.
        </small>
      </div>
    </div>
  );
};

export default AinvestingProject;
