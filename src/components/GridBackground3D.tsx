
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const GridLines = () => {
  const gridRef = useRef<THREE.Group>(null);
  
  // Create grid lines
  const gridLines = useMemo(() => {
    const lines = [];
    const size = 30;
    const divisions = 30;
    const step = size / divisions;
    const halfSize = size / 2;

    // Create horizontal lines
    for (let i = 0; i <= divisions; i++) {
      const pos = (i * step) - halfSize;
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-halfSize, 0, pos),
        new THREE.Vector3(halfSize, 0, pos)
      ]);
      const line = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({ 
          color: 0xffffff,
          transparent: true,
          opacity: 0.1 + (1 - Math.abs(pos) / halfSize) * 0.1 // Lines fade out toward edges
        })
      );
      lines.push(line);
    }

    // Create vertical lines
    for (let i = 0; i <= divisions; i++) {
      const pos = (i * step) - halfSize;
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(pos, 0, -halfSize),
        new THREE.Vector3(pos, 0, halfSize)
      ]);
      const line = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({ 
          color: 0xffffff,
          transparent: true,
          opacity: 0.1 + (1 - Math.abs(pos) / halfSize) * 0.1 // Lines fade out toward edges
        })
      );
      lines.push(line);
    }

    return lines;
  }, []);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      // Gentle rotation effect
      gridRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1 - 0.3;
      gridRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.05) * 0.05;
      
      // Subtle scaling effect
      const scale = 1 + Math.sin(clock.getElapsedTime() * 0.2) * 0.03;
      gridRef.current.scale.set(scale, 1, scale);
    }
  });

  return (
    <group ref={gridRef} rotation={[-0.3, 0, 0]}>
      {gridLines.map((line, index) => (
        <primitive key={index} object={line} />
      ))}
    </group>
  );
};

const GridBackground3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
        }}
      >
        <fog attach="fog" color="#000000" near={10} far={40} />
        <GridLines />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default GridBackground3D;
