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
            Ich habe eine Frage zum Data Hub Berlin
          </h5>
          <div className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4 flex-grow">
            <p>
              Werfen sie einen Blick in unseren {' '}
              <a href="docs/willkommen">Wissensspeicher</a>. Wird ihre Frage dort nicht beantwortet,
              schreiben Sie uns gerne eine E-Mail.
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
            Ich habe eine Projektidee für den Data Hub Berlin
          </h5>
          <div className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4 flex-grow">
            <p>
              Teilen Sie gerne Ihre Projektidee über unser kurzes Formular mit uns. 
              Wir prüfen Ihr Vorhaben und melden uns zeitnah bei Ihnen.
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
