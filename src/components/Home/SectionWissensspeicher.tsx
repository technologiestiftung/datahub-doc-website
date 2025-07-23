import { Button } from '@site/src/components/UI/Button';
import '../../css/tailwind.css';
import WissenSVG from '/img/wissen.svg';

export default function SectionWissensspeicher() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16  py-6">
      <div className="grid grid-cols-12 gap-[20px] items-center">
        <div className="relative col-span-12 lg:col-span-6 max-w-[489px] md:max-w-none mx-auto">
          <h3 className="md:text-2xl font-bold">Wissensspeicher</h3>
          <div className="text-lg leading-relaxed space-y-4">
            <p>
              Der Wissensspeicher ist eine wachsende Online-Dokumentation. Hier
              finden sich weitere Informationen zu den einzelnen Bausteinen,
              Erläuterungen zu bereits umgesetzten Anwendungsfällen, sowie
              praktische Hilfestellung zur Umsetzung von Datenvorhaben im Data
              Hub. So werden Informationen und Erfahrungen geteilt und wirksam
              eingesetzt.
            </p>
            <Button label="zum Wissensspeicher" slug="/docs/intro"></Button>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="col-span-12 lg:col-span-6 text-center ">
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
