'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function GlassShard({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.15 * speed + pointer.y * 0.3;
    mesh.current.rotation.y = t * 0.2 * speed + pointer.x * 0.3;
    mesh.current.position.y = position[1] + Math.sin(t * speed) * 0.25;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial
        color="#5EC8F0"
        roughness={0.05}
        transmission={0.9}
        thickness={1.2}
        ior={1.3}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={0.1}
        opacity={0.9}
        transparent
      />
    </mesh>
  );
}

function ParticleField({ count = 260 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const { pointer } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.getElapsedTime();
    points.current.rotation.y = t * 0.03 + pointer.x * 0.15;
    points.current.rotation.x = pointer.y * 0.1;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#0284C7"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, -2, 2]} intensity={0.6} color="#7DD3FC" />

      <GlassShard position={[1.6, 0.4, 0]} scale={1.1} speed={0.6} />
      <GlassShard position={[-1.8, -0.6, -1]} scale={0.6} speed={0.9} />
      <GlassShard position={[0.4, -1.2, 1]} scale={0.4} speed={1.2} />
      <ParticleField />
    </Canvas>
  );
}
