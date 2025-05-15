import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ContactModel } from "./ContactModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ContactModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="forest" intensity={2}>
                    <ContactModel />
                </Stage>
                <PerspectiveCamera makeDefault position={[0, 10, 10]} />
                <OrbitControls enableZoom={false} autoRotate minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 3} />
            </Suspense>
        </Canvas>
    );
};

export default ContactModelContainer;
