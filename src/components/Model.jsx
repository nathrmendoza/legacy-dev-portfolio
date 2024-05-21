import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber';

const Model = () => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, "./assets/three/astro.glb");

    // Rotate per frame
    useFrame((state, delta) => {
      ref.current.rotation.y = ref.current.rotation.y -= delta / 4;
    });
    
    return (
      <>
        <group scale={5.5} position={[0,0,0]} rotation={[-0.2,1,0.15]}>
            <primitive ref={ref}  object={gltf.scene} />
        </group>
      </>
    )
}

export default Model