import styled, { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'

export const ThreeContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  aspect-ratio: 1 / 1;
`;

const App = () => {

  const Model = () => {
    const gltf = useLoader(GLTFLoader, "./skull/scene.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.4} />
      </>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <ThreeContainer className="threejs-container">
        <Canvas camera={{fov: 75, near: 0.1, far: 10, position: [0,0,1]}}>
          <Suspense fallback={null}>
            <Model/>
            <OrbitControls enableDamping={true} enableZoom={false} />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </ThreeContainer>
    </ThemeProvider>
  )
}
export default App
