import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function QuestsBoard(props) {
  const { nodes, materials } = useGLTF("/questBoard.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-2.309, 0.375, -3.678]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube132.geometry}
          material={materials["Cork.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube132_1.geometry}
          material={materials["Darkwood.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube132_2.geometry}
          material={materials["Paper.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube132_3.geometry}
          material={materials["Paper.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube132_4.geometry}
          material={materials["Crimson.002"]}
        />
      </group>
    </group>
  );
}
