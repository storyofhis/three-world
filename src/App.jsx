import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Three from "./component/three";
import "./App.css";

function App() {
  return (
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </Canvas>
  );
}

export default App;
