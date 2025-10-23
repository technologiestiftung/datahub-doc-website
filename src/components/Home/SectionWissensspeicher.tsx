import { Button } from '@site/src/components/UI/Button';
import '../../css/tailwind.css';
import WissenSVG from '/img/wissen.svg';

export default function SectionWissensspeicher() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16">
      <div className="grid grid-cols-12 gap-[20px] items-center">
        <div className="order-2 lg:order-1 relative col-span-12 lg:col-span-6 max-w-[489px] md:max-w-none mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold">
            Eine lebendige Dokumentation
          </h3>
          <div className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4">
            <p>
              Im Wissensspeicher finden Interessierte alles Wissenswerte rund um
              den Data Hub Berlin: von den Funktionen der einzelnen
              Software-Bausteine über ihre Anwendungsmöglichkeiten bis hin zu
              Einblicken in laufende Pilotprojekte. Mit jeder neuen Erfahrung
              wächst die Dokumentation weiter und macht die Potenziale des
              Projekts sichtbar.
            </p>
            <Button label="Zum Wissensspeicher" slug="/docs/intro"></Button>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="order-1 lg:order-2 col-span-12 lg:col-span-6 text-center ">
          <div className="w-full h-auto overflow-hidden">
            <div className="max-w-[339px] mb-10 md:mb-0 mx-auto">
              <WissenSVG width={375} height={375}></WissenSVG>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
