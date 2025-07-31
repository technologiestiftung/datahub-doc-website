import { Button } from '@site/src/components/UI/Button';
import '../../css/tailwind.css';
import WissenSVG from '/img/wissen.svg';

export default function SectionWissensspeicher() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16  py-6">
      <div className="grid grid-cols-12 gap-[20px] items-center">
        <div className="order-2 lg:order-1 relative col-span-12 lg:col-span-6 max-w-[489px] md:max-w-none mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold">Wissensspeicher</h3>
          <div className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4">
            <p>
              Der Wissensspeicher ist eine wachsende Online-Dokumentation. Hier
              finden sich weitere Informationen zu den einzelnen Bausteinen,
              Erläuterungen zu bereits umgesetzten Anwendungsfällen, sowie
              praktische Hilfestellung zur Umsetzung von Datenvorhaben im Data
              Hub. So werden Informationen und Erfahrungen geteilt und wirksam
              eingesetzt.
            </p>
            <Button label="Zum Wissensspeicher" slug="/docs/intro"></Button>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="order-1 lg:order-2 col-span-12 lg:col-span-6 text-center ">
          <div className="w-full h-auto overflow-hidden">
            <div className="max-w-[439px] mx-auto">
              <WissenSVG></WissenSVG>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
