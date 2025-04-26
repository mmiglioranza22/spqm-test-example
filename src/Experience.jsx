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
import { Entrance } from "./entrance/Entrance";
import { Doors } from "./entrance/Doors";
import { Banner } from "./entrance/Banner";
import { useControls } from "leva";
import {
  Selection,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";

const homeCameraPosition = new THREE.Vector3(
  6.576581911370812,
  4.797017740746942,
  0.7140519751250116
);

export default function Experience() {
  // const { questBoardCoor, currentQuestsCoor, analyticsCoor } = useControls();

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
  };

  const bakedTexture = useTexture("/baked_night_entrance.jpg");
  const { nodes } = useGLTF("/merged_entrance.glb");

  return (
    <>
      <OrbitControls makeDefault />
      {/*  */}
      <directionalLight position={[1, 2, 3]} intensity={2} />
      <Environment background files={"./HdrSkySunset007_JPG_2K.jpg"} />
      {/* <ambientLight intensity={1} /> */}

      {/* interior */}

      <Scene onClick={resetCamera} />
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            visibleEdgeColor="white"
            edgeStrength={100}
            width={10000}
          />
        </EffectComposer>
        <QuestsBoard onClick={moveCamera} />
        <Analytics onClick={moveCamera} />
        <CurrentQuests onClick={moveCamera} />
      </Selection>

      {/* entrance */}
      {/* <Entrance bakedTexture={bakedTexture} />  */}
      {/* <Doors /> */}
      {/* <Banner /> */}
    </>
  );
}
