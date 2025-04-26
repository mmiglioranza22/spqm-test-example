import { useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useRef } from "react";
import { Scene } from "./Scene";
import { QuestsBoard } from "./QuestsBoard";
import { Analytics } from "./Analytics";
import { CurrentQuests } from "./CurrentQuests";
import * as THREE from "three";
import { Entrance } from "./Entrance";
import { Doors } from "./Doors";
import { Banner } from "./Banner";

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

  const bakedTexture = useTexture("/baked_night_entrance.jpg");
  console.log(bakedTexture);

  const { nodes } = useGLTF("/merged_entrance.glb");
  console.log(nodes);

  return (
    <>
      <OrbitControls makeDefault />
      {/*  */}
      <directionalLight position={[1, 2, 3]} intensity={0.5} />
      {/* <ambientLight intensity={1} /> */}

      {/* interior */}

      <Scene onClick={resetCamera} />
      <QuestsBoard onClick={moveCamera} />
      <Analytics onClick={moveCamera} />
      <CurrentQuests onClick={moveCamera} />

      {/* entrance */}
      <Environment background files={"./HdrSkySunset007_JPG_2K.jpg"} />
      {/* <Entrance bakedTexture={bakedTexture} />  */}
      {/* <Doors /> */}
      {/* <Banner /> */}
    </>
  );
}
