// Loader.jsx
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <span className="canvas-load"></span>
      <p style={{ fontSize: 18, color: "#f7f5f5ff", fontWeight: 180, marginTop: 40 }}>
        {progress.toFixed(2)}% loaded
      </p>
    </Html>
  );
};

export default CanvasLoader;