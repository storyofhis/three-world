import React from "react";
import { angleToRadians } from "../../utils/angle";
import { PerspectiveCamera, OrbitControls, Environment, useTexture, Plane } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute, LinearEncoding, Mesh, PointLight, PointLightHelper, Vector2 } from "three";

// import { useControls } from "leva";

// const texture = useTexture({
//   map: "/texture/grass.jpeg",
//   displacementMap: "/texture/grass.jpeg",
//   aoMap: "/texture/grass.jpeg",
//   roughnessMap: "/texture/grass.jpeg",
//   metalnessMap: "/texture/grass.jpeg",
//   normalMap: "/texture/grass.jpeg",
//   alphaMap: "/texture/grass.jpeg",
// });

const Floor = () => {
  //   let url = "/texture/grass.jpeg";
  let texture = useLoader(TextureLoader, "texture/grass.jpeg");
  //   const mesh = useRef(null);
  //   useEffect(() => {
  //     mesh.current.geometry.setAttribute("uv2", new BufferAttribute(mesh.current.geometry.attributes.uv.array, 2));
  //   });
  return (
    <>
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshPhongMaterial map={texture} metalness={1} roughness={1} aoMapIntensity={1} displacementScale={1} transparent metalnessMap={null} normalScale={new Vector2(1, 1)} />
      </mesh>
    </>
  );
};

export default Floor;
