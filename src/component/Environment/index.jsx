import React from "react";
import { PerspectiveCamera, OrbitControls, Environment, useTexture, Plane } from "@react-three/drei";
const Env = () => {
  return (
    <Environment>
      <mesh>
        <sphereGeometry args={[50, 100, 100]} />
        <meshBasicMaterial side={THREE.BackSide} color="#2266cc" />
      </mesh>
    </Environment>
  );
};

export default Env;
