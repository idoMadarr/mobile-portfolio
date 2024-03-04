import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React3D from "./React3d";

const ThreeDModel = () => {
  return (
    <Canvas style={{ height: 100 }}>
      <ambientLight intensity={0.2} />
      <React3D />
      <OrbitControls
        autoRotate={true}
        enableZoom={false}
        enableRotate={false}
      />
    </Canvas>
  );
};

export default ThreeDModel;
