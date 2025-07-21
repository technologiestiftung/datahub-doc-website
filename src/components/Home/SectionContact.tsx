import '../../css/tailwind.css';
import { Button } from '@site/src/components/UI/Button';

type SectionContactProps = {
  bgColor?: string;
};

export default function SectionContact({
  bgColor = 'bg-white',
}: SectionContactProps) {
  return (
    <section className={`w-full ${bgColor} py-8 md:py-12 px-16 md:px-0`}>
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-12 gap-[20px]">
          <div className="col-span-12">
            <h3 className="md:text-2xl font-bold">Kontakt</h3>
            <p>
              Du willst mehr über den Data Hub erfahren oder mit uns einen
              möglichen Anwendungsfall besprechen? <br />
              Nimm Kontakt zum Data Hub Team auf!
            </p>
            <Button
              label="Kontaktiere uns (datahub@ts.berlin)"
              slug="https://www.vbb.de/fahrinfo/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
