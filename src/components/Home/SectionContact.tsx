import '../../css/tailwind.css';
import { Button } from '@site/src/components/UI/Button';

type SectionContactProps = {
  bgColor?: string;
};

export default function SectionContact({
  bgColor = 'bg-white',
}: SectionContactProps) {
  return (
    <section className={`w-full ${bgColor} py-8 md:py-16 px-6 md:px-0`}>
      <div className="mx-auto md:px-16">
        <div className="grid grid-cols-12 gap-[20px] max-w-[489px] lg:max-w-none mx-auto lg:mx-0">
          <div className="col-span-12">
            <h3 className="text-2xl md:text-5xl font-bold">
              Nimm Kontakt zum Data Hub Team auf
            </h3>
            <p className="text-md md:text-xl">
              Du willst mehr über den Data Hub erfahren oder mit uns einen
              möglichen Anwendungsfall besprechen? <br />
              Nimm Kontakt zum Data Hub Team auf!
            </p>
            <Button
              label="Kontaktiere uns"
              slug="https://www.vbb.de/fahrinfo/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
