import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import classes from './EducationSection.module.css';

const list = [
  {
    id: 0,
    name: 'Self-taught Developer',
    desc: `As a self-taught dev, I've taken charge of my education and progress as a developer. For that specific reason, I've found myself completing dozens of courses across all the main platforms such as Udmy, Academind, DevMountain, and much more. Also, I'm doing my best to keep updated with all the new technologies that come around.`,
    date: 'Anytime',
  },
  {
    id: 1,
    name: 'Attorney at Law, Israel Bar Association, Jerusalem',
    desc: `Following my LL. B Bachelor in Law degree, I completed my certification as a member of the Israel bar association`,
    date: 'September 2018 — December 2018',
  },
  {
    id: 2,
    name: 'LL. B Bachelor in Law',
    desc: 'College of Management Academic Studies',
    date: 'March 2014 — July 2017',
  },
  {
    id: 3,
    name: 'Gishur Neve Zedek Mediation Center',
    desc: 'Alternative dispute resolution',
    date: 'February 2017 — November 2017',
  },
];

const EducationSection = () => {
  return (
    <div id={'Education'} className={classes['education-main']}>
      <div className={classes.experience}>
        <div>
          <h1>My Education</h1>
        </div>
        <div>
          {list.map(({ id, name, desc, date }) => (
            <div key={id} className={classes['education-item']}>
              <h3>{name}</h3>
              <p>{desc}</p>
              <small>{date}</small>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.floating}>
        <div className={classes['floating-logo']}>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.5}>
              <MeshDistortMaterial
                color={'#211e2d'}
                attach={'material'}
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img src={require('../../assets/tester2.png')} />
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
