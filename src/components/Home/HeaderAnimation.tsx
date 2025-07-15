'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { Edges } from '@react-three/drei';

interface TrailBlock {
  id: number;
  position: Vector3;
  age: number;
  size: number;
  color: string;
  rotationSpeed: { x: number; y: number; z: number };
  cubePositions?: Vector3[];
  cubeColors?: string[];
}

export default function HomepageHeaderAnimation() {
  const [useCombinedCubes, setUseCombinedCubes] = useState(false);
  const [isInInteractionArea, setIsInInteractionArea] = useState(false);
  const interactionAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (interactionAreaRef.current) {
        const rect = interactionAreaRef.current.getBoundingClientRect();
        setIsInInteractionArea(
          event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        );
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="w-full h-full relative">
      <div ref={interactionAreaRef} className="w-full h-full relative">
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true }}
          shadows={false}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 8, 5]} intensity={1.8} />
          <pointLight position={[0, 5, 5]} intensity={1.5} />
          <CursorTrail
            useCombinedCubes={useCombinedCubes}
            isInInteractionArea={isInInteractionArea}
            containerRef={interactionAreaRef}
          />
        </Canvas>
      </div>
    </div>
  );
}

function CursorTrail({
  useCombinedCubes,
  isInInteractionArea,
  containerRef,
}: {
  useCombinedCubes: boolean;
  isInInteractionArea: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const { size, camera } = useThree();
  const [trail, setTrail] = useState<TrailBlock[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const trailIdRef = useRef(0);
  const accumulatedDistance = useRef(0);

  const screenToWorld = (x: number, y: number) => {
    if (!containerRef.current) return new Vector3();
    const rect = containerRef.current.getBoundingClientRect();
    const localX = x - rect.left;
    const localY = y - rect.top;

    const vector = new Vector3(
      (localX / rect.width) * 2 - 1,
      -(localY / rect.height) * 2 + 1,
      0.5
    ).unproject(camera);

    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    return camera.position
      .clone()
      .add(dir.multiplyScalar(distance))
      .add(
        new Vector3(
          (Math.random() - 0.5) * 0.8,
          (Math.random() - 0.5) * 0.8,
          (Math.random() - 0.5) * 0.6
        )
      );
  };

  const generateCubeCombination = (
    basePosition: Vector3,
    baseSize: number
  ): { positions: Vector3[]; colors: string[] } => {
    const numCubes = Math.floor(Math.random() * 5) + 2;
    const cubePositions: Vector3[] = [];
    const cubeColors: string[] = [];
    const colors = ['#1074D5', '#C10648', '#3C2593'];

    cubePositions.push(new Vector3(0, 0, 0));
    cubeColors.push(colors[Math.floor(Math.random() * colors.length)]);

    for (let i = 1; i < numCubes; i++) {
      let newPos: Vector3;
      let valid = false;
      let attempts = 0;

      while (!valid && attempts < 20) {
        const base =
          cubePositions[Math.floor(Math.random() * cubePositions.length)];
        const offset = [
          new Vector3(1, 0, 0),
          new Vector3(-1, 0, 0),
          new Vector3(0, 1, 0),
          new Vector3(0, -1, 0),
          new Vector3(0, 0, 1),
          new Vector3(0, 0, -1),
        ][Math.floor(Math.random() * 6)];
        newPos = base.clone().add(offset);
        valid = !cubePositions.some((pos) => pos.equals(newPos!));
        attempts++;
      }

      cubePositions.push(newPos!);
      cubeColors.push(colors[Math.floor(Math.random() * colors.length)]);
    }

    return { positions: cubePositions, colors: cubeColors };
  };

  const createBlock = (x: number, y: number) => {
    const worldPos = screenToWorld(x, y);
    const colors = ['#1074D5', '#C10648', '#3C2593'];
    const sizes = [0.12, 0.16, 0.2];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const combination = useCombinedCubes
      ? generateCubeCombination(worldPos, size)
      : undefined;

    const newBlock: TrailBlock = {
      id: trailIdRef.current++,
      position: worldPos,
      age: 0,
      size,
      color,
      rotationSpeed: {
        x: (Math.random() - 0.5) * 6,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 4,
      },
      cubePositions: combination?.positions,
      cubeColors: combination?.colors,
    };

    setTrail((prev) => {
      const next = [...prev, newBlock];
      return next.length > 30 ? next.slice(-30) : next;
    });
  };

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const currentX = event.clientX;
      const currentY = event.clientY;
      mousePos.current = { x: currentX, y: currentY };

      if (isInInteractionArea) {
        const dx = currentX - prevMousePos.current.x;
        const dy = currentY - prevMousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        accumulatedDistance.current += distance;

        const threshold = 35;
        const steps = Math.floor(accumulatedDistance.current / threshold);

        for (let i = 0; i < steps; i++) {
          const t = (i + 1) / steps;
          createBlock(
            prevMousePos.current.x + dx * t,
            prevMousePos.current.y + dy * t
          );
        }

        accumulatedDistance.current -= steps * threshold;
      }

      prevMousePos.current = { x: currentX, y: currentY };
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [useCombinedCubes, isInInteractionArea]);

  useFrame((_, delta) => {
    setTrail((prev) =>
      prev
        .map((block) => ({ ...block, age: block.age + delta }))
        .filter((block) => block.age < 3)
    );
  });

  return (
    <>
      {trail.map((block) =>
        useCombinedCubes ? (
          <CombinedCubesBlock key={block.id} block={block} />
        ) : (
          <TrailBlock key={block.id} block={block} />
        )
      )}
    </>
  );
}

function TrailBlock({ block }: { block: TrailBlock }) {
  const meshRef = useRef<any>();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * block.rotationSpeed.x;
      meshRef.current.rotation.y += delta * block.rotationSpeed.y;
      meshRef.current.rotation.z += delta * block.rotationSpeed.z;
      meshRef.current.position.y -= delta * 0.3;
      meshRef.current.position.x += Math.sin(block.age * 2) * delta * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[block.position.x, block.position.y, block.position.z]}
      scale={block.size}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={block.color} flatShading={true} />
      <Edges scale={1.01} color={block.color} />
    </mesh>
  );
}

function CombinedCubesBlock({ block }: { block: TrailBlock }) {
  const groupRef = useRef<any>();
  const cubeSize = block.size * 2.1;

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * block.rotationSpeed.x;
      groupRef.current.rotation.y += delta * block.rotationSpeed.y;
      groupRef.current.rotation.z += delta * block.rotationSpeed.z;
      groupRef.current.position.y -= delta * 0.3;
      groupRef.current.position.x += Math.sin(block.age * 2) * delta * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[block.position.x, block.position.y, block.position.z]}
    >
      {block.cubePositions?.map((pos, i) => (
        <mesh
          key={i}
          position={[pos.x * cubeSize, pos.y * cubeSize, pos.z * cubeSize]}
          scale={cubeSize}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={block.cubeColors?.[i] || block.color}
            flatShading={true}
          />
          <Edges scale={1.01} color={block.cubeColors?.[i] || block.color} />
        </mesh>
      ))}
    </group>
  );
}
