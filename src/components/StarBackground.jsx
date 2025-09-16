import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function StarBackground() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <Canvas className="absolute inset-0 -z-9">
                <Stars
                radius={20}
                depth={50}
                count={12000}
                factor={4}
                saturation={0}
                fade
                />
        </Canvas>
      </div>
    );
};

export default StarBackground;