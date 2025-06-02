import React, { useRef } from "react";
import { useBounds, useGLTF } from "@react-three/drei";

export function Scene2(props) {
  const { nodes, materials } = useGLTF("/draft_interior.glb");
  const ref = useRef(null);
  const bounds = useBounds();
  // handle focus flag to avoid rotation on clickaway in scene
  const handleClick = (event) => {
    // event.stopPropagation();
    console.log({ event });
  };
  return (
    <group
      {...props}
      dispose={null}
      onClick={handleClick} // eventually handle reset
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.merged.geometry}
        material={nodes.merged.material}
        position={[-1.957, 0.889, 2.02]}
      >
        <meshBasicMaterial map={props.bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/draft_interior.glb");
