import { angleToRadians } from "../../utils/angle";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

export default function Three() {
  const orbitControlsRef = useRef(null);

  useFrame((state, delta, xrFrame, yrFrame) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // orbitControlsRef.current.setAzimuthalAngle(-angleToRadians(x * 24));
      // orbitControlsRef.current.update();
    }
  });

  requestAnimationFrame(() => {});

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControlsRef} autoRotate={true} auto />

      {/* Ball */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshLambertMaterial color="#ffffff" />
      </mesh>

      {/* Floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* Ambient light */}
      <ambientLight args={["#ffffff", 1]} />
    </>
  );
}
