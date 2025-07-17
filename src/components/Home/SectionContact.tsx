import '../../css/tailwind.css';

import { Button } from '@site/src/components/UI/Button';

export default function SectionContact() {
  return (
    <section className="relative max-w-7xl mx-auto px-16 py-4 md:py-12 bg-berlin-yellow">
      <h3 className="md:text-2xl font-bold">Kontakt</h3>
      <p>
        Du willst den Data Hub nutzen oder einen Use case vorschlagen? Nimm
        Kontakt zum Data Hub Team auf! Wir unterstützen dich auf dem weg zu
        deinem Berliner Datenprojekt.
      </p>

      <Button
        label="Kontaktiere uns (datahub@ts.berlin)"
        slug="https://www.vbb.de/fahrinfo/"
      ></Button>
    </section>
  );
}
