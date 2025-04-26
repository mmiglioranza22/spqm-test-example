import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import * as THREE from "three";

export function Analytics(props) {
  const { nodes, materials } = useGLTF("/analytics.glb");
  const [shiny, setShiny] = useState(false);

  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.985, 0.936, 3.929]}
        onPointerEnter={() => setShiny(true)}
        onPointerLeave={() => setShiny(false)}
      >
        <Select enabled={shiny}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={
              shiny
                ? new THREE.MeshBasicMaterial({ color: "red" })
                : materials["Darkwood.001"]
            }
            // material-wireframe={shiny}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={
              shiny
                ? new THREE.MeshBasicMaterial({ color: "red" })
                : materials.Paper
            }
            // material-wireframe={shiny}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={
              shiny
                ? new THREE.MeshBasicMaterial({ color: "red" })
                : materials.Crimson
            }
            // material-wireframe={shiny}
          />
        </Select>
      </group>
    </group>
  );
}

useGLTF.preload("/analytics.glb");
