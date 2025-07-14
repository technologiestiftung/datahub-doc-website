import React, { useRef, useEffect, useState } from 'react';

const ScrollBlocks3D = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      const progress = Math.min(scrollTop / maxScroll, 1);
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const cubeSize = 50;
  const half = cubeSize / 2;
  const height = cubeSize / 2;

  // Destination (center) positions where cubes meet
  const centerX = 175;
  const centerY = 175;

  // Start positions for each cube (top-left, top, top-right)
  const fromTopLeft = {
    x: centerX - 100,
    y: centerY - 100,
  };

  const fromTop = {
    x: centerX,
    y: centerY - 150,
  };

  const fromTopRight = {
    x: centerX + 100,
    y: centerY - 100,
  };

  // Interpolated positions
  const lerp = (start, end) => start + (end - start) * scrollProgress;

  const currentTopLeft = {
    x: lerp(fromTopLeft.x, centerX - half),
    y: lerp(fromTopLeft.y, centerY + height),
  };

  const currentTop = {
    x: lerp(fromTop.x, centerX),
    y: lerp(fromTop.y, centerY - cubeSize),
  };

  const currentTopRight = {
    x: lerp(fromTopRight.x, centerX + half),
    y: lerp(fromTopRight.y, centerY + height),
  };

  const opacity = scrollProgress;

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

  return (
    <div
      ref={containerRef}
      style={{
        height: '400px',
        overflowY: 'scroll',
        border: '1px solid #ccc',
        background: '#fff',
      }}
    >
      <div style={{ height: '800px', paddingTop: '200px' }}>
        <svg width="400" height="400" viewBox="0 0 400 400">
          {/* Guide lines: match your image angles */}
          <line
            x1={fromTopLeft.x + half}
            y1={fromTopLeft.y + height}
            x2={centerX}
            y2={centerY + half}
            stroke="#3f2673"
            strokeDasharray="4"
          />
          <line
            x1={fromTop.x + half}
            y1={fromTop.y + height}
            x2={centerX + half}
            y2={centerY - cubeSize / 2}
            stroke="#1b75bb"
            strokeDasharray="4"
          />
          <line
            x1={fromTopRight.x + half}
            y1={fromTopRight.y + height}
            x2={centerX + cubeSize}
            y2={centerY + half}
            stroke="#b9184a"
            strokeDasharray="4"
          />

          {/* Center cube for reference */}
          {drawCube(centerX, centerY, cubeSize, '#999', 0.15)}

          {/* Animated cubes */}
          {drawCube(
            currentTopLeft.x,
            currentTopLeft.y,
            cubeSize,
            '#3f2673',
            opacity
          )}
          {drawCube(currentTop.x, currentTop.y, cubeSize, '#1b75bb', opacity)}
          {drawCube(
            currentTopRight.x,
            currentTopRight.y,
            cubeSize,
            '#b9184a',
            opacity
          )}
        </svg>
      </div>
    </div>
  );
};

export default ScrollBlocks3D;
