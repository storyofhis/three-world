import React from "react";

const Object = ({ ballRef }) => {
  return (
    <mesh position={[-2, 1.75, 0]} castShadow ref={ballRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
    </mesh>
  );
};

export default Object;
