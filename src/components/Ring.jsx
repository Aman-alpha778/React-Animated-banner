import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Ring() {
    const tex = useTexture("./images/main.png");

    const meshRef = useRef();
    const groupRef = useRef();


    const targetScale = new THREE.Vector3(0.5, 0.3, 0.5);

    useFrame((state, delta) => {


        if (!meshRef.current || !groupRef.current) return;


        meshRef.current.rotation.y += 0.3 * delta;


        groupRef.current.scale.lerp(targetScale, 0.03);
    });

    return (
        <group
            ref={groupRef}
            scale={[0.05, 0.03, 0.05]}
        >
            <mesh ref={meshRef} >
                <cylinderGeometry args={[4, 4, 4, 60, 60, true]} />
                <meshStandardMaterial
                    map={tex}
                    transparent
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}