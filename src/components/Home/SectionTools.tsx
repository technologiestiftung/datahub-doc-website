// import { ArrowRight } from 'lucide-react';
import { Button } from '@site/src/components/UI/Button';

import '../../css/tailwind.css';

const toolList = [
  { name: 'grafana', size: 'w-32 h-32' },
  { name: 'master_portal', size: 'w-32 h-32' },
  { name: 'superset', size: 'w-32 h-32' },
  { name: 'appsmith', size: 'w-32 h-32' },
  { name: 'airflow', size: 'w-32 h-32' },
  { name: 'jupiter', size: 'w-32 h-32' },
  { name: 'gravitee', size: 'w-32 h-32' },
  { name: 'node_red', size: 'w-32 h-32' },
  { name: 'geoserver', size: 'w-32 h-32' },
  { name: 'minio', size: 'w-32 h-32' },
  { name: 'pgadmin', size: 'w-32 h-32' },
  { name: 'piveau', size: 'w-32 h-32' },
];

export default function HomepageMainTools() {
  return (
    <section className="min-h-screen bg-dhub-background px-6 md:px-16  py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            Cloud-Tools im Baukasten des Data Hubs{' '}
          </h2>
          <p className="text-xl md:text-3xl leading-6 md:leading-relaxed">
            Open Source, direkt im Browser nutzbar und vielfältig kombinierbar.{' '}
          </p>
        </div>

        {/* 12er Grid mit 20px Gutter */}
        <div className="grid grid-cols-12 gap-[20px] mb-16">
          {toolList.map((d) => {
            return (
              <div
                className="col-span-6 sm:col-span-4 lg:col-span-3 flex items-center justify-center h-20"
                key={d.name}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`img/logos/${d.name}.svg`}
                    alt={d.name}
                    className={d.size}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Beschreibung */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4 max-w-[566px] mx-auto">
            {' '}
            Der Data Hub bringt eine erprobte Architektur für urbane
            Datenplattfomen nach Berlin, die vollständig auf cloudbetriebener
            Open-Source-Software basiert. Der Prototyp wird derzeit gezielt an
            die Anforderungen der Berliner Verwaltung angepasst und
            weiterentwickelt. In diesem iterativen Prozess entsteht so nicht nur
            ein{' '}
            <span className="font-bold">moderner Stack aus Software-Tools</span>
            , der flexibel und leicht skalierbar ist, sondern auch Innovation
            fördert und die digitale Souveränität der Verwaltung stärkt.
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
