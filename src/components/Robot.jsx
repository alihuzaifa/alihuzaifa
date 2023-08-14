import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const RobotModel = () => {
    const { scene } = useGLTF("/robot_playground.glb");
    useFrame(({ clock }) => {
      scene.rotation.y = clock.getElapsedTime() * 0.3;
    });
  return <primitive object={scene} position={[0, -1, 0]} />;
};

const Robot = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-2, 1, 4]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RobotModel />
          <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Robot;
