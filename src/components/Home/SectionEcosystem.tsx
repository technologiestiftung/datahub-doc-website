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

export default function HomepageEcosystem() {
  return (
    <section className="min-h-screen bg-dhub-background px-6 md:px-16  py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            Vom Datensatz zum Datenprodukt{' '}
          </h2>
          <p className="text-xl md:text-3xl leading-6 md:leading-relaxed">
            Der Data Hub bildet das Herzstück des Berliner Datenmanagements.{' '}
          </p>
        </div>
        {/* Beschreibung */}

        <div className="order-1 lg:order-2 col-span-12 lg:col-span-6 mb-10 md:mb-12">
          <img
            src="/img/landing_page_uebersichtgrafik.png"
            alt="Darstellung des Berliner Data Hub"
            className="lg:w-5/6 xl:w-3/4 h-auto rounded-2xl border border-gray-200 mx-auto block"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-base text-left md:text-xl leading-6 md:leading-relaxed space-y-4 max-w-[566px] mx-auto">
            {' '}
            Der Data Hub ergänzt mit seinen Bausteinen die bestehenden
            IT-Systeme und Datenportale im Land Berlin. Er dockt dort an, wo
            Daten gezielt geteilt, verknüpft oder weiterverarbeitet werden
            sollen. Er ermöglicht die Entwicklung neuer Datenprodukte und
            Anwendungen – von{' '}
            <span className="font-bold">
              Dashboards über interaktive Karten bis zu veredelten Datensätzen
            </span>
            . Eine Berechtigungssteuerung schützt Daten und Projekte. So
            entsteht die Grundlage, Daten professionell in Verwaltungsprozesse
            einzubinden und für evidenzbasierte Entscheidungen zu nutzen.
          </p>
        </div>
      </div>
    </section>
  );
}
