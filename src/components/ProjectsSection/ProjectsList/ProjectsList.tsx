import classes from './ProjectsList.module.css';

const list = [
  {
    id: 0,
    title: 'Ainvesting',
    desc: 'Ainvesting is a social trading App for Crypto CFDs trading that provies real-time market data and advanced trading tools. (available on App Store / Play Store).',
    tech: 'React Native CLI',
    timestamps: 'April 2023',
    image: require('../../../assets/waveSounds-onWhite.jpg'),
  },
  {
    id: 1,
    title: 'Microservices Infrastructure (demo)',
    desc: 'Full kubernetes architecture with nodejs. Communicate with NATS streaming server.',
    tech: 'Docker, Kubernetes, Nodejs & Next',
    timestamps: '2022',
    image: require('../../../assets/docker.png'),
  },
  {
    id: 2,
    title: 'waveSounds',
    desc: 'WaveSounds is a digital music application that gives you access to millions of songs and other content from creators all over the world.',
    tech: 'React Native & Nodejs',
    timestamps: 'current',
    image: require('../../../assets/waveSounds.jpg'),
  },
];

const ProjectsList = () => {
  return (
    <div className={classes['projects-list']}>
      {list.map(({ id, title, desc, tech, timestamps, image }) => {
        return (
          <div className={classes['list-item']} key={id}>
            <div>
              <div className={classes['img-wrapper']}>
                <img src={image} alt={'IMG'} />
              </div>
              <p>{title}</p>
              <small>{desc}</small>
            </div>
            <div className={classes.tag}>
              <small>Main Tech: {tech}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsList;
