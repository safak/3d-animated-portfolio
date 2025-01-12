import { useGLTF } from "@react-three/drei";

export function MugModel(props) {
  const { nodes, materials } = useGLTF("/mugModel.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Coffee_Coup_0.geometry}
          material={materials.Texture}
          position={[0.4, -0.148, 0.221]}
          rotation={[0, 0, -0.852]}
        />
        <mesh
          geometry={nodes.Lid_0.geometry}
          material={materials.material}
          position={[0.4, -0.148, 6.722]}
          rotation={[0, 0, -0.389]}
          scale={[3.404, 3.404, 0.186]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mugModel.glb");
