import '../../css/tailwind.css';
import { Button } from '@site/src/components/UI/Button';

type SectionContactProps = {
  bgColor?: string;
};

export default function SectionContact({
  bgColor = 'bg-white',
}: SectionContactProps) {
  return (
    <section className={`w-full ${bgColor} `}>
      <div className="grid grid-cols-12 gap-[20px] items-center z-10 max-w-7xl mx-auto px-6 md:px-16 py-20">
        <div className="relative col-span-12 lg:col-span-6 max-w-[489px] md:max-w-none mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold">Nimm Kontakt auf!</h3>
          <div className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4">
            <p>
              Du willst mehr über den Data Hub erfahren oder mit uns einen
              möglichen Anwendungsfall besprechen? Nimm Kontakt zum Data Hub
              Team auf!
            </p>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="col-span-12 lg:col-span-6">
          {' '}
          <div className="max-w-[495px] mx-auto flex justify-center">
            <Button label="Kontaktiere uns" slug="mailto:datahub@ts.berlin" />
          </div>
        </div>
      </div>
    </section>
  );
}
