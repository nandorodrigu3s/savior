import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, ThreeElements } from '@react-three/fiber/native';
import { BaseTheme } from '@assets/theme/app-theme';

interface ConeProps {
  color?: string;
}
export const Cone = (props: ThreeElements['mesh'] & ConeProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => (ref.current.rotation.z = -1.6));
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh {...props} ref={ref}>
      <coneGeometry args={[0.7, 1, 10]} />
      <meshStandardMaterial color={props.color ?? BaseTheme.colors.primary} />
    </mesh>
  );
};
