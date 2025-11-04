import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@site/src/components/UI/Button';
import '../../css/tailwind.css';

const toolList = [
  {
    name: 'minio.svg',
    size: 'w-32 h-32',
    placeholder: 'single_cube_purple.svg',
  },
  {
    name: 'appsmith.svg',
    size: 'w-32 h-32',
    placeholder: 'single_cube_pink.svg',
  },
  {
    name: 'grafana.svg',
    size: 'w-32 h-32',
    placeholder: 'single_cube_blue.svg',
  },
  {
    name: 'pgadmin.svg',
    size: 'w-32 h-32',
    placeholder: 'single_cube_purple.svg',
  },
  {
    name: 'airflow.svg',
    size: 'w-32 h-32',
    placeholder: 'single_cube_pink.svg',
  },
  {
    name: 'master_portal.svg',
    size: 'w-32 h-32',
    placeholder: 'single_cube_blue.svg',
  },
  {
    name: 'geoserver.svg',
    size: 'w-32 h-32',
    placeholder: 'single_cube_purple.svg',
  },
  {
    name: 'node_red.svg',
    size: 'w-32 h-32',
    placeholder: 'single_cube_pink.svg',
  },
  {
    name: 'superset.svg',
    size: 'w-32 h-32',
    placeholder: 'single_cube_blue.svg',
  },
  {
    name: 'piveau.svg',
    size: 'w-32 h-32',
    placeholder: 'single_cube_purple.svg',
  },
  {
    name: 'jupiter.svg',
    size: 'w-32 h-32',
    placeholder: 'single_cube_pink.svg',
  },
  {
    name: 'keycloak.svg',
    size: 'w-24 h-24',
    placeholder: 'single_cube_yellow.svg',
  },
];

export default function HomepageMainTools() {
  const containerRef = useRef(null);
  const [visibleTools, setVisibleTools] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Reihenfolge aus toolList beibehalten
          const normalTools = toolList.filter((t) => t.name !== 'misc');

          normalTools.forEach((tool, i) => {
            setTimeout(() => {
              setVisibleTools((prev) => [...prev, tool.name]);
            }, i * 200); // nacheinander
          });

          // misc Text nach allen anderen
          setTimeout(() => {
            setVisibleTools((prev) => [...prev, 'misc']);
          }, normalTools.length * 200 + 200);
        } else {
          setVisibleTools([]);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-dhub-background px-6 md:px-16 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            Tools im Baukasten des Data Hub
          </h2>
          <p className="text-xl md:text-3xl leading-6 md:leading-relaxed">
            Diese Open Source-Werkzeuge sind die Bausteine des Data Hub – eine
            Auswahl.
          </p>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-12 gap-[20px] mb-16">
          {toolList.map((tool) => {
            const isVisible = visibleTools.includes(tool.name);

            return (
              <div
                key={tool.name}
                className="col-span-4 lg:col-span-3 flex items-center justify-center h-24 group"
              >
                <div className="relative w-32 h-32 flex items-center justify-center">
                  {/* Placeholder SVG */}
                  {tool.name !== 'misc' && (
                    <img
                      src={`img/${tool.placeholder}`}
                      alt="placeholder"
                      className={`absolute inset-0 w-32 h-32 rounded-md transition-all duration-300 overflow-visible
          ${isVisible ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
          group-hover:opacity-100 group-hover:scale-100
        `}
                    />
                  )}

                  {/* Logo oder Text */}
                  {tool.name === 'misc' ? (
                    <img
                      src={`img/logos/${tool.name}`}
                      alt={tool.name}
                      className={`absolute inset-0 w-32 h-32 rounded-md transition-all duration-300 transform
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          group-hover:opacity-0 group-hover:scale-95
        `}
                    />
                  ) : (
                    <img
                      src={`img/logos/${tool.name}`}
                      alt={tool.name}
                      className={`absolute inset-0 w-32 h-32 rounded-md transition-all duration-300 transform
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          group-hover:opacity-0 group-hover:scale-95
        `}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Beschreibung */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-base text-left md:text-xl leading-6 md:leading-relaxed space-y-4 max-w-[566px] mx-auto">
            {' '}
            Der Data Hub bringt eine erprobte Architektur für urbane
            Datenplattfomen nach Berlin, die vollständig auf cloudbetriebener
            Open Source-Software basiert. Derzeit wird der Prototyp dahingehend
            weiterentwickelt, dass in einem iterativen Prozess konkrete
            Hilfestellungen für Verwaltungshandlungen integriert werden. So
            entsteht ein{' '}
            <span className="font-bold">moderner Stack aus Software-Tools</span>
            , der nicht nur flexibel und leicht skalierbar ist, sondern auch
            Innovation fördert und die digitale Souveränität von Verwaltungen
            stärkt.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            label="Zu den Tools"
            slug="https://portal.data-hub.berlin/"
          ></Button>
        </div>
      </div>
    </section>
  );
}
