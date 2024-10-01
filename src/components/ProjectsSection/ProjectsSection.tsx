import { useState } from 'react';
import Emulator from '../Emulator/Emulator';
import ProjectsHeader from './ProjectsHeader/ProjectsHeader';
import classes from './ProjectsSection.module.css';
import ItemSection from './ItemSection/ItemSection';
import ItemDetails from './ItemDetails/ItemDetails';
import { motion } from 'framer-motion';
import { isAndroid } from 'react-device-detect';
import { useInView } from 'react-intersection-observer';

const list = [
  {
    id: 0,
    title: 'AInvesting',
    desc: 'Ainvesting is one of the major global providers of CFDs (Contracts for Difference) trading services, delivering quotes and rates on forex, shares, commodities, cryptocurrencies and indices with the possibility to trade underlying assets on its cutting-edge powerful trading platform.',
    about:
      'Together with my team, we built from the ground up a new platform for Crypto CFDs trading that provides real-time market data with advanced trading tools. available on App Store / Play Store – Ainvesting (Australia) / 8Invest (Europe) A real-time application that requires accurate optimization performance, including authentication process, full and customized navigation, Push notification, RTL support (multi language app), upload files, sending emails, and Reanimated effects. Built from the ground up over one year with me as the main developer for the project.',
    tech: 'React Native CLI',
    image: require('../../assets/ainvesting.jpg'),
    demo: null,
    repo: null,
    url: {
      google:
        'https://play.google.com/store/apps/details?id=com.uptrend.ainvesting',
      apple: 'https://apps.apple.com/us/app/xtrade-online-trading/id864027750',
    },
  },
  {
    id: 1,
    title: 'הפניקס - ביטוח רכב',
    desc: 'With this modern app any insurance can now get access to all of the phoenix services effortlessly.',
    about:
      'The Phoenix Carinsurance app allows users to easily purchase and manage their car insurance policies. It features push notifications to remind users of upcoming renewals, full Firebase integration for real-time updates, and secure biometric authentication for a smooth login process. The app also incorporates fluid animations using Reanimated for an enhanced user experience. Available on both the App Store and Play Store, it offers a seamless and modern insurance solution.',
    tech: 'React Native, Microsoft AppCenter, Firebase',
    image: require('../../assets/carinsurance.jpeg'),
    demo: null,
    repo: null,
    url: {
      google:
        'https://play.google.com/store/apps/details?id=com.phoenix.carinsurance',
      apple:
        'https://apps.apple.com/us/app/%D7%94%D7%A4%D7%A0%D7%99%D7%A7%D7%A1-%D7%91%D7%99%D7%98%D7%95%D7%97-%D7%A8%D7%9B%D7%91/id1644857645',
    },
  },
  {
    id: 2,
    title: 'waveSounds',
    desc: 'WaveSounds is a digital music application that gives you access to millions of songs and other content from creators all over the world.',
    about:
      'This Fullstack (BETA) project is powered by a Node.js server on the backend, handling real-time requests and data management, while the frontend is built with React Native, offering a smooth, mobile-optimized experience. WaveSounds supports seamless music streaming, personalized playlists, and discovery of new music. The app is currently available only on the Play Store, providing users with a rich, interactive music experience.',
    tech: 'React Native, Nodejs, Redis',
    image: require('../../assets/wavesounds.png'),
    demo: null,
    repo: 'https://github.com/idoAdar/ReactNative-TypeScript-waveSounds',
    url: {
      google:
        'https://play.google.com/store/apps/details?id=com.wavesounds&hl=us&pli=1',
      apple: null,
    },
  },
  {
    id: 3,
    title: 'Smart Travel',
    desc: 'SmartTravel is a travel insurance app that allows users to easily purchase travel insurance and access live video consultations with doctors via real-time streaming.',
    about:
      'The app features push notifications for important updates, secure biometric login, and full navigation for a seamless user experience. It also incorporates fluid animations with Reanimated for smooth transitions. SmartTravel ensures users stay covered and connected during their travels with all the essential services in one place.',
    tech: 'React Native, Firebase',
    image: require('../../assets/smarttravel-icon.jpeg'),
    demo: null,
    repo: null,
    url: {
      google:
        'https://play.google.com/store/apps/details?id=com.phonix.smarttravel&hl=us',
      apple:
        'https://apps.apple.com/us/app/smart-travel-%D7%94%D7%A4%D7%A0%D7%99%D7%A7%D7%A1/id1589611234',
    },
  },
  {
    id: 4,
    title: 'roadRecorder',
    desc: 'RoadRecorder" is a GPS-based application that tracks user location in real-time, including showing user directions with Google Maps. The idea is to continuously monitors movement even when the app is in the background for providing accurate travel paths, making it ideal for navigation, trip logging, or safety monitoring.',
    about:
      'For supporting the app I created a Node.js server that receives GPS coordinates from a mobile device, analyzes the data, and returns detailed insights such as total distance traveled (km) and average speed. Built with Express for handling requests, Redis for caching, and MongoDB for storing trip data.',
    tech: 'React Native, NodeJS, Redis',
    image: require('../../assets/roadrecorder.jpeg'),
    demo: null,
    repo: null,
    url: {
      google: null,
      apple: null,
    },
  },
];

const ProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const [currentProject, setCurrentProject] = useState(list[0]);

  const updateState = (id: number) => {
    setCurrentProject(list[id]);
  };

  const animation = !isAndroid
    ? {
        opacity: inView ? 1 : 0,
        y: inView ? 0 : -200,
        transition: {
          duration: 1,
          ease: 'easeInOut',
        },
      }
    : {};

  return (
    <div id={'Experience'} className={classes['projects-main']}>
      <ProjectsHeader />
      <motion.div
        className={classes['collection-grid']}
        initial={{ opacity: !isAndroid ? 0 : 1 }}
        animate={animation}
        ref={ref}
      >
        <div className={classes['projects-nav']}>
          {list.map(({ id, title, image }) => (
            <ItemSection
              key={id}
              title={title}
              image={image}
              updateState={updateState.bind(this, id)}
            />
          ))}
        </div>
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ItemDetails {...currentProject} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
