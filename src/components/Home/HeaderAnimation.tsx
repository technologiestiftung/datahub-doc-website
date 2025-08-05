'use client';

import { useEffect, useRef } from 'react';

export default function CanvasCubeTrail({
  parentRef,
}: {
  parentRef: React.RefObject<HTMLDivElement>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<any[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const prevMouse = useRef({ x: 0, y: 0 });
  const accumulatedDistance = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = parentRef.current!.clientWidth);
    let height = (canvas.height = parentRef.current!.clientHeight);

    const resize = () => {
      width = canvas.width = parentRef.current!.clientWidth;
      height = canvas.height = parentRef.current!.clientHeight;
    };
    window.addEventListener('resize', resize);

    const project = (x: number, y: number, z: number) => {
      const scale = 300 / (300 + z);
      return {
        x: x * scale + width / 2,
        y: y * scale + height / 2,
        z,
      };
    };

    const createCube = (x: number, y: number) => {
      const size = 2 + Math.random() * 14; // 14–50px
      const color = ['#aac9e7', '#9185be', '#f5b4cb'][
        Math.floor(Math.random() * 3)
      ];

      const spread = () => (Math.random() - 0.5) * 50;
      const cube = {
        pos: {
          x: x - width / 2 + spread(),
          y: y - height / 2 + spread(),
          z: spread(),
        },
        size,
        color,
        rotation: { x: 0, y: 0, z: 0 },
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.03,
          y: (Math.random() - 0.5) * 0.03,
          z: (Math.random() - 0.5) * 0.03,
        },
        age: 0,
        life: 5 + Math.random() * 2, // 5–7 seconds
      };

      trailRef.current.push(cube);
      if (trailRef.current.length > 100) trailRef.current.shift();
    };

    const drawCube = (cube: any) => {
      const { size, rotation, pos, color } = cube;
      const half = size / 2;

      const vertices = [
        [-half, -half, -half],
        [half, -half, -half],
        [half, half, -half],
        [-half, half, -half],
        [-half, -half, half],
        [half, -half, half],
        [half, half, half],
        [-half, half, half],
      ];

      const rotate3D = ([x, y, z]: number[]) => {
        // Rotate around x
        let cos = Math.cos(rotation.x),
          sin = Math.sin(rotation.x);
        let y1 = y * cos - z * sin,
          z1 = y * sin + z * cos;
        y = y1;
        z = z1;

        // Rotate around y
        cos = Math.cos(rotation.y);
        sin = Math.sin(rotation.y);
        let x1 = x * cos + z * sin;
        z1 = -x * sin + z * cos;
        x = x1;
        z = z1;

        // Rotate around z
        cos = Math.cos(rotation.z);
        sin = Math.sin(rotation.z);
        x1 = x * cos - y * sin;
        y1 = x * sin + y * cos;
        x = x1;
        y = y1;

        return [x + pos.x, y + pos.y, z + pos.z];
      };

      const projected = vertices
        .map(rotate3D)
        .map((v) => project(v[0], v[1], v[2]));

      const faces = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [0, 1, 5, 4],
        [2, 3, 7, 6],
        [1, 2, 6, 5],
        [0, 3, 7, 4],
      ];

      // Sort faces by average Z (back to front)
      faces.sort((a, b) => {
        const za = a.reduce((sum, idx) => sum + projected[idx].z, 0) / 4;
        const zb = b.reduce((sum, idx) => sum + projected[idx].z, 0) / 4;
        return zb - za;
      });

      for (const face of faces) {
        ctx.beginPath();
        face.forEach((vIdx, i) => {
          const v = projected[vIdx];
          if (i === 0) ctx.moveTo(v.x, v.y);
          else ctx.lineTo(v.x, v.y);
        });
        ctx.closePath();

        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      trailRef.current = trailRef.current.filter((cube) => {
        cube.age += 0.016;
        cube.rotation.x += cube.rotationSpeed.x;
        cube.rotation.y += cube.rotationSpeed.y;
        cube.rotation.z += cube.rotationSpeed.z;
        drawCube(cube);
        return cube.age < cube.life;
      });
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = parentRef.current!.getBoundingClientRect();
      const mx = e.clientX - bounds.left;
      const my = e.clientY - bounds.top;

      const dx = mx - prevMouse.current.x;
      const dy = my - prevMouse.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      accumulatedDistance.current += dist;

      const step = 18;
      const steps = Math.floor(accumulatedDistance.current / step);
      for (let i = 0; i < steps; i++) {
        const t = (i + 1) / steps;
        createCube(prevMouse.current.x + dx * t, prevMouse.current.y + dy * t);
      }

      accumulatedDistance.current -= steps * step;
      prevMouse.current = { x: mx, y: my };
      mouse.current = { x: mx, y: my };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, [parentRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
