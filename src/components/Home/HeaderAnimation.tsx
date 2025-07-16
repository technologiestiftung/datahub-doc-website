'use client';

import { useEffect, useRef } from 'react';

export default function CanvasCubeTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<any[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const prevMouse = useRef({ x: 0, y: 0 });
  const accumulatedDistance = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    const project = (x: number, y: number, z: number) => {
      const scale = 300 / (300 + z);
      return {
        x: x * scale + width / 2,
        y: y * scale + height / 2,
      };
    };

    function hexToRgba(hex: string, alpha: number) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    const createCube = (x: number, y: number) => {
      const size = 10 + Math.random() * 40; // 10–50 px
      const color = ['#aac9e7', '#9185be', '#f5b4cb'][
        Math.floor(Math.random() * 3)
      ];
      const rotationSpeed = {
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.04,
      };

      const cube = {
        pos: { x: x - width / 2, y: y - height / 2, z: 0 },
        size,
        color,
        rotation: { x: 0, y: 0, z: 0 },
        rotationSpeed,
        age: 0,
        life: 2.5,
      };

      trailRef.current.push(cube);
      if (trailRef.current.length > 80) trailRef.current.shift();
    };

    const drawCube = (cube: any) => {
      const { size, rotation, pos, color, age, life } = cube;
      const alpha = 1 - age / life;
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
        // Rotate X
        let cos = Math.cos(rotation.x),
          sin = Math.sin(rotation.x);
        let y1 = y * cos - z * sin,
          z1 = y * sin + z * cos;
        y = y1;
        z = z1;

        // Rotate Y
        cos = Math.cos(rotation.y);
        sin = Math.sin(rotation.y);
        let x1 = x * cos + z * sin;
        z1 = -x * sin + z * cos;
        x = x1;
        z = z1;

        // Rotate Z
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
        .map(([x, y, z]) => project(x, y, z));

      const faces = [
        [0, 1, 2, 3], // back
        [4, 5, 6, 7], // front
        [0, 1, 5, 4], // bottom
        [2, 3, 7, 6], // top
        [1, 2, 6, 5], // right
        [0, 3, 7, 4], // left
      ];

      const faceNormals = [
        [0, 0, -1],
        [0, 0, 1],
        [0, -1, 0],
        [0, 1, 0],
        [1, 0, 0],
        [-1, 0, 0],
      ];

      const lightDir = [0.3, 0.5, 1];
      const dot = (a: number[], b: number[]) =>
        a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

      ctx.save();
      ctx.globalAlpha = alpha;

      for (let i = 0; i < faces.length; i++) {
        const face = faces[i];
        const normal = faceNormals[i];
        const brightness = Math.max(0.2, dot(normal, lightDir));

        ctx.beginPath();
        face.forEach((vIdx, j) => {
          const v = projected[vIdx];
          if (j === 0) ctx.moveTo(v.x, v.y);
          else ctx.lineTo(v.x, v.y);
        });
        ctx.closePath();

        ctx.fillStyle = hexToRgba(color, brightness * alpha);
        ctx.fill();
        ctx.strokeStyle = `rgba(0,0,0,${0.2 * alpha})`;
        ctx.stroke();
      }

      ctx.restore();
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
      const curr = { x: e.clientX, y: e.clientY };
      const prev = prevMouse.current;
      const dx = curr.x - prev.x;
      const dy = curr.y - prev.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      accumulatedDistance.current += dist;

      const step = 15;
      const steps = Math.floor(accumulatedDistance.current / step);
      for (let i = 0; i < steps; i++) {
        const t = (i + 1) / steps;
        const interpX = prev.x + dx * t;
        const interpY = prev.y + dy * t;
        createCube(interpX, interpY);
      }

      accumulatedDistance.current -= steps * step;
      prevMouse.current = curr;
      mouse.current = curr;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'block',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    />
  );
}
