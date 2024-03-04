import ProjectsItem from "../ProjectsItem/ProjectsItem";
import classes from "./ProjectsList.module.css";
import { useInView } from "react-intersection-observer";
import { isAndroid } from "react-device-detect";
import { motion } from "framer-motion";

const list = [
  {
    id: 0,
    title: "AInvesting",
    desc: "AInvesting is a social trading App for Crypto CFDs trading that provies real-time market data and advanced trading tools. (available on App Store / Play Store).",
    tech: "React Native CLI",
    image: require("../../../assets/ainvesting.jpg"),
    repo: null,
    url: "https://play.google.com/store/apps/details?id=com.uptrend.ainvesting",
  },
  {
    id: 1,
    title: "הפניקס - ביטוח רכב",
    desc: 'The new application of "The Phoenix" company. With this modern app any insurance can now get access to all of the phoenix services effortlessly.',
    tech: "React Native, Microsoft AppCenter",
    image: require("../../../assets/carinsurance.png"),
    repo: null,
    url: "https://play.google.com/store/apps/details?id=com.phoenix.carinsurance",
  },
  {
    id: 2,
    title: "waveSounds",
    desc: "WaveSounds is a digital music application that gives you access to millions of songs and other content from creators all over the world.",
    tech: "React Native & Nodejs",
    image: require("../../../assets/wavesounds.png"),
    repo: "https://github.com/idoAdar/ReactNative-TypeScript-waveSounds",
    url: "https://play.google.com/store/apps/details?id=com.wavesounds&hl=us&pli=1",
  },
];

const ProjectsList = () => {
  const navigate = (uri: any) => {
    if (uri) {
      window.location.href = uri;
    }
  };

  const [ref, inView] = useInView({ triggerOnce: true });

  const animation = !isAndroid
    ? {
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 100,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }
    : {};

  return (
    <div className={classes["projects-list"]}>
      <motion.div
        className={classes["layout-list"]}
        initial={{ opacity: !isAndroid ? 0 : 1 }}
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
