/**
 * ThreeScene.jsx
 * Isolated Three.js canvas — loaded lazily so WebGL failures
 * don't crash the parent React tree.
 */
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, OrbitControls, Stars, Float, Torus } from '@react-three/drei'

function AnimatedSphere() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15
      ref.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={ref} args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#6366f1"
          distort={0.55}
          speed={2.5}
          roughness={0.1}
          metalness={0.6}
        />
      </Sphere>
    </Float>
  )
}

function Ring1() {
  const ref = useRef()
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.3
      ref.current.rotation.z = s.clock.elapsedTime * 0.2
    }
  })
  return (
    <Torus ref={ref} args={[2.4, 0.04, 16, 100]}>
      <meshBasicMaterial color="#a78bfa" transparent opacity={0.4} />
    </Torus>
  )
}

function Ring2() {
  const ref = useRef()
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.25
      ref.current.rotation.x = Math.PI / 3
    }
  })
  return (
    <Torus ref={ref} args={[3.1, 0.025, 16, 100]}>
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.25} />
    </Torus>
  )
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#818cf8" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#a78bfa" />
      <pointLight position={[0, 10, 0]} intensity={0.4} color="#22d3ee" />
      <Stars radius={80} depth={50} count={3000} factor={3} saturation={0.5} fade speed={1} />
      <AnimatedSphere />
      <Ring1 />
      <Ring2 />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  )
}
