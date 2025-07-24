import React, { useRef, useEffect } from 'react';

export default function SectionScrollBoxes() {
  const svgWrapperRef = useRef(null);
  const pathRefPurple = useRef(null); // purple rail
  const pathRefBlue = useRef(null); // blue rail
  const pathRefPink = useRef(null); // pink rail
  const cubePurpleRef = useRef(null);
  const cubeBlueRef = useRef(null);
  const cubePinkRef = useRef(null);

  useEffect(() => {
    const cubes = {
      purple: {
        path: pathRefPurple.current,
        group: cubePurpleRef.current,
        color: '#9185be',
        delay: 0.2,
      },
      blue: {
        path: pathRefBlue.current,
        group: cubeBlueRef.current,
        color: '#aac9e7',
        delay: 0.4,
      },
      pink: {
        path: pathRefPink.current,
        group: cubePinkRef.current,
        color: '#f5b4cb',
        delay: 0,
      },
    };

    // compute each cube’s rail-start + center-end, init off-rail & white
    Object.values(cubes).forEach((c) => {
      if (c === cubes.purple) {
        c.start = { x: 1.93, y: 145.33 }; // visually confirmed rail start
      } else if (c === cubes.pink) {
        c.start = { x: 345.28, y: 145.33 }; // visually confirmed rail start
      } else {
        // fallback to default for blue
        const startPt = c.path.getPointAtLength(0);
        c.start = { x: startPt.x, y: startPt.y / 1.4 };
      }
      const bb = c.group.getBBox();
      c.end = { x: bb.x + bb.width / 2, y: bb.y + bb.height / 2 };
      c.origTransform = c.group.getAttribute('transform') || '';
      const dx = c.start.x - c.end.x;
      const dy = c.start.y - c.end.y;
      c.group.setAttribute(
        'transform',
        `${c.origTransform} translate(${dx},${dy})`
      );
      c.group
        .querySelectorAll('path')
        .forEach((p) => p.setAttribute('fill', '#ffffff'));
    });

    const onScroll = () => {
      if (!svgWrapperRef.current) return;
      const rect = svgWrapperRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // p = 0 when SVG top == bottom of viewport (just entering)
      // p = 1 when SVG top has moved up by half its height
      // Add a delay threshold to control when animation starts
      const animationStartOffset = 0.5; // increase this for a later start
      let p = (vh - rect.top) / (rect.height / 1.1) - animationStartOffset;
      p = Math.max(0, Math.min(1, p));

      Object.values(cubes).forEach((c) => {
        // per-cube eased progress
        let t = (p - c.delay) / (1 - c.delay);
        t = Math.max(0, Math.min(1, t));
        const dx = c.start.x - c.end.x;
        const dy = c.start.y - c.end.y;
        const tx = dx * (1 - t);
        const ty = dy * (1 - t);
        c.group.setAttribute(
          'transform',
          `${c.origTransform} translate(${tx},${ty})`
        );
        const fill = t >= 1 ? c.color : '#ffffff';
        c.group
          .querySelectorAll('path')
          .forEach((pth) => pth.setAttribute('fill', fill));
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // init in case already in view
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16">
      <style jsx>{`
        g {
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
        }
      `}</style>
      <div className="grid grid-cols-12 gap-[20px] items-center">
        {/* Left Side – SVG */}
        <div className="col-span-12 lg:col-span-6" ref={svgWrapperRef}>
          <div className="w-full">
            <div className="max-w-[631px] mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 344.27814 299.20319"
                className="w-full overflow-visible p-12"
              >
                {/* all slanted lines + rails */}
                <g
                  transform="translate(-1.5018584 -23.3418)"
                  fill="none"
                  stroke="#141414"
                  strokeLinecap="round"
                  strokeDasharray="6 8"
                  vector-effect="non-scaling-stroke"
                >
                  {/* PURPLE rail (center) */}
                  <path d="M39.1548,123.832 L300.705,276.28" />
                  <path d="M1.93445,145.33  L268.781,299.993" />
                  <path
                    ref={pathRefPurple}
                    d="M1.93439,188.313 L232.107,322.045"
                  />

                  {/* BLUE rail (center) */}
                  <path d="M135.096,23.8499 L135.095,266.063" />
                  <path ref={pathRefBlue} d="M172.316,45.332 V287.577" />
                  <path d="M209.536,23.8418 V266.063" />

                  {/* PINK rail (center) */}
                  <path d="M42.7872,276.28  L308.06,123.832" />
                  <path d="M345.28,145.33  L76.764,299.993" />
                  <path
                    ref={pathRefPink}
                    d="M345.28,188.296 L112.994,322.045"
                  />
                </g>
                {/* purple cube */}
                <g
                  ref={cubePurpleRef}
                  transform="translate(-1.5018584 -23.3418)"
                  stroke="#141414"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m172.323,244.797 -37.22,21.499 -37.2208,-21.499 37.2208,-21.498 z" />
                  <path d="m172.323,244.797 -37.22,21.499 -37.2208,-21.499 37.2208,-21.498 z" />
                  <path d="m172.323,201.817 -37.22,21.498 -37.2207,-21.498 37.2207,-21.499 z" />
                  <path d="M135.103,223.307 V266.28 L97.8822,244.782 v-42.973 z" />
                  <path d="m172.323,201.809 v42.973 l-37.221,21.498 v-42.973 z" />
                </g>
                {/* pink cube */}
                <g
                  ref={cubePinkRef}
                  transform="translate(-1.5018584 -23.3418)"
                  stroke="#141414"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m209.536,266.078 -37.22,21.499 -37.221,-21.499 37.221,-21.498 z" />
                  <path d="m209.536,266.078 -37.22,21.499 -37.221,-21.499 37.221,-21.498 z" />
                  <path d="m209.536,223.098 -37.22,21.498 -37.22,-21.498 37.22,-21.498 z" />
                  <path d="m172.316,244.588 v42.974 L135.095,266.063 V223.09 Z" />
                  <path d="m209.536,223.09 v42.973 l-37.22,21.499 v-42.974 z" />
                </g>
                {/* blue cube */}
                <g
                  ref={cubeBlueRef}
                  transform="translate(-1.5018584 -23.3418)"
                  stroke="#141414"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m209.536,223.09 -37.22,21.498 -37.221,-21.498 37.221,-21.498 z" />
                  <path d="m209.536,223.09 -37.22,21.498 -37.221,-21.498 37.221,-21.498 z" />
                  <path d="m209.536,180.11 -37.22,21.498 -37.221,-21.498 37.221,-21.499 z" />
                  <path d="m172.316,201.602 v42.973 l-37.221,-21.498 v-42.973 z" />
                  <path d="m209.536,180.104 v42.973 l-37.22,21.498 v-42.973 z" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side – Text */}
        <div className="col-span-12 lg:col-span-6 max-w-[489px] md:max-w-none mx-auto">
          <h3 className="text-2xl md:text-5xl font-bold mb-4">
            Vom Datensatz zum Datenprodukt
          </h3>
          <div className="text-md md:text-xl leading-relaxed space-y-4">
            <p>
              Ob{' '}
              <span className="text-berlin-purple font-bold">Datenablage</span>,{' '}
              <span className="text-berlin-pink font-bold">
                Datenverarbeitung
              </span>{' '}
              oder{' '}
              <span className="text-berlin-light-blue font-bold">
                Datenvisualisierung
              </span>{' '}
              – Mit dem Data Hub kann die Berliner Verwaltung souverän,
              kostenfrei und nachhaltig arbeiten. Der Data Hub bietet eine
              Sammlung von Software-Bausteinen, die in Kombination ein
              passgenaues Datenmanagement und das Erstellen von Datenprodukten
              wie Karten und Dashboards ermöglichen – genau so, wie es gebraucht
              wird.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
