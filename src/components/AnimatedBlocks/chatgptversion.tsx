import React, { useRef, useEffect, useState } from 'react';

const IsometricCubes = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const cubeSize = 50;
  const half = cubeSize / 2;
  const height = cubeSize / 2;

  useEffect(() => {
    const handleScroll = () => {
      const rect = triggerRef.current.getBoundingClientRect();
      const viewportHeight =
        containerRef.current.getBoundingClientRect().height;
      const rawProgress = 1 - rect.top / viewportHeight;
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setScrollProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawCube = (x, y, size, color, opacity = 1) => {
    const half = size / 2;
    const height = size / 2;

    const top = `${x},${y} ${x + half},${y - height} ${x + size},${y} ${
      x + half
    },${y + height}`;
    const left = `${x},${y} ${x + half},${y + height} ${x + half},${
      y + size + height
    } ${x},${y + size}`;
    const right = `${x + size},${y} ${x + half},${y + height} ${x + half},${
      y + size + height
    } ${x + size},${y + size}`;

    return (
      <>
        <polygon points={top} fill={color} opacity={opacity * 0.7} />
        <polygon points={left} fill={color} opacity={opacity * 0.9} />
        <polygon points={right} fill={color} opacity={opacity} />
      </>
    );
  };

  // Final center positions
  const center = { x: 175, y: 175 };

  // Offsets to arrange final 2x2 block like your image
  const targetTopLeft = { x: center.x - half, y: center.y - cubeSize };
  const targetTopRight = { x: center.x + half, y: center.y - cubeSize };
  const targetBottomLeft = { x: center.x - half, y: center.y };
  const targetBottomRight = { x: center.x + half, y: center.y };

  // Start positions
  const fromTopLeft = { x: targetTopLeft.x - 100, y: targetTopLeft.y - 100 };
  const fromTop = {
    x: (targetTopLeft.x + targetTopRight.x) / 2,
    y: targetTopLeft.y - 100,
  };
  const fromTopRight = { x: targetTopRight.x + 100, y: targetTopRight.y - 100 };

  // Line helper
  const drawLine = (from, to, color) => (
    <line
      x1={from.x + half}
      y1={from.y + height}
      x2={to.x + half}
      y2={to.y + height}
      stroke={color}
      strokeDasharray="4"
    />
  );

  // Lerp utility
  const lerp = (a, b) => a + (b - a) * scrollProgress;

  const animatePos = (start, end) => ({
    x: lerp(start.x, end.x),
    y: lerp(start.y, end.y),
  });

  // Current positions of animated cubes
  const topLeftPos = animatePos(fromTopLeft, targetBottomLeft);
  const topPos = animatePos(fromTop, targetTopLeft);
  const topRightPos = animatePos(fromTopRight, targetBottomRight);

  return (
    <div
      ref={containerRef}
      style={{ height: '50vh', padding: '100px 0', background: '#fff' }}
    >
      <div ref={triggerRef} style={{ height: '400px' }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Guide lines */}
          {drawLine(fromTopLeft, targetBottomLeft, '#3f2673')}
          {drawLine(fromTop, targetTopLeft, '#1b75bb')}
          {drawLine(fromTopRight, targetBottomRight, '#b9184a')}

          {/* Final reference cube (center block) */}
          {drawCube(
            targetTopRight.x,
            targetBottomRight.y - cubeSize,
            cubeSize,
            '#a3d0f7',
            0.15
          )}

          {/* Incoming cubes */}
          {drawCube(
            topLeftPos.x,
            topLeftPos.y,
            cubeSize,
            '#3f2673',
            scrollProgress
          )}
          {drawCube(topPos.x, topPos.y, cubeSize, '#1b75bb', scrollProgress)}
          {drawCube(
            topRightPos.x,
            topRightPos.y,
            cubeSize,
            '#b9184a',
            scrollProgress
          )}
        </svg>
      </div>
    </div>
  );
};

export default IsometricCubes;
