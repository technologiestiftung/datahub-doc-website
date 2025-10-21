import '../../css/tailwind.css';
import AboutBlockSVG from '/img/cubes_ueber_projekt_6pt.svg';
import { Button } from '@site/src/components/UI/Button';

export default function SectionAboutText() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-12 lg:py-6">
      <div className="grid grid-cols-12 gap-[20px] items-center">
        <div className="relative col-span-12 lg:col-span-9 max-w-[489px] md:max-w-none mx-auto lg:pt-24">
          <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold mb-2">
            Kontakt
          </h1>
          <p className="text-md md:text-lg pt-6">
            Sie haben Fragen zum Data Hub Berlin oder möchten Pilotnutzer:in
            werden? Unser Team der Technologiestiftung Berlin nimmt Anfragen
            gern per Mail entgegen.
          </p>
          <a
            className="text-md md:text-lg pt-6 font-bold"
            href="mailto:datahub@ts.berlin"
          >
            datahub@ts.berlin
          </a>
          <p className="text-md md:text-lg pt-6">
            Technologiestiftung Berlin
            <br />
            Grunewaldstraße 61-62
            <br />
            10825 Berlin
            <br />
            Tel.: +49 30 209 69 99 - 0
          </p>
        </div>
      </div>
    </section>
  );
}
