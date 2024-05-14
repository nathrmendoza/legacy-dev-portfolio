import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber';

const Model = () => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, "./wheel/scene.gltf");

    // Rotate per frame
    useFrame((state, delta) => {
      ref.current.rotation.z = ref.current.rotation.z -= delta / 4;
    });
    
    return (
      <>
        <group scale={7} position={[0,0,0]} rotation={[-0.25,-0.4,0]}>
            <primitive ref={ref}  object={gltf.scene} />
        </group>
      </>
    )
}

export default Model