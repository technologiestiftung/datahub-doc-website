import '../../css/tailwind.css';
import SectionContact from '@site/src/components/Home/SectionContact';

export default function SectionAboutText() {
  return (
    <>
      <section className={`w-full `}>
        <div className=" max-w-7xl mx-auto md:px-16 pt-24 px-6">
          <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold mb-2">
            Nehmen Sie Kontakt auf!!!!
          </h1>
          <p className="text-xl md:text-3xl pt-6 mb-0">
            Das Team der{' '}
            <a href="https://www.technologiestiftung-berlin.de/">
              Technologiestiftung Berlin
            </a>{' '}
            steht ihnen mit Antworten zur Seite.
          </p>
        </div>
      </section>
      <SectionContact />
    </>
  );
}
