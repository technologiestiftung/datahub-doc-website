import React, { useRef, useEffect } from 'react';
import { ButtonSimple } from '@site/src/components/UI/ButtonSimple';

export default function SectionScrollBoxes() {
  const svgWrapperRef = useRef(null);
  const pathRefPurple = useRef(null);
  const pathRefBlue = useRef(null);
  const pathRefPink = useRef(null);
  const cubePurpleRef = useRef(null);
  const cubeBlueRef = useRef(null);
  const cubePinkRef = useRef(null);
  const allRailPathsRef = useRef<SVGPathElement[]>([]);

  interface Cube {
    path: SVGPathElement | null;
    group: SVGGElement | null;
    color: string;
    delay: number;
    origTransform?: string;
    start?: { x: number; y: number };
    end?: { x: number; y: number };
  }

  useEffect(() => {
    const cubes: Record<'purple' | 'blue' | 'pink', Cube> = {
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

    // set initial positions
    Object.values(cubes).forEach((c) => {
      if (c === cubes.purple) {
        c.start = { x: 1.93, y: 145.33 };
      } else if (c === cubes.pink) {
        c.start = { x: 345.28, y: 145.33 };
      } else {
        // 🔵 Custom logic for blue block (preserving original behavior)
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
      c.group.querySelectorAll('path').forEach((p) => {
        p.setAttribute('fill', '#ffffff');
      });
    });

    const onScroll = () => {
      if (!svgWrapperRef.current) return;
      const rect = svgWrapperRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      let p = (vh - rect.top) / (rect.height / 1.1) - 0.5;
      p = Math.max(0, Math.min(1, p));

      Object.values(cubes).forEach((c) => {
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
        c.group.querySelectorAll('path').forEach((pth) => {
          pth.setAttribute('fill', fill);
        });
      });

      // 🔄 Fade out the rails when animation is done
      const opacity = p >= 1 ? '0.05' : '1';
      allRailPathsRef.current.forEach((path) => {
        path.style.strokeOpacity = opacity;
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Register rail paths after mount
  useEffect(() => {
    const paths = Array.from(
      document.querySelectorAll('path[data-rail]')
    ) as SVGPathElement[];
    allRailPathsRef.current = paths;
  }, []);

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16">
      <style>{`
        path[data-rail] {
          stroke-width: 2;
          stroke-opacity: var(--rail-opacity, 1);
          transition: stroke-opacity 0.6s ease-in-out;
          stroke: #e6e6e6;
        }
        g {
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
        }
      `}</style>
      <div className="grid grid-cols-12 gap-[20px] items-center">
        <div className="col-span-12 lg:col-span-6" ref={svgWrapperRef}>
          <div className="w-full max-w-[631px] mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 344.27814 299.20319"
              className="w-full overflow-visible p-12"
            >
              {/* Rails */}
              <g
                transform="translate(-1.5018584 -23.3418)"
                fill="none"
                stroke="#141414"
                strokeLinecap="round"
                strokeDasharray="6 8"
                vectorEffect="non-scaling-stroke"
              >
                {/* PURPLE */}
                <path
                  data-rail
                  style={{ strokeWidth: 4 }}
                  d="M39.1548,123.832 L300.705,276.28"
                />
                <path
                  data-rail
                  style={{ strokeWidth: 4 }}
                  d="M1.93445,145.33  L268.781,299.993"
                />
                <path
                  ref={pathRefPurple}
                  data-rail
                  style={{ strokeWidth: 4 }}
                  d="M1.93439,188.313 L232.107,322.045"
                />

                {/* BLUE */}
                <path
                  data-rail
                  style={{ strokeWidth: 4 }}
                  d="M135.096,23.8499 L135.095,266.063"
                />
                <path
                  ref={pathRefBlue}
                  data-rail
                  style={{ strokeWidth: 4 }}
                  d="M172.316,45.332 V287.577"
                />
                <path
                  data-rail
                  style={{ strokeWidth: 4 }}
                  d="M209.536,23.8418 V266.063"
                />

                {/* PINK */}
                <path
                  data-rail
                  style={{ strokeWidth: 4 }}
                  d="M42.7872,276.28  L308.06,123.832"
                />
                <path
                  data-rail
                  style={{ strokeWidth: 4 }}
                  d="M345.28,145.33  L76.764,299.993"
                />
                <path
                  ref={pathRefPink}
                  data-rail
                  style={{ strokeWidth: 4 }}
                  d="M345.28,188.296 L112.994,322.045"
                />
              </g>

              {/* Purple cube */}
              <g
                ref={cubePurpleRef}
                transform="translate(-1.5018584 -23.3418)"
                stroke="#141414"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m172.323,244.797 -37.22,21.499 -37.2208,-21.499 37.2208,-21.498 z" />
                <path d="m172.323,201.817 -37.22,21.498 -37.2207,-21.498 37.2207,-21.499 z" />
                <path d="M135.103,223.307 V266.28 L97.8822,244.782 v-42.973 z" />
                <path d="m172.323,201.809 v42.973 l-37.221,21.498 v-42.973 z" />
              </g>

              {/* Pink cube */}
              <g
                ref={cubePinkRef}
                transform="translate(-1.5018584 -23.3418)"
                stroke="#141414"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m209.536,266.078 -37.22,21.499 -37.221,-21.499 37.221,-21.498 z" />
                <path d="m209.536,223.098 -37.22,21.498 -37.22,-21.498 37.22,-21.498 z" />
                <path d="m172.316,244.588 v42.974 L135.095,266.063 V223.09 Z" />
                <path d="m209.536,223.09 v42.973 l-37.22,21.499 v-42.974 z" />
              </g>

              {/* Blue cube */}
              <g
                ref={cubeBlueRef}
                transform="translate(-1.5018584 -23.3418)"
                stroke="#141414"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m209.536,223.09 -37.22,21.498 -37.221,-21.498 37.221,-21.498 z" />
                <path d="m209.536,180.11 -37.22,21.498 -37.221,-21.498 37.221,-21.499 z" />
                <path d="m172.316,201.602 v42.973 l-37.221,-21.498 v-42.973 z" />
                <path d="m209.536,180.104 v42.973 l-37.22,21.498 v-42.973 z" />
              </g>
            </svg>
          </div>
        </div>

        {/* Text section */}
        <div className="col-span-12 lg:col-span-6 max-w-[489px] md:max-w-none mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
            Ein Baukasten für das Arbeiten mit Daten
          </h2>
          <div className="text-base md:text-xl md:leading-relaxed space-y-4">
            <p>
              Der Data Hub Berlin stellt der Verwaltung eine vielseitige und
              zentrale Infrastruktur bereit, um effizient mit Daten zu arbeiten.
              Seine modulare Architektur und intelligenten Schnittstellen
              erlauben es,{' '}
              <span className="font-bold">
                Software-Tools wie Bausteine zu kombinieren
              </span>
              . Dadurch können passgenaue Lösungen für unterschiedlichste,
              datenbezoge Anwendungsfälle entwickelt werden. Im Data Hub
              existieren Bausteine für drei wesentliche Funktionsbereiche:
            </p>
            {/* Drei farbige Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 whitespace-nowrap">
              <ButtonSimple
                label="Datenverwaltung"
                slug="/docs/category/datenverwaltung"
                color="bg-berlin-purple"
              />
              <ButtonSimple
                label="Datenverarbeitung"
                slug="/docs/category/datenverarbeitung"
                color="bg-berlin-pink"
              />
              <ButtonSimple
                label="Datenvisualisierung"
                slug="/docs/bausteine/2_3_datenvisualisierung/"
                color="bg-berlin-light-blue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
