import React, { Suspense, useEffect, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGLTF, OrthographicCamera } from "@react-three/drei";

import "./hero.css";
import backgroundLogo from "../../assets/main-assets/loading-logo-original.svg";

import donutModel from "../../assets/model-assets/DonutVase.glb";
import toppingBowlModel from "../../assets/model-assets/ToppingBowl.glb";
import torusBlushModel from "../../assets/model-assets/TorusBlush.glb";



    const Model = ({model, position, scale}) => {

        const modelRef = useRef();
        const gltf = useGLTF(model);
        useFrame(({ clock }) => {
          modelRef.current.rotation.y = clock.elapsedTime / 2;
        });

        return (
          <mesh position={position} scale={scale}>
            <primitive ref={modelRef} object={gltf.scene} />
          </mesh>
        );
      };



      const Hero = () => {
        return (
          <>
            <div id="hero-container">
              <div id="hero-logo">
                <object
                  id="hero-logo-obj"
                  data={backgroundLogo}
                  type="image/svg+xml"
                  aria-label="main logo"
                />
              </div>
      
              <div id="hero-canvas-container">
                
                <div className="models-container">
             
                <div className="model-column">
                <Canvas camera={{ position: [0, 0, -12] }}>
                  <OrthographicCamera />
                  <ambientLight intensity={0.1} />
                  <Suspense fallback={null}>
                    <Model model={toppingBowlModel} position={[0, -4, -2]} scale={6}/>
                  </Suspense>
                  <Environment preset="sunset" />
                  <OrbitControls enableZoom={false} />
                </Canvas>
                </div>


                <div className="model-column">
                <Canvas camera={{ position: [0, 0, -12] }}>
                  <OrthographicCamera />
                  <ambientLight intensity={0.1} />
                  <Suspense fallback={null}>
                    <Model model={torusBlushModel} position={[0, 0, 0]} scale={10}/>
                  </Suspense>
                  <Environment preset="sunset" />
                  <OrbitControls enableZoom={false} />
                </Canvas>
                </div>


                <div className="model-column">
                <Canvas camera={{ position: [0, 0, -12] }}>
                  <OrthographicCamera />
                  <ambientLight intensity={0.1} />
                  <Suspense fallback={null}>
                    <Model model={donutModel} position={[0, 0, 0]} scale={400} />
                  </Suspense>
                  <Environment preset="sunset" />
                  <OrbitControls enableZoom={false} />
                </Canvas>
                </div>


                <div className="model-column">
                  <div>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat nulla veniam!</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque adipisci dolor incidunt.</p>
                  </div>
                </div>
                    
                    
                    </div>
                
              </div>
              
            </div>
          </>
        );
      };
      
      export default Hero;