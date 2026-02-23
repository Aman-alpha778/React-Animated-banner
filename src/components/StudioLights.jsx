import React from 'react'
import {Environment, Lightformer, SpotLight} from "@react-three/drei";

const StudioLights = () => {
    return (
         <group name="lights" >
             <Environment  resolution={256}>

                 <group>
                     <Lightformer
                         form="rect"
                         intensity={2}
                         position={[2,-0,10]}
                         scale={7}
                         rotation-y={Math.PI/2}


                     />

                     <Lightformer
                         form="rect"
                         intensity={2}
                         position={[-1,1,-2]}
                         scale={5}
                         rotation-y={Math.PI/2}


                     />
                 </group>

             </Environment>

             <spotLight
                  position={[2,10,5]}
                  angle={0.15}
                  decay={0}
                  intensity={Math.PI* 1.5}

             />

             <spotLight
                 position={[10,-25,10]}
                 angle={0.15}
                 decay={0}
                 intensity={Math.PI * 1.5}

             />

             <spotLight
                 position={[0,15,5]}
                 angle={0.15}
                 decay={0.5}
                 intensity={Math.PI * 1.2}

             />


         </group>
    )
}
export default StudioLights
