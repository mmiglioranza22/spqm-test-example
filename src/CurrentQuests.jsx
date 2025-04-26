import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export function CurrentQuests(props) {
  const { nodes, materials } = useGLTF("/currentQuests.glb");
  const state = useThree((state) => state);
  console.log(state.camera);
  const [shiny, setShiny] = useState(false);

  // const handleHover = (event) => {
  //   state.camera.position.set(1, 2, 4);
  //   console.log(event);
  // };

  console.log(materials);
  return (
    <group {...props} dispose={null}>
      <group
        position={[4.574, 0.375, -5.053]}
        // onClick={handleClick}
        onPointerEnter={() => setShiny(true)}
        onPointerLeave={() => setShiny(false)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={
            shiny
              ? new THREE.MeshBasicMaterial({ color: "red" })
              : materials["Metal.004"]
          }
          material-wireframe={shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={
            shiny
              ? new THREE.MeshBasicMaterial({ color: "red" })
              : materials["Firewood.002"]
          }
          material-wireframe={shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={
            shiny
              ? new THREE.MeshBasicMaterial({ color: "red" })
              : materials["ShinyMetal.001"]
          }
          material-wireframe={shiny}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/currentQuests.glb");
