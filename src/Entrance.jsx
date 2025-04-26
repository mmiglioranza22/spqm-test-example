import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Entrance(props) {
  const { nodes, materials } = useGLTF("/merged_entrance.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.merged.geometry}
        material={nodes.merged.material}
        position={[-4.042, 1.849, -3.402]}
        rotation={[-3.139, 0.001, -2.336]}
      >
        <meshBasicMaterial map={props.bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/merged_entrance.glb");
