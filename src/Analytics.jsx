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

    const cameraPosition = new THREE.Vector3(
      -2.0129043553679864,
      3.3695834864481564 - 0.5,
      -0.7904034965711544 + 2
    );
    bounds
      .refresh()
      .moveTo(cameraPosition)
      .lookAt({
        target: [
          ref.current.position.x,
          ref.current.position.y,
          ref.current.position.z - 1,
        ],
      });
  };

  const handleResetView = (event) => {
    event.stopPropagation();
    console.log(event.camera);
    const resetPosition = new THREE.Vector3(
      -5.745691279976633,
      1.2191882466552388,
      4.710918244500102
    );
    bounds
      .refresh()
      .moveTo(resetPosition)
      .lookAt({ target: [0, 0, 0] });
  };
  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.985, 0.936, 3.929]}
        onClick={handleClick}
        onPointerEnter={() => setShiny(true)}
        onPointerLeave={() => setShiny(false)}
        ref={ref}
        onContextMenu={handleResetView}
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
