

import React, { useRef } from "react";
import {useGLTF} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export  default function Sortiq(props) {
  const { nodes, materials } = useGLTF('/3dobjects/sortiq-transformed.glb')



    let sortiq=useRef(null);

    useFrame((state,delta)=>{
        sortiq.current.rotation.y+=0.5 * delta;

    });


    const groupRef = useRef();

    const targetScale = new THREE.Vector3(4, 1, 4);


    useFrame((state, delta) => {


        if (!sortiq.current || !groupRef.current) return;





        groupRef.current.scale.lerp(targetScale, 0.03);
    });



    // let rotate=useRef(null)
    // useFrame((state,delta)=>{
    //     rotate.current.rotation.y+= 2* delta;
    //
    // });
    //
    // let rotate2=useRef(null);
    // useFrame((state,delta)=>{
    //     rotate2.current.rotation.y += 2 *delta;
    // })
    // let tex=useTexture("./images/main.png");

  return(


    <group   ref={sortiq}   {...props} dispose={null} >

        {/*<mesh  ref={rotate}  scale={[0.8,0.3, 0.8]}  position={[0,3,0]} rotation={[3,1.7,3]}>*/}

        {/*    <cylinderGeometry  args={[4,4,4,60,10,true]} />*/}
        {/*    <meshStandardMaterial  map={tex} transparent side={THREE.DoubleSide}/>*/}

        {/*</mesh>*/}
        {/*<mesh  ref={rotate2}  scale={[0.9,0.3, 0.9]}  position={[0,3,0]} rotation={[1,1.7,-6]}>*/}

        {/*    <cylinderGeometry  args={[4,4,4,60,10,true]} />*/}
        {/*    <meshStandardMaterial  map={tex} transparent side={THREE.DoubleSide}/>*/}

        {/*</mesh>*/}

        <group    ref={groupRef}   position={[0, -4.038, 0.698]} rotation={[-1.573, 0.003, 0]} scale={[0.05, 0.03, 0.05] }>

        <mesh  geometry={nodes.Plane001_1.geometry} material={materials.base} />
        <mesh   geometry={nodes.Plane001_2.geometry} material={materials.blue}  />

      </group>

    </group>


  )
}

useGLTF.preload('/3dobjects/sortiq-transformed.glb')
