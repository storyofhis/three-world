import { angleToRadians } from "../../utils/angle";
import { PerspectiveCamera, OrbitControls, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";

export class ThirdPersonCamera {
  constructor(params) {
    this._params = params;
    thid._camera = camera;
  }
}

export default function Three() {
  // Code to move the camera around 
  const orbitControlsRef = useRef(null);
  useFrame((state, delta, xrFrame, yrFrame) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setAzimuthalAngle((y + 0.5) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  // requestAnimationFrame(() => {});

  // useEffect(() => {
  //   if (!!orbitControlsRef.current) {
  //     console.log(orbitControlsRef.current);
  //   }
  // }, [orbitControlsRef.current]);

  const ballRef = useRef(null)
  useEffect(() => {
    if(!!ballRef.current) {
      console.log(ballRef.current)
      // timeline
      const timeline = gsap.timeline({paused : true})
      
      // [x] axis motion 
      timeline.to(ballRef.current.position, {
        x: 1,
        duration: 2,
        ease: "power2.out"
      })

      // // [y] axis motion
      // timeline.to(ballRef.current.position, {
      //   y: 0.5,
      //   duration: 0.5,
      //   ease: "power2.in"
      // }, "<")
      
      // const coefficient = 0.8
      // for (let i = 1; i <= 4; i++) {
      //   // Going Up
      //   timeline.to(ballRef.current.position, {
      //     y: Math.pow(coefficient, i) * 1.5, 
      //     duration: 0.2,
      //     ease: "power2.out"
      //   }, ">")
        
      //   // Going Down
      //   timeline.to(ballRef.current.position, {
      //     y: 0.5,
      //     duration: 0.2,
      //     ease: "power2.in"
      //   }, ">")
      // }

      // [y] axis motion
      timeline.to(ballRef.current.position, {
        y: 0.5,
        duration: 1,
        ease: "bounce.out"
      }, "<")
      // timeline play
      timeline.play()
    }
    
  }, [ballRef.current])

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControlsRef} autoRotate={true} auto minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />

      {/* Ball */}
      <mesh position={[-2, 1.75, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        {/* <meshPhongMaterial color="#1ea3d8" /> */}
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* Ambient light */}
      <ambientLight args={["#ffffff", 0.25]} />

      {/* SpotLight light */}
      <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />

      {/* Environment */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#2266cc" />
        </mesh>
      </Environment>
    </>
  );
}
