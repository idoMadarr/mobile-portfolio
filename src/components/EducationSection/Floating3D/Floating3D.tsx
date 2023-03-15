import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import classes from './Floating3D.module.css';

const Floating3D = () => {
  return (
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
        <img src={require('../../../assets/tester2.png')} />
      </div>
    </div>
  );
};

export default Floating3D;
