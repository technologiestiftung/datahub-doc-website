'use client';
import { useEffect, useRef } from 'react';

export default function Component() {
  const containerRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const cube1 = document.querySelector('.animate-cube-1') as HTMLElement;
    const cube2 = document.querySelector('.animate-cube-2') as HTMLElement;
    const cube3 = document.querySelector('.animate-cube-3') as HTMLElement;

    const handleScroll = () => {
      if (!triggerRef.current || !containerRef.current) return;

      const rect = triggerRef.current.getBoundingClientRect();
      const viewportHeight =
        containerRef.current.getBoundingClientRect().height;

      const scrollProgress = 1 - rect.top / viewportHeight;
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Animate Cube 1 (Left -> Center Purple)
      if (cube1) {
        const progress = Math.max(0, Math.min(1, (clampedProgress - 0.1) * 3));

        const startX = 0;
        const startY = 0;
        const endX = 175;
        const endY = 100;

        const translateX = startX + progress * (endX - startX);
        const translateY = startY + progress * (endY - startY);

        cube1.style.transform = `translate(${translateX}px, ${translateY}px)`;
        cube1.style.opacity = (0.3 + progress * 0.7).toString();
      }

      // Animate Cube 2 (Top -> Center Blue)
      if (cube2) {
        const progress = Math.max(0, Math.min(1, (clampedProgress - 0.2) * 3));

        const startY = 0;
        const endY = 290;

        const translateY = startY + progress * (endY - startY);
        // cube2.style.transform = `translateY(${translateY}px)`;
        cube2.style.transform = `translate(${-30}px, ${translateY}px)`;

        cube2.style.opacity = (0.3 + progress * 0.7).toString();
      }

      // Animate Cube 3 (Right -> Center Red)
      if (cube3) {
        const progress = Math.max(0, Math.min(1, (clampedProgress - 0.3) * 3));

        const startX = 0;
        const startY = 0;
        const endX = -277;
        const endY = 121;

        const translateX = startX + progress * (endX - startX);
        const translateY = startY + progress * (endY - startY);

        cube3.style.transform = `translate(${translateX}px, ${translateY}px)`;
        cube3.style.opacity = (0.3 + progress * 0.7).toString();
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <style jsx>{`
        .animate-cube-1,
        .animate-cube-2,
        .animate-cube-3 {
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
          opacity: 1;
          transform-origin: center;
        }

        .animate-cube-1 polygon,
        .animate-cube-2 polygon,
        .animate-cube-3 polygon {
          transition: fill 0.3s ease-out;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - SVG */}
          <div className="relative" ref={containerRef}>
            <div className="relative w-full h-auto" ref={triggerRef}>
              <svg
                width="629"
                height="608"
                viewBox="0 0 629 608"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Dotted lines showing cube paths */}
                <line
                  x1="70"
                  y1="220"
                  x2="244"
                  y2="403"
                  stroke="#3C2593"
                  strokeDasharray="4"
                />
                <line
                  x1="310"
                  y1="80"
                  x2="311"
                  y2="363"
                  stroke="#1074D5"
                  strokeDasharray="4"
                />
                <line
                  x1="558"
                  y1="220"
                  x2="379"
                  y2="403"
                  stroke="#C10648"
                  strokeDasharray="4"
                />

                {/* Cube 1 - Purple */}
                <g className="animate-cube-1">
                  <polygon
                    points="69,300 104.5,280 140,300 104.5,320"
                    fill="#EAE7F9"
                    stroke="#3C2593"
                  />
                  <polygon
                    points="69,300 104.5,320 104.5,370 69,350"
                    fill="#3C2593"
                    stroke="#3C2593"
                  />
                  <polygon
                    points="140,300 104.5,320 104.5,370 140,350"
                    fill="#9185BE"
                    stroke="#3C2593"
                  />
                </g>

                {/* Cube 3 - Red */}
                <g className="animate-cube-3">
                  <polygon
                    points="558,300 593.5,280 629,300 593.5,320"
                    fill="#FEE7EF"
                    stroke="#C10648"
                  />
                  <polygon
                    points="558,300 593.5,320 593.5,370 558,350"
                    fill="#C10648"
                    stroke="#C10648"
                  />
                  <polygon
                    points="629,300 593.5,320 593.5,370 629,350"
                    fill="#F5B4CB"
                    stroke="#C10648"
                  />
                </g>
                {/* Cube 2 - Blue */}
                <g className="animate-cube-2">
                  <polygon
                    points="311,80 346.5,60 382,80 346.5,100"
                    fill="#EBF5FF"
                    stroke="#1074D5"
                  />
                  <polygon
                    points="311,80 346.5,100 346.5,150 311,130"
                    fill="#1074D5"
                    stroke="#1074D5"
                  />
                  <polygon
                    points="382,80 346.5,100 346.5,150 382,130"
                    fill="#AAC9E7"
                    stroke="#1074D5"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Wunderbar modular
            </h1>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Der Data Hub ist ein modulares Stecksystem. Unterschiedlichen
                Softwarekomponenten aus{' '}
                <span className="font-semibold text-[#1074d5]">
                  DATENSPEICHERUNG
                </span>
                ,{' '}
                <span className="font-semibold text-[#c10648]">
                  DATENVERARBEITUNG
                </span>{' '}
                und{' '}
                <span className="font-semibold text-[#1074d5]">
                  DATENVISUALISIERUNG
                </span>{' '}
                bilden die einzelnen Bausteine.
              </p>
              <p>
                Jeder Baustein erfüllt einen eigenen Zweck und ermöglicht das
                gewünschte Projekt! Die einzelnen Komponenten lassen sich
                systematisch und nacheinander zusammenstecken/führen. Diverse
                Schnittstellen und Input-Output-Wandler machen es möglich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
