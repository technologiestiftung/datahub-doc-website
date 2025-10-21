import '../../css/tailwind.css';
import BlockboxSVG from '/img/blockbox.svg';

export default function HomepageLogin() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16">
      <div className="grid grid-cols-12 gap-[20px] items-center">
        <div className="order-2 lg:order-1 relative col-span-12 lg:col-span-6 max-w-[489px] md:max-w-none mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold lg:pt-6 tracking-wide">
            Herzstück des Berliner Datenmanagements
          </h2>
          <div className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4">
            <p>
              Der Data Hub ergänzt bestehende Systeme und dockt dort an, wo
              Daten weiterverarbeitet, verknüpft oder gezielt geteilt werden
              sollen, um daraus neue Datenprodukte zu entwickeln. Eine
              Berichtigungssteuerung stellt sicher, dass Daten und Projekte
              geschützt sind. So entsteht die technische Grundlage, Daten
              professionell aufzubereiten, zu analysieren und für
              evidenzbasierte Entscheidungen zu nutzen – und zugleich ein Motor
              für Innovation, Zusammenarbeit und Souveränität.
            </p>
            {/*             <p>
              <strong>
                2025 läuft der Data Hub noch als Prototyp mit ausgewählten
                Pilotnutzenden der Berliner Verwaltung.
              </strong>
            </p> */}
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="order-1 lg:order-2 col-span-12 lg:col-span-6">
          {' '}
          <div className="max-w-[495px] max-h-[495px] mx-auto">
            <BlockboxSVG></BlockboxSVG>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 col-span-12 lg:col-span-6">
        <img
          src="/img/landing_page_uebersichtgrafik.png"
          alt="Darstellung des Berliner Data Hub"
          className="lg:w-5/6 xl:w-3/4 h-auto rounded-2xl border border-gray-200 mx-auto block"
        />
      </div>
    </section>
  );
}
