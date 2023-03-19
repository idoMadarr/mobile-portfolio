import Emulator from '../../Emulator/Emulator';
import classes from './AlumniConsultants.module.css';

const AlumniConsultants = () => {
  return (
    <div className={classes.alumni}>
      <h3 className={'vertical-timeline-element-title'}>
        React Native Mobile Developer
      </h3>
      <small>(Hands-On Team Lead)</small>
      <p className={'vertical-timeline-element-subtitle'}>Israel, Herzeliza</p>
      <p>
        Along with my team, we have built from the ground up a complete trading
        app platform for investing in cryptocurrency, forex, shares and more...
        A real application for both IOS and Android (8Invest). Available on App
        Store and Play Store.
      </p>
      <ul>
        <li>
          A real-time application that requires full optimization performance
          with SocketIO.
        </li>
        <li>
          Secure authentication process including Social login via Facebook or
          Gmail.
        </li>
        <li>Full and customized navigation.</li>
        <li>Multilanguage application including RTL support.</li>
        <li>
          Native device features, Upload files, Push notification, Reanimated
          effects etc.
        </li>
      </ul>
      <p>
        <strong>
          Built from the ground up over one year with me as the{' '}
          <span>main</span> developer for the project.
        </strong>
      </p>
      <Emulator record={'record_v4'} />
    </div>
  );
};

export default AlumniConsultants;
