import React from "react";
import { PerspectiveCamera, OrbitControls, Environment, useTexture, Plane } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle";
const Camera = ({ orbitControls }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControls} autoRotate={true} auto minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />
    </>
  );
};

export default Camera;
