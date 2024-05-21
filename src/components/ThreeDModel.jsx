import { Suspense } from 'react'
import styled from "styled-components";

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

import AsciiRenderer from '../utils/AsciiRenderer';
import Model from './Model'
import UILoader from './Loader';

const ThreeContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto 24px;
  padding: 0 16px;
`;

const ThreeDContainer = () => {

    return (
        <ThreeContainer className="threejs-container">
            <Suspense fallback={<UILoader/>}>
            <Canvas orthographic camera={{zoom: 50, position: [0,0,100]}}>
                <color attach="background" args={["black"]} />
                <Model/>
                <Environment preset="sunset" />
                <OrbitControls enableDamping={true} enablePan={false} enableZoom={false} />
                <AsciiRenderer fgColor="#fff" bgColor="#202023" />
            </Canvas>
            </Suspense>
        </ThreeContainer>
    )
    
}

export default ThreeDContainer