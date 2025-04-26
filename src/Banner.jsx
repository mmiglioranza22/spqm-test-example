import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Banner(props) {
  const { nodes, materials } = useGLTF("/banner.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Banner001.geometry}
        material={materials.Crimson}
        position={[7.345, 1.902, 0.19]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
    </group>
  );
}

useGLTF.preload("/banner.glb");
