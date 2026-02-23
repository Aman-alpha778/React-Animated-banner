
import React from 'react'
import {useThree} from "@react-three/fiber";
import Sortiq from "./models/Sortiq.jsx";
import Ring from "./Ring.jsx";
function ResponsiveModels() {
    const { size } = useThree();   // ✅ THIS IS OK

    const isMobile = size.width < 768;

    return (
        <>
            <Ring
                position={isMobile ? [-1.2, 0, 0] : [-3, 0, 0]}
                scale={isMobile ? 0.25 : 0.5}
            />

            <Sortiq
                position={isMobile ? [1.2, -1.4, 0] : [3, -1.8, 0]}
                scale={isMobile ? 0.25 : 0.5}
                rotation={[0, Math.PI, 0]}
            />
        </>
    );
}

export default ResponsiveModels
