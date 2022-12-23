import React, { Suspense, useEffect, useRef } from "react";
import Loading from "../../../misc-components/Loading";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { DoubleSide, Group } from "three";

import "../../../../styles/hero-styles/hero.css";
import backgroundLogo from "../../../../assets/main-assets/loading-logo-original.svg";

import donutModel from "../../../../assets/model-assets/DonutVase.glb";
import toppingBowlModel from "../../../../assets/model-assets/ToppingBowl.glb";
import torusBlushModel from "../../../../assets/model-assets/TorusBlush.glb";

const Hero = () => {
    const Models = () => {
        const donutRef = useRef();
        const toppingBowlRef = useRef();
        const torusBlushRef = useRef();

        const DONUT = useGLTF(donutModel);
        const TOPPINGBOWL = useGLTF(toppingBowlModel);
        const TORUSBLUSH = useGLTF(torusBlushModel);

        useFrame(({clock}) => {
            let interval = clock.getElapsedTime();
            donutRef.current.rotation.y = interval / 2;
            donutRef.current.rotation.x = interval / 2;

            toppingBowlRef.current.rotation.y = -interval / 2;


            torusBlushRef.current.rotation.x = interval / 2;
            torusBlushRef.current.rotation.y = interval / 2;
        });

        return (
            <>
                <mesh scale={3} position={[0, 0, 0]}>
                    <primitive ref={donutRef} scale={50} position={[0.8, 1.1, 0]} object={DONUT.scene} />
                    <primitive ref={toppingBowlRef} scale={1} position={[-0.7, -2, 0]} object={TOPPINGBOWL.scene} /> {/*the towering bowl */}
                    <primitive ref={torusBlushRef} scale={1} position={[-0.5, 2, 0]} object={TORUSBLUSH.scene} /> {/*the white bowl */}
                </mesh>
            </>
        )
    }

    return (
        <>
            <div id = "hero-container">
                <div id = "hero-logo">
                    <object id = "hero-logo-obj" data={backgroundLogo} type="image/svg+xml" aria-label="main logo"/>
                </div>
                <div id = "hero-canvas-container">
                    <Canvas camera={{position:[0, 0, -10]}}>
                        <OrthographicCamera />
                        <ambientLight intensity={0.1} />
                        <Models />
                        <Environment preset="sunset" />
                        <OrbitControls enableZoom={true} />
                    </Canvas>
                </div>
            </div>    
        </>
    )
}

export default Hero;