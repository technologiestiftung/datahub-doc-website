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
    <div className="min-h-screen bg-dhub-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="md:text-4xl font-bold">
            Richtige Bausteine. Unendliche Möglichkeiten
          </h2>
          <h3 className="md:text-2xl font-normal">
            {' '}
            Das bietet der Data Hub Berlin
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {toolList.map((d) => {
            return (
              <div
                className="flex items-center justify-center h-20"
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

        {/* Description Text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg leading-relaxed space-y-4">
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
    </div>
  );
}
