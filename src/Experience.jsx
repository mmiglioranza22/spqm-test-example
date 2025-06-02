import { useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Bounds,
  useBounds,
  // useGLTF,
  useTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import { Scene } from "./Scene";
import { QuestsBoard } from "./QuestsBoard";
import { Analytics } from "./Analytics";
import { CurrentQuests } from "./CurrentQuests";

import * as THREE from "three";
// import { Entrance } from "./entrance/Entrance";
// import { Doors } from "./entrance/Doors";
// import { Banner } from "./entrance/Banner";
import { useControls } from "leva";

import {
  Selection,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
import { Scene2 } from "./Scene2";

const homeCameraPosition = new THREE.Vector3(
  6.576581911370812,
  4.797017740746942,
  0.7140519751250116
);

export default function Experience() {
  // const { questBoardCoor, currentQuestsCoor, analyticsCoor } = useControls();

  // useFrame((state, delta) => {});

  // const moveCamera = (event) => {
  //   // event.preventDefault();
  //   event.stopPropagation();
  //   // console.log(event.camera);
  //   // homeCameraPosition;
  // };

  const resetCamera = (event) => {
    // event.preventDefault();
    event.stopPropagation();
    console.log(event);
  };

  // const bakedTexture = useTexture("/baked_night_entrance.jpg");
  // const { nodes } = useGLTF("/merged_entrance.glb");
  const bakedTexture = useTexture("/draft_baked.jpg");

  const interpolateFunc = (t) => 1 - Math.exp(-5 * t) + 0.007 * t; // Matches the default Bounds behavior
  const interpolateFunc1 = (t) => -t * t * t + 2 * t * t; // Start smoothly, finish linearly
  const interpolateFunc2 = (t) => -t * t * t + t * t + t; // Start linearly, finish smoothly

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <OrbitControls makeDefault />
      {/*  */}
      <directionalLight position={[1, 2, 3]} intensity={2} />
      <Environment background files={"./HdrSkySunset007_JPG_2K.jpg"} />
      {/* <ambientLight intensity={1} /> */}

      {/* interior */}
      <Bounds maxDuration={1} interpolateFunc={interpolateFunc2}>
        {/* <Scene
        // onClick={resetCamera}
        /> */}
        <Scene2 bakedTexture={bakedTexture} />

        {/* outline on hover */}
        {/* <Selection> */}
        {/* <EffectComposer multisampling={8} autoClear={false}> */}
        {/* <Outline
              blur
              visibleEdgeColor="white"
              edgeStrength={100}
              width={10000}
            /> */}
        {/* </EffectComposer> */}

        {/* <SelectToZoom> */}
        {/* <Scene onClick={resetCamera} /> */}

        <QuestsBoard />
        <Analytics />
        <CurrentQuests />
        {/* </SelectToZoom> */}
        {/* </Selection> */}
      </Bounds>

      {/* entrance */}
      {/* <Entrance bakedTexture={bakedTexture} />  */}
      {/* <Doors /> */}
      {/* <Banner /> */}
    </>
  );
}
