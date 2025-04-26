import React, { useRef, useState } from "react";
import { useBounds, useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing"; // issue with outline max update depth exceeded
import * as THREE from "three";

export function Analytics(props) {
  const { nodes, materials } = useGLTF("/analytics.glb");
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
        position={[-1.985, 0.936, 3.929]}
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
