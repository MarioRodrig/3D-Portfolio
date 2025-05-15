import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei"; // Import Sphere from drei

const Test3d = () => {
  return (
    <section style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Canvas>
        <Sphere args={[1, 100, 200]} scale={2}> {/* Use Sphere from @react-three/drei */}
          <MeshDistortMaterial
            color="#DB8B9B"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
        {/* Lights */}
        <ambientLight intensity={2} />
        <directionalLight color="#DB8B9B" position={[1, 2, 3]} />
        
      </Canvas>
    </section>
  );
};

export default Test3d;
