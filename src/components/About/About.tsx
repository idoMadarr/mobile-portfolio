import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.about}>
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
      <div className={classes.section}>
        <h1>About</h1>
      </div>
    </div>
  );
};

export default About;
