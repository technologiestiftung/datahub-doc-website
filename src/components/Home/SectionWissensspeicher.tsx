import '../../css/tailwind.css';
import { Button } from '@site/src/components/UI/Button';

export default function SectionWissensspeicher() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-16 py-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
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
        <div className="">
          <img src="/img/wissen.svg" alt="Colorful blocks" />
        </div>
      </div>
    </div>
  );
}
