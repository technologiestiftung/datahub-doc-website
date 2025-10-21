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
            Der Data Hub ergänzt bestehende Systeme und dockt dort an, wo Daten
            weiterverarbeitet, verknüpft oder gezielt geteilt werden sollen, um
            daraus neue Datenprodukte zu entwickeln. Eine Berichtigungssteuerung
            stellt sicher, dass Daten und Projekte geschützt sind. So entsteht
            die technische Grundlage, Daten professionell aufzubereiten, zu
            analysieren und für evidenzbasierte Entscheidungen zu nutzen – und
            zugleich ein Motor für Innovation, Zusammenarbeit und Souveränität.
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
