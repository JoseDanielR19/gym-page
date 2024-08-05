/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function Bodybuilder({ rotation }) {
  const { nodes, materials } = useGLTF("bodybuilder.gltf");
  return (
    <group dispose={null} rotation={rotation}>
      <group scale={0.01} position={[0, 0, 0]}>
        <directionalLight intensity={-1} decay={2} rotation={[-0.506, 0.629, 0.756]} />
        <PerspectiveCamera makeDefault={false} far={100000} near={70} fov={45} position={[0, 0.003, 1227.738]} />
        <mesh
          geometry={nodes["uploads_files_3102046_complete+basemesh+man"].geometry}
          material={nodes["uploads_files_3102046_complete+basemesh+man"].material}
          position={[-136.488, -400.289, -63.79]}
          rotation={[1.567, -0.006, 0.013]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/bodybuilder.gltf");
