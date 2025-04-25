import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Scene } from "./Scene";
import { QuestsBoard } from "./QuestsBoard";
import { Analytics } from "./Analytics";
import { CurrentQuests } from "./CurrentQuests";
import * as THREE from "three";

const homeCameraPosition = new THREE.Vector3(
  6.576581911370812,
  4.797017740746942,
  0.7140519751250116
);

export default function Experience() {
  const cube = useRef();

  useFrame((state, delta) => {});

  const moveCamera = (event) => {
    // event.preventDefault();
    event.stopPropagation();
    console.log(event.camera);
    // homeCameraPosition;
  };

  const resetCamera = (event) => {
    // event.preventDefault();
    event.stopPropagation();
    console.log(event);
    event.camera.pos;
  };

  return (
    <>
      <OrbitControls makeDefault />
      {/*  */}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1} />
      <Scene onClick={resetCamera} />
      <QuestsBoard onClick={moveCamera} />
      <Analytics onClick={moveCamera} />
      <CurrentQuests onClick={moveCamera} />
    </>
  );
}
