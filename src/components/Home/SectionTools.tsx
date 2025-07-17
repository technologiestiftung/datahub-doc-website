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
    <section className="min-h-screen bg-dhub-background px-16 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="md:text-4xl font-bold">Open Source Tool </h2>
          <h3 className="md:text-2xl font-normal">
            Im Browser nutzbar, vielfach erprobt{' '}
          </h3>
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
          <p className="text-lg leading-relaxed space-y-4 max-w-[566px] mx-auto">
            {' '}
            Bei den Data Hub Software-Bausteinen handelt es sich ausschließlich
            um Open Source Software. Eine breit aufgestellte Community sorgt für
            Updates und Support. Detailinformationen und Dokumentationen finden
            sich im Wissensspeicher.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button label="zum Wissensspeicher" slug="/docs/intro"></Button>
        </div>
      </div>
    </section>
  );
}
