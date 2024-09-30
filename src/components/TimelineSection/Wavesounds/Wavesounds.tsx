import Emulator from "../../Emulator/Emulator";
import classes from "./Wavesounds.module.css";

const Wavesounds = () => {
  return (
    <div className={classes.alumni}>
      <img
        src={require("../../../assets/wavesounds.png")}
        width={45}
        height={45}
      />
      <h3 className={"vertical-timeline-element-title"}>
        NodeJS & React Native Developer
      </h3>
      <small>Fullstack developer</small>
      <p className={"vertical-timeline-element-subtitle"}>Israel, Givataim</p>
      <p>
        Digital music application that gives you access to millions of songs and
        other content from creators all over the world. - available on Play
        Store only. A Fullstack (BETA) project that includes nodejs server as
        the backend with react native application.
      </p>
      <ul>
        <li>CI/CD proccess with Microsoft AppCenter</li>
        <li>Beta App is available on Google Play Store - “WaveSounds</li>
      </ul>
      <Emulator>
        <source
          src={require(`../../../assets/wavesounds_record.mp4`)}
          type={"video/mp4"}
        />
      </Emulator>
    </div>
  );
};

export default Wavesounds;
