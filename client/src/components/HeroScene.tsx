import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// Floating Cube Component
function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[-3, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial
          color="#00d9ff"
          wireframe
          emissive="#00d9ff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Floating Sphere Component
function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[3, 1, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhongMaterial
          color="#a855f7"
          wireframe
          emissive="#a855f7"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

// Floating Ring Component
function FloatingRing() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.z += 0.001;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.8} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, -2, -2]}>
        <torusGeometry args={[1.2, 0.4, 16, 100]} />
        <meshPhongMaterial
          color="#ff006e"
          wireframe
          emissive="#ff006e"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Particle System Component
function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001;
      pointsRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[
            new Float32Array(
              Array.from({ length: 3000 }, () => (Math.random() - 0.5) * 100)
            ),
            3,
          ]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00d9ff"
        size={0.1}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
      />
    </points>
  );
}

// Main Hero Scene
function HeroSceneContent() {
  const { camera } = useThree();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mousePos.x * 5 - camera.position.x) * 0.05;
    camera.position.y += (mousePos.y * 5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={["#0a0e27"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#a855f7" />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <ParticleSystem />
      <FloatingCube />
      <FloatingSphere />
      <FloatingRing />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <HeroSceneContent />
      </Canvas>
    </div>
  );
}
