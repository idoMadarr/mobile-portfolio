import React from "react";
import classes from "./Emulator.module.css";

interface EmulatorPropsType {
  children: JSX.Element;
}

const Emulator: React.FC<EmulatorPropsType> = ({ children }) => {
  return (
    <div className={classes.main}>
      <video autoPlay={true} muted loop>
        {children}
      </video>
    </div>
  );
};

export default Emulator;
