import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader'
const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight position={[-20, 50, 10]} angle={0.12} intensity={1} castShadow shadow-mapSize={1024} penumbra={1} />
      <primitive object={computer.scene}
        scale={isMobile?0.38:0.75} position={isMobile?[0,-2.1,-0.8]:[-0.9, -3.25, -1.5]}
        rotation={[-0.0, -0.0, -0.0]}
      />
    </mesh>)
}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:700px)')
  setIsMobile(mediaQuery.matches);
  const handelMediaQueryChange = (event) =>{
    setIsMobile(event.matches);
  }
  mediaQuery.addEventListener('change', handelMediaQueryChange);
  return()=>{
    mediaQuery.removeEventListener('change', handelMediaQueryChange)
  }
  },[])
  return ( 
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Computers  isMobile={isMobile}/>
      </Suspense>
      <Preload all />


    </Canvas >
  )
}



export default ComputersCanvas;