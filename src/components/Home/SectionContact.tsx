import '../../css/tailwind.css';
import { Button } from '@site/src/components/UI/Button';

type SectionContactProps = {
  bgColor?: string;
};

export default function SectionContact({
  bgColor = 'bg-white',
}: SectionContactProps) {
  return (
    <section className={`w-full ${bgColor}`}>
      <div className="flex flex-col lg:flex-row gap-[40px] items-stretch z-10 max-w-7xl mx-auto md:px-16 py-20 px-6">
        {/* Left */}
        <div className="relative flex-1 max-w-[489px] md:max-w-none mx-auto flex flex-col h-full">
          <h5 className="text-xl md:text-3xl font-bold">
            Ich habe eine Frage
          </h5>
          <div className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4 flex-grow">
            <p>
              Unser {' '}
              <a href="docs/willkommen">Wissensspeicher</a> versammelt die wichtigsten Informationen zum Data Hub Berlin. Bei weiteren Fragen freuen wir uns über eine Nachricht per E-Mail.
            </p>
            <div className="pt-2">
              <Button
                label="Fragen per E-Mail senden"
                slug="mailto:datahub@ts.berlin"
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex-1 max-w-[489px] md:max-w-none mx-auto flex flex-col h-full">
          <h5 className="text-xl md:text-3xl font-bold">
            Ich habe eine Projektidee 
          </h5>
          <div className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4 flex-grow">
            <p>
              Zur Einreichung von Projektideen für den Data Hub Berlin bitten wir darum, unser Formular zu nutzen.   
              Wir prüfen die Projektanfragen und melden uns zeitnah.
            </p>
            <div className="pt-2">
              <Button
                label="Projektanfrage starten"
                slug="https://citylabberlin.typeform.com/datahub-projekt"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
