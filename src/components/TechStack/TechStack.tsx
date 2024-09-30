import classes from './TechStack.module.css';

const TechStack = () => {
  const techMap = [
    {
      id: 4,
      title: 'JavaScript / TypeScript',
      img: require('../../assets/typescript.png'),
    },
    {
      id: 0,
      title: 'React Native / React',
      img: require('../../assets/react.png'),
    },
    {
      id: 1,
      title: 'NodeJS',
      img: require('../../assets/nodejs.png'),
    },
    {
      id: 2,
      title: 'MongoDB',
      img: require('../../assets/mongo.png'),
    },
    {
      id: 3,
      title: 'SQL',
      img: require('../../assets/sql.png'),
    },
    {
      id: 5,
      title: 'Docker',
      img: require('../../assets/docker.png'),
    },
    {
      id: 6,
      title: 'Kubernetes',
      img: require('../../assets/kubernetes.png'),
    },
    {
      id: 7,
      title: 'Python',
      img: require('../../assets/python.png'),
    },
  ];

  return (
    <div className={classes.grid}>
      {techMap.map(({ id, title, img }) => (
        <div key={id} className={classes.hexagon}>
          <span>
            <img src={img} />
            <small>{title}</small>
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
