import '../../css/tailwind.css';
import { Button } from '@site/src/components/UI/Button';

export default function SectionContact() {
  return (
    <section className="w-full bg-berlin-yellow py-4 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-12 gap-[20px]">
          <div className="col-span-12 lg:col-span-8">
            <h3 className="md:text-2xl font-bold">Kontakt</h3>
            <p>
              Du willst den Data Hub nutzen oder einen Use case vorschlagen?
              Nimm Kontakt zum Data Hub Team auf! Wir unterstützen dich auf dem
              Weg zu deinem Berliner Datenprojekt.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-start lg:items-end">
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
