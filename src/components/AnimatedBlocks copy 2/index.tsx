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
      if (!triggerRef.current) return;

      const rect = triggerRef.current.getBoundingClientRect();
      let viewportHeight = containerRef.current.getBoundingClientRect();
      viewportHeight = viewportHeight.height;

      // Scroll progress of the whole block through viewport
      const scrollProgress = 1 - rect.top / viewportHeight;
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Animate Cube 1 (Left -> Center Purple)
      if (cube1) {
        const progress = Math.max(0, Math.min(1, (clampedProgress - 0.1) * 3));

        if (progress > 0) {
          const startX = 0;
          const startY = 0;
          const endX = 175;
          const endY = 100;

          const translateX = startX + progress * (endX - startX);
          const translateY = startY + progress * (endY - startY);

          cube1.style.transform = `translate(${translateX}px, ${translateY}px)`;
          cube1.style.opacity = (0.3 + progress * 0.7).toString();

          // Color transition gray -> purple
          //   const grayPaths = cube1.querySelectorAll('path[fill="#BCBAB9"]');
          //   const lightPaths = cube1.querySelectorAll('path[fill="#EAE7F9"]');

          //   grayPaths.forEach((path) => {
          //     const grayAmount = 1 - progress;
          //     const purpleAmount = progress;
          //     path.setAttribute(
          //       'fill',
          //       `rgb(${Math.round(
          //         188 * grayAmount + 60 * purpleAmount
          //       )}, ${Math.round(
          //         186 * grayAmount + 37 * purpleAmount
          //       )}, ${Math.round(185 * grayAmount + 147 * purpleAmount)})`
          //     );
          //   });

          //   lightPaths.forEach((path) => {
          //     const lightAmount = 1 - progress;
          //     const purpleLightAmount = progress;
          //     path.setAttribute(
          //       'fill',
          //       `rgb(${Math.round(
          //         234 * lightAmount + 145 * purpleLightAmount
          //       )}, ${Math.round(
          //         231 * lightAmount + 133 * purpleLightAmount
          //       )}, ${Math.round(249 * lightAmount + 190 * purpleLightAmount)})`
          //     );
          //   });
        }
      }

      // Animate Cube 2 (Top -> Center Blue)
      if (cube2) {
        const progress = Math.max(0, Math.min(1, (clampedProgress - 0.2) * 3));

        if (progress > 0) {
          const startY = 0;
          const endY = 80;

          const translateY = startY + progress * (endY - startY);
          cube2.style.transform = `translateY(${translateY}px)`;
          cube2.style.opacity = (0.3 + progress * 0.7).toString();

          const grayPaths = cube2.querySelectorAll('path[fill="#BCBAB9"]');
          const lightPaths = cube2.querySelectorAll('path[fill="#EBF5FF"]');

          grayPaths.forEach((path) => {
            const grayAmount = 1 - progress;
            const blueAmount = progress;
            path.setAttribute(
              'fill',
              `rgb(${Math.round(
                188 * grayAmount + 16 * blueAmount
              )}, ${Math.round(
                186 * grayAmount + 116 * blueAmount
              )}, ${Math.round(185 * grayAmount + 213 * blueAmount)})`
            );
          });

          lightPaths.forEach((path) => {
            const lightAmount = 1 - progress;
            const blueLightAmount = progress;
            path.setAttribute(
              'fill',
              `rgb(${Math.round(
                235 * lightAmount + 170 * blueLightAmount
              )}, ${Math.round(
                245 * lightAmount + 201 * blueLightAmount
              )}, ${Math.round(255 * lightAmount + 231 * blueLightAmount)})`
            );
          });
        }
      }

      // Animate Cube 3 (Right -> Center Red)
      if (cube3) {
        const progress = Math.max(0, Math.min(1, (clampedProgress - 0.3) * 3));

        if (progress > 0) {
          const startX = 180;
          const startY = -45;
          const endX = -70;
          const endY = 40;

          const translateX = startX + progress * (endX - startX);
          const translateY = startY + progress * (endY - startY);

          cube3.style.transform = `translate(${translateX}px, ${translateY}px)`;
          cube3.style.opacity = (0.3 + progress * 0.7).toString();

          const grayPaths = cube3.querySelectorAll('path[fill="#BCBAB9"]');
          const lightPaths = cube3.querySelectorAll('path[fill="#FEE7EF"]');

          grayPaths.forEach((path) => {
            const grayAmount = 1 - progress;
            const redAmount = progress;
            path.setAttribute(
              'fill',
              `rgb(${Math.round(
                188 * grayAmount + 193 * redAmount
              )}, ${Math.round(186 * grayAmount + 6 * redAmount)}, ${Math.round(
                185 * grayAmount + 72 * redAmount
              )})`
            );
          });

          lightPaths.forEach((path) => {
            const lightAmount = 1 - progress;
            const redLightAmount = progress;
            path.setAttribute(
              'fill',
              `rgb(${Math.round(
                254 * lightAmount + 245 * redLightAmount
              )}, ${Math.round(
                231 * lightAmount + 180 * redLightAmount
              )}, ${Math.round(239 * lightAmount + 203 * redLightAmount)})`
            );
          });
        }
      }
    };

    // Improve performance: throttle using requestAnimationFrame
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
    handleScroll(); // Initial run

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f6fe] relative overflow-hidden">
      <style jsx>{`
        .animate-cube-1,
        .animate-cube-2,
        .animate-cube-3 {
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
          opacity: 1;
          transform-origin: center;
          //   0.3;
        }

        .animate-cube-1 path,
        .animate-cube-2 path,
        .animate-cube-3 path {
          transition: fill 0.2s ease-out;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side - Isometric Illustration */}
          <div className="relative" ref={containerRef}>
            <div
              className="relative w-full h-auto"
              id="isometric-container"
              ref={triggerRef}
            >
              <svg
                width="629"
                height="608"
                viewBox="0 0 629 608"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                {/* Dotted connection lines */}
                <path
                  d="M58.3691 510.363L312.285 363.441L545.429 499.735"
                  stroke="#BCBAB9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 2"
                />
                <path
                  d="M100.709 564.516L312 442.434L487.351 542.876"
                  stroke="#BCBAB9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 2"
                />
                <path
                  d="M164.686 606.659L312.287 521.441L420.633 583.995"
                  stroke="#BCBAB9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 2"
                />
                <path
                  d="M176.327 442.391L69.7559 378.887"
                  stroke="#3C2593"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 2"
                />
                <path
                  d="M176.077 364.133L67.623 300.363"
                  stroke="#3C2593"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 2"
                />
                <path
                  d="M244.036 325.084L137.123 261.383"
                  stroke="#3C2593"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 2"
                />

                {/* Animated gray cubes */}
                <g className="animate-cube-1">
                  <g clipPath="url(#clip0_1_192)">
                    <path
                      d="M137.321 339.702L69.6094 378.813L1.89724 339.702L69.6094 300.592L137.321 339.702Z"
                      fill="#BCBAB9"
                      stroke="#3C2593"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M137.322 261.511L69.6095 300.621L1.8974 261.511L69.6095 222.4L137.322 261.511Z"
                      fill="#EAE7F9"
                      stroke="#3C2593"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M69.6094 300.607V378.785L1.89724 339.675L1.89724 261.496L69.6094 300.607Z"
                      fill="#3C2593"
                      stroke="#3C2593"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M137.321 261.496V339.675L69.6093 378.785V300.607L137.321 261.496Z"
                      fill="#9185BE"
                      stroke="#3C2593"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>

                <g className="animate-cube-2">
                  <g clipPath="url(#clip1_1_192)">
                    <path
                      d="M379.572 118.702L311.859 157.813L244.147 118.702L311.859 79.592L379.572 118.702Z"
                      fill="#BCBAB9"
                      stroke="#1074D5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M379.572 40.5108L311.86 79.6211L244.147 40.5108L311.86 1.40045L379.572 40.5108Z"
                      fill="#EBF5FF"
                      stroke="#1074D5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M311.859 79.6065V157.785L244.147 118.675V40.4962L311.859 79.6065Z"
                      fill="#EBF5FF"
                      stroke="#1074D5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M379.571 40.4962V118.675L311.859 157.785V79.6065L379.571 40.4962Z"
                      fill="#EBF5FF"
                      stroke="#1074D5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>

                <g className="animate-cube-3">
                  <g clipPath="url(#clip3_1_192)">
                    <path
                      d="M626.521 339.702L558.809 378.813L491.096 339.702L558.809 300.592L626.521 339.702Z"
                      fill="#BCBAB9"
                      stroke="#C10648"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M626.521 261.511L558.809 300.621L491.097 261.511L558.809 222.4L626.521 261.511Z"
                      fill="#FEE7EF"
                      stroke="#C10648"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M558.809 300.607V378.785L491.096 339.675V261.496L558.809 300.607Z"
                      fill="#FEE7EF"
                      stroke="#C10648"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M626.521 261.496V339.675L558.808 378.785V300.607L626.521 261.496Z"
                      fill="#FEE7EF"
                      stroke="#C10648"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>

                {/* Central connecting lines */}
                <path
                  d="M312.014 284.374L311.658 157.948M244.15 324.602L243.896 118.918M379.587 324.417V119.023"
                  stroke="#1074D5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 2"
                />
                <path
                  d="M379.791 403.098L558.829 300.746"
                  stroke="#C10648"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 2"
                />
                <path
                  d="M244.213 402.961L491.225 261.465"
                  stroke="#C10648"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 2"
                />
                <path
                  d="M379.779 481.068L559.693 378.715"
                  stroke="#C10648"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 2"
                />

                {/* Central purple cube */}
                <g clipPath="url(#clip2_1_192)">
                  {/* <path
                    d="M311.872 442.452L244.16 481.563L176.448 442.452L244.16 403.342L311.872 442.452Z"
                    fill="#BCBAB9"
                    stroke="#3C2593"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 4"
                  /> */}
                  {/* <path
                    d="M311.872 364.261L244.16 403.371L176.448 364.261L244.16 325.15L311.872 364.261Z"
                    fill="#EAE7F9"
                    stroke="#3C2593"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M244.16 403.357V481.535L176.448 442.425V364.246L244.16 403.357Z"
                    fill="#3C2593"
                    stroke="#3C2593"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M311.872 364.246V442.425L244.16 481.535V403.357L311.872 364.246Z"
                    fill="#9185BE"
                    stroke="#3C2593"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 4"
                  /> */}
                </g>

                {/* Central red cube */}
                <path
                  d="M379.572 481.175L311.859 520.285L244.147 481.175L311.859 442.065L379.572 481.175Z"
                  fill="#BCBAB9"
                  stroke="#C10648"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M379.572 402.983L311.86 442.094L244.147 402.983L311.86 363.873L379.572 402.983Z"
                  fill="#FEE7EF"
                  stroke="#C10648"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M311.859 442.079V520.258L244.147 481.147V402.969L311.859 442.079Z"
                  fill="#C10648"
                  stroke="#C10648"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M379.571 402.969V481.147L311.859 520.258V442.079L379.571 402.969Z"
                  fill="#F5B4CB"
                  stroke="#C10648"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />

                {/* Central blue cube */}
                <path
                  d="M379.571 402.97L311.859 442.08L244.147 402.97L311.859 363.859L379.571 402.97Z"
                  fill="#BCBAB9"
                  stroke="#1074D5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M379.572 324.778L311.859 363.889L244.147 324.778L311.859 285.668L379.572 324.778Z"
                  fill="#EBF5FF"
                  stroke="#1074D5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M311.859 363.874V442.052L244.147 402.942V324.764L311.859 363.874Z"
                  fill="#1074D5"
                  stroke="#1074D5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M379.571 324.764V402.942L311.859 442.052V363.874L379.571 324.764Z"
                  fill="#AAC9E7"
                  stroke="#1074D5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />

                <defs>
                  <clipPath id="clip0_1_192">
                    <rect
                      width="139.2"
                      height="160"
                      fill="white"
                      transform="translate(0.455078 221.176)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1_192">
                    <rect
                      width="139.2"
                      height="160"
                      fill="white"
                      transform="translate(242.705 0.175781)"
                    />
                  </clipPath>
                  <clipPath id="clip2_1_192">
                    <rect
                      width="139.2"
                      height="160"
                      fill="white"
                      transform="translate(175.006 323.926)"
                    />
                  </clipPath>
                  <clipPath id="clip3_1_192">
                    <rect
                      width="139.2"
                      height="160"
                      fill="white"
                      transform="translate(489.654 221.176)"
                    />
                  </clipPath>
                </defs>
              </svg>{' '}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
              Wunderbar modular
            </h1>
            <div className="text-lg text-[#1c1b1f] leading-relaxed space-y-4">
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
