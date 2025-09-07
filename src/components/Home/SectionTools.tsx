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
            Software-Tools im Baukasten{' '}
          </h2>
          <p className="text-xl md:text-3xl leading-6 md:leading-relaxed">
            Konsequent Open Source, direkt nutzbar, flexibel kombinierbar.{' '}
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
            Der Data Hub ergänzt die bestehende IT-Landschaft Berlins durch eine
            moderne, offene Architektur und setzt dabei konsequent auf Open
            Source Software. Der Prototyp wird speziell an die Bedarfe der
            Berliner Verwaltung angepasst und in einem iterativen Prozess
            weiterentwickelt. So stärkt der Data Hub die digitale Souveränität
            der Hauptstadt.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button label="Zu den Bausteinen" slug="/docs/intro"></Button>
        </div>
      </div>
    </section>
  );
}
