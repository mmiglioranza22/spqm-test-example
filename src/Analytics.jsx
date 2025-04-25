import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Analytics(props) {
  const { nodes, materials } = useGLTF("/analytics.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-1.985, 0.936, 3.929]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Darkwood.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Paper}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.Crimson}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/analytics.glb");
