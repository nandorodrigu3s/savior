import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, ThreeElements } from '@react-three/fiber/native';
import { BaseTheme } from '@assets/theme/app-theme';

interface CubeProps {
  color?: string;
}
export const Cube = (props: ThreeElements['mesh'] & CubeProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  useFrame((state, delta) => (ref.current.rotation.y += delta));
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={props.color ?? BaseTheme.colors.primary} />
    </mesh>
  );
};
