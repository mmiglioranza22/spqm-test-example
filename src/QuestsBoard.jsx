import React, { useRef, useState } from "react";
import { useBounds, useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import * as THREE from "three";

export function QuestsBoard(props) {
  const { nodes, materials } = useGLTF("/questBoard.glb");
  const [shiny, setShiny] = useState(false);

  const ref = useRef(null);
  const bounds = useBounds();

  const handleClick = (event) => {
    event.stopPropagation();
    bounds.refresh(ref.current).clip().fit();
  };
  return (
    <group {...props} dispose={null}>
      <group
        position={[-2.309, 0.375, -3.678]}
        onPointerEnter={() => setShiny(true)}
        onPointerLeave={() => setShiny(false)}
        onClick={handleClick}
        ref={ref}
      >
        <Select enabled={shiny}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube132.geometry}
            material={
              shiny
                ? new THREE.MeshBasicMaterial({ color: "red" })
                : materials["Cork.002"]
            }
            // material-wireframe={shiny}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube132_1.geometry}
            material={
              shiny
                ? new THREE.MeshBasicMaterial({ color: "red" })
                : materials["Darkwood.006"]
            }
            // material-wireframe={shiny}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube132_2.geometry}
            material={
              shiny
                ? new THREE.MeshBasicMaterial({ color: "red" })
                : materials["Paper.003"]
            }
            // material-wireframe={shiny}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube132_3.geometry}
            material={
              shiny
                ? new THREE.MeshBasicMaterial({ color: "red" })
                : materials["Paper.004"]
            }
            // material-wireframe={shiny}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube132_4.geometry}
            material={
              shiny
                ? new THREE.MeshBasicMaterial({ color: "red" })
                : materials["Crimson.002"]
            }
            // material-wireframe={shiny}
          />
        </Select>
      </group>
    </group>
  );
}
