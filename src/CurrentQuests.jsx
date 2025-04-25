import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CurrentQuests(props) {
  const { nodes, materials } = useGLTF("/currentQuests.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[4.574, 0.375, -5.053]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Metal.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials["Firewood.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials["ShinyMetal.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/currentQuests.glb");
