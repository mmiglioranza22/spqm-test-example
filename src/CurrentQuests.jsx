import React, { useEffect, useRef, useState } from "react";
import { useBounds, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import * as THREE from "three";
import { useRouter } from "next/navigation";

export function CurrentQuests(props) {
  const { nodes, materials } = useGLTF("/currentQuests.glb");
  const [shiny, setShiny] = useState(false);
  // next navigation
  const router = useRouter();

  const ref = useRef(null);
  const bounds = useBounds();

  const handleClick = (event) => {
    event.stopPropagation();
    const cameraPosition = new THREE.Vector3(
      4.279669179559201 - 0.5,
      1.8270857672106804 - 0.1,
      -3.885972702430759 + 1
    );

    bounds
      .refresh(ref.current)
      .moveTo(cameraPosition)
      .lookAt({
        target: [
          ref.current.position.x,
          ref.current.position.y,
          ref.current.position.z,
        ],
      });
    router.push("/tracked");
  };

  const handleResetView = (event) => {
    event.stopPropagation();
    console.log(event.camera);
    const resetPosition = new THREE.Vector3(5, 4, 3);
    bounds
      .refresh()
      .moveTo(resetPosition)
      .lookAt({ target: [0, 0, 0] });
  };

  return (
    <group {...props} dispose={null}>
      <group
        position={[2.817, 1.457, -3.345]}
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
