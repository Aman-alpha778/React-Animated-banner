import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";

import Sortiq from "./models/Sortiq.jsx";
import Ring from "./Ring.jsx";
import StudioLights from "./StudioLights.jsx";
import ResponsiveModels from "./ResponsiveModels.jsx";

const Slider = () => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 4, ease: "power3.out" }
        );
    }, []);





    return (
        <section className="w-full flex justify-center mt-6">


            <div className="w-full max-w-[1880px] h-[600px] flex justify-between shadow-2xl bg-[url(/images/final.jpg)] bg-cover bg-center relative overflow-hidden px-10">


                <div className="w-1/3 h-full flex items-center">
                    <Canvas
                        shadows
                        camera={{ position: [3, 1, 5], fov: 42 }}


                    >
                        <StudioLights />
                        <Ring position={[0, 0, 0]} />



                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>


                <div
                    ref={textRef}
                    className="w-1/3 text-white text-center self-start pt-14 z-10"



                >
                    <h1 className="text-5xl font-bold leading-tight">



                        Experience The Future
                    </h1>

                    <p className=" text-white mt-3  z-10">
                        High performance web solutions for modern web experiences.
                    </p>


                </div>


                <div className="w-1/3 h-full flex items-center">
                    <Canvas
                        shadows
                        camera={{ position: [3, 1, 5], fov: 42 }}
                    >


                        <StudioLights />
                        <Sortiq
                            scale={0.5}
                            position={[0, -1.8, 0]}
                            rotation={[0, Math.PI, 0]}
                        />

                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>

            </div>
        </section>
    );
};

export default Slider;