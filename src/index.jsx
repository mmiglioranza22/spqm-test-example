import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

import * as THREE from "three";

const homeCameraPosition = new THREE.Vector3(5, 4, 3);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    camera={{
      fov: 65,
      near: 0.1,
      far: 200,
      position: homeCameraPosition,
    }}
  >
    <Experience />
  </Canvas>
);
