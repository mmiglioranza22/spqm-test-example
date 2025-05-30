import React, { useRef, useState } from "react";
import { useBounds, useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import * as THREE from "three";
import { useRouter } from "next/navigation";

export function QuestsBoard(props) {
  const { nodes, materials } = useGLTF("/questBoard.glb");
  const [shiny, setShiny] = useState(false);

  const ref = useRef(null);
  const bounds = useBounds();
  const router = useRouter();

  const handleClick = (event) => {
    event.stopPropagation();
    const cameraPosition = new THREE.Vector3(-2.5, 1.5, -1.5);
    bounds
      .refresh(ref.current)
      .moveTo(cameraPosition)
      .lookAt({
        target: [
          ref.current.position.x - 0.1,
          ref.current.position.y + 1,
          ref.current.position.z,
        ],
      });
    router.push("/quests/123");
  };
  const handleResetView = (event) => {
    event.stopPropagation();
    console.log(event.camera);
    const resetPosition = new THREE.Vector3(
      -6.169008400272004 - 0.05,
      2.3222183721680523 - 0.5,
      -3.4572097476432555
    );
    bounds
      .refresh()
      .moveTo(resetPosition)
      .lookAt({ target: [0, 1, 0] });
  };
  return (
    <group {...props} dispose={null}>
      <group
        position={[-2.309, 0.375, -3.678]}
        onPointerEnter={() => setShiny(true)}
        onPointerLeave={() => setShiny(false)}
        onClick={handleClick}
        onContextMenu={handleResetView}
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
