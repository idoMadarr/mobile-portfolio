import Device from '../3DModels/Device';
import ThreeDModel from '../3DModels/3DModel';
import classes from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div id={'About'} className={classes['hero-container']}>
      <div>
        <h2>About</h2>
      </div>
      <div>
        <h1>
          Hi, I'm <span>Ido Adar</span>, a Fullstack & Cross Platform Mobile
          developer.
        </h1>
        <p>
          After two years in the law field as a young Corporate Lawyer, I
          decided to switch my whole career to something entirly different – Web
          and Mobile Development.
        </p>
        <p>
          Since then, I've found myself working with loads of web technologies,
          and was exposed to all of the nitty-gritty details of web development
          by self-learning, Inc Modern JavaScript/TypeScript ES6, React, React
          Native, Nodejs, SQL & NoSQL Databases (MongoDB), Docker, Kubernetes
          and much more. I'm highly motivated and proven self-taught developer
          who likes to solve problems.
        </p>
      </div>
      <div>
        <ThreeDModel autoRotate>
          <Device />
        </ThreeDModel>
      </div>
    </div>
  );
};

export default HeroSection;
