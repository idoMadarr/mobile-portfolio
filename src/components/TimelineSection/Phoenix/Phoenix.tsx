import classes from "./Phoenix.module.css";

const Phoenix = () => {
  return (
    <div className={classes.alumni}>
      <img
        src={require("../../../assets/carinsurance.png")}
        width={45}
        height={45}
      />
      <h3 className={"vertical-timeline-element-title"}>
        React Native Developer
      </h3>
      <small>Senior mobile developer</small>
      <p className={"vertical-timeline-element-subtitle"}>Israel, Givataim</p>
      <p>
        Step by step, I have built the new Phoenix Car platform from scratch. A
        beautiful application that comes with all the functionality you except
        to find in a modern application, Including Biometric authentication
        process, full and customized navigation, Push notification,
        Comprehensive Firebase integration, and tons of Reanimated and
        Animations.
      </p>
      <ul>
        <li>CI/CD proccess with Microsoft AppCenter</li>
        <li>Available on App Store / Google Play Store - “רכב ביטוח הפניקס“</li>
      </ul>
    </div>
  );
};

export default Phoenix;
