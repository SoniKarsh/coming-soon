import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, Text } from '@react-three/drei'

function App() {
  return (
    <Canvas>
      <pointLight position={[5, 5, 5]} />
      <Text
        scale={[10, 10, 10]}
        color="black"
      >
        Hello world
      </Text>
      <OrbitControls />
      {/* <Stats /> */}
    </Canvas>
  )
}

export default App
