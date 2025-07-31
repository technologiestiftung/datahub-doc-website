import HomepageHeaderAnimation from '@site/src/components/Home/HeaderAnimation';
import { useEffect, useRef } from 'react';
import HeaderSVG from '/img/header_cubes.svg';

export default function HomepageHeader() {
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <section
      className="relative w-full overflow-hidden h-[calc(100vh-118px)] flex items-center justify-center"
      ref={containerRef}
    >
      <div className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10">
        <HeaderSVG
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        ></HeaderSVG>
      </div>

      {/* Animation layer */}
      {/* <div className="absolute inset-0 z-10">
        <HomepageHeaderAnimation parentRef={containerRef} />
      </div> */}

      {/* Vertically centered content */}
      <div className="relative z-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-2 leading-tight">
          Data Hub Berlin
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-normal">
          Gemeinsam Daten nutzbar machen <br /> offen & modular – für eine
          digitale Verwaltung, die wirkt
        </p>
      </div>
    </section>
  );
}
