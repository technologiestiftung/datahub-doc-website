'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

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

export default function Page() {
  const [useCombinedCubes, setUseCombinedCubes] = useState(true);
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
    <div className="w-full h-[500px] bg-white relative">
      <div
        ref={interactionAreaRef}
        className="w-full h-full relative bg-red-100/20"
      >
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false }}
          shadows={false}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.0} />
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

    const vector = new Vector3();
    vector.set(
      (localX / rect.width) * 2 - 1,
      -(localY / rect.height) * 2 + 1,
      0.5
    );
    vector.unproject(camera);

    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));

    // Slight randomness for more organic look
    // pos.x += (Math.random() - 0.5) * 0.2;
    // pos.y += (Math.random() - 0.5) * 0.2;
    // pos.z += (Math.random() - 0.5) * 0.1;

    pos.x += (Math.random() - 0.5) * 0.8;
    pos.y += (Math.random() - 0.5) * 0.8;
    pos.z += (Math.random() - 0.5) * 0.6;

    return pos;
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
      let validPosition = false;
      let newPos: Vector3 | null = null;
      let attempts = 0;

      while (!validPosition && attempts < 20) {
        const attachTo =
          cubePositions[Math.floor(Math.random() * cubePositions.length)];
        const direction = [
          new Vector3(1, 0, 0),
          new Vector3(-1, 0, 0),
          new Vector3(0, 1, 0),
          new Vector3(0, -1, 0),
          new Vector3(0, 0, 1),
          new Vector3(0, 0, -1),
        ][Math.floor(Math.random() * 6)];

        newPos = new Vector3(
          attachTo.x + direction.x,
          attachTo.y + direction.y,
          attachTo.z + direction.z
        );
        validPosition = !cubePositions.some((pos) => pos.equals(newPos!));
        attempts++;
      }

      if (!validPosition) newPos = new Vector3(i, 0, 0); // fallback
      cubePositions.push(newPos!);
      cubeColors.push(colors[Math.floor(Math.random() * colors.length)]);
    }

    return { positions: cubePositions, colors: cubeColors };
  };

  const createBlock = (x: number, y: number) => {
    const worldPos = screenToWorld(x, y);
    const colors = ['#1074D5', '#C10648', '#3C2593'];
    const sizes = [0.1, 0.15, 0.2];
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
        const deltaX = currentX - prevMousePos.current.x;
        const deltaY = currentY - prevMousePos.current.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        accumulatedDistance.current += distance;

        const distanceThreshold = 35;
        const blocksToCreate = Math.floor(
          accumulatedDistance.current / distanceThreshold
        );

        if (blocksToCreate > 0) {
          for (let i = 0; i < blocksToCreate; i++) {
            const progress = (i + 1) / blocksToCreate;
            const interpolatedX = prevMousePos.current.x + deltaX * progress;
            const interpolatedY = prevMousePos.current.y + deltaY * progress;
            createBlock(interpolatedX, interpolatedY);
          }
          accumulatedDistance.current -= blocksToCreate * distanceThreshold;
        }
      }

      prevMousePos.current = { x: currentX, y: currentY };
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [size, camera, useCombinedCubes, isInInteractionArea]);

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
      const opacity = block.age < 2 ? 1 : Math.max(0, 1 - (block.age - 2));
      meshRef.current.material.opacity = opacity;
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
      scale={[block.size, block.size, block.size]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={block.color} transparent opacity={1} />
    </mesh>
  );
}

function CombinedCubesBlock({ block }: { block: TrailBlock }) {
  const groupRef = useRef<any>();
  const cubeSize = block.size * 1.3;

  useFrame((_, delta) => {
    if (groupRef.current) {
      const opacity = block.age < 2 ? 1 : Math.max(0, 1 - (block.age - 2));
      groupRef.current.children.forEach((child: any) => {
        if (child.material) {
          child.material.opacity = opacity;
        }
      });

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
      {block.cubePositions?.map((pos, index) => (
        <mesh
          key={index}
          position={[pos.x * cubeSize, pos.y * cubeSize, pos.z * cubeSize]}
          scale={[cubeSize, cubeSize, cubeSize]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={block.cubeColors?.[index] || block.color}
            transparent
            opacity={1}
          />
        </mesh>
      ))}
    </group>
  );
}
