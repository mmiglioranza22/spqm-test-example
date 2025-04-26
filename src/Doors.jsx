import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Doors(props) {
  const { nodes, materials } = useGLTF("/entrance_doors.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeftDoor002.geometry}
        material={materials.Log}
        position={[3.692, 1.889, -3.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RightDoor002.geometry}
        material={materials.Log}
        position={[4.39, 1.888, -3.359]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leftHandle.geometry}
        material={materials.Darkmetal}
        position={[3.595, 1.376, -3.324]}
        rotation={[0.522, -1.558, -2.619]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rightHandle.geometry}
        material={materials.Darkmetal}
        position={[4.482, 1.37, -3.324]}
        rotation={[0.522, -1.558, -2.619]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rightHandleBottom.geometry}
        material={materials.Darkmetal}
        position={[4.482, 1.202, -3.278]}
        rotation={[3.135, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leftHandleBottom.geometry}
        material={materials.Darkmetal}
        position={[3.595, 1.201, -3.278]}
        rotation={[3.135, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/entrance_doors.glb");
