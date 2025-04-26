import React, { useEffect, useRef, useState } from "react";
import { useBounds, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import * as THREE from "three";

export function CurrentQuests(props) {
  const { nodes, materials } = useGLTF("/currentQuests.glb");
  const [shiny, setShiny] = useState(false);

  const ref = useRef(null);
  const bounds = useBounds();

  const handleClick = (event) => {
    event.stopPropagation();
    bounds.refresh(ref.current).clip().fit();
  };

  // console.log(materials);

  return (
    <group {...props} dispose={null}>
      <group
        position={[4.574, 0.375, -5.053]}
        onClick={handleClick}
        onPointerEnter={() => setShiny(true)}
        onPointerLeave={() => setShiny(false)}
        ref={ref}
        // onPointerMissed={handleClickAway}
      >
        <Select enabled={shiny}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={
              shiny
                ? new THREE.MeshBasicMaterial({ color: "red" })
                : materials["Metal.004"]
            }
            // material-wireframe={shiny}
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
            // material-wireframe={shiny}
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
            // material-wireframe={shiny}
          />
        </Select>
      </group>
    </group>
  );
}

useGLTF.preload("/currentQuests.glb");
