import ProjectsItem from '../ProjectsItem/ProjectsItem';
import classes from './ProjectsList.module.css';
import { useInView } from 'react-intersection-observer';
import { isBrowser } from 'react-device-detect';
import { motion } from 'framer-motion';

const list = [
  {
    id: 0,
    title: 'Ainvesting',
    desc: 'Ainvesting is a social trading App for Crypto CFDs trading that provies real-time market data and advanced trading tools. (available on App Store / Play Store).',
    tech: 'React Native CLI',
    timestamps: 'April 2023',
    image: require('../../../assets/ainvesting.jpg'),
    repo: null,
    url: 'https://play.google.com/store/apps/details?id=com.uptrend.ainvesting&hl=us',
  },
  {
    id: 1,
    title: 'Microservices Infrastructure (demo)',
    desc: 'Full kubernetes architecture with nodejs. Communicate with NATS streaming server.',
    tech: 'Docker, Kubernetes, Nodejs & Next',
    timestamps: '2022',
    image: require('../../../assets/docker_kubernetes.png'),
    repo: 'https://github.com/idoAdar/Microservices-Nodejs-Nextjs',
    url: null,
  },
  {
    id: 2,
    title: 'waveSounds',
    desc: 'WaveSounds is a digital music application that gives you access to millions of songs and other content from creators all over the world.',
    tech: 'React Native & Nodejs',
    timestamps: 'current',
    image: require('../../../assets/waveSounds.jpg'),
    repo: 'https://github.com/idoAdar/ReactNative-TypeScript-waveSounds',
    url: 'https://play.google.com/store/apps/details?id=com.wavesounds&hl=us&pli=1',
  },
];

const ProjectsList = () => {
  const navigate = (uri: any) => {
    if (uri) {
      window.location.href = uri;
    }
  };

  const [ref, inView] = useInView({ triggerOnce: true });

  const animation = isBrowser
    ? {
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 100,
        transition: {
          duration: 1,
          ease: 'easeInOut',
        },
      }
    : {};

  return (
    <div className={classes['projects-list']}>
      <motion.div
        className={classes['layout-list']}
        initial={{ opacity: isBrowser ? 0 : 1 }}
        animate={animation}
        ref={ref}
      >
        {list.map(({ id, title, desc, tech, url, repo, image }) => {
          return (
            <ProjectsItem
              key={id}
              id={id}
              title={title}
              desc={desc}
              tech={tech}
              image={image}
              repo={repo}
              url={url}
              repoNavigate={navigate}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProjectsList;
