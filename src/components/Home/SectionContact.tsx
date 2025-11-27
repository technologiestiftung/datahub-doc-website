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
      <div className="grid grid-cols-12 gap-[40px] items-stretch z-10 max-w-7xl mx-auto md:px-16 py-20">
        {/* Left */}
        <div className="relative col-span-12 lg:col-span-6 max-w-[489px] md:max-w-none mx-auto flex flex-col h-full">
          <h5 className="text-xl md:text-3xl font-bold">
            Ich habe eine Frage zum Datahub
          </h5>
          <div className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4 flex-grow">
            <p>
              Schauen Sie mal in den{' '}
              <a href="docs/willkommen">Wissensspeicher</a>. Sollte Ihr Anliegen
              dort nicht geklärt werden, kontaktieren Sie uns gern per Mail.
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
        <div className="relative col-span-12 lg:col-span-6 max-w-[489px] md:max-w-none mx-auto flex flex-col h-full">
          <h5 className="text-xl md:text-3xl font-bold">
            Ich habe habe eine Projektidee
          </h5>
          <div className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4 flex-grow">
            <p>
              Füllen Sie Ihre Projektidee in einem kurzen Formular aus und wir
              melden uns bei Ihnen.
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
