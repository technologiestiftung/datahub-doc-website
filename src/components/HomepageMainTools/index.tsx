// import { ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
import Link from '@docusaurus/Link';

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
    <div className="min-h-screen bg-dh-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] mb-6 leading-tight">
            Richtige Bausteine. Unendliche Möglichkeiten
          </h1>
          <p className="text-lg leading-relaxed space-y-4">
            Das bietet der Data Hub Berlin
          </p>
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
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            zum Wissensspeicher
          </Link>
        </div>
      </div>
    </div>
  );
}
