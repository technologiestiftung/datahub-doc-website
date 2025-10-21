import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@site/src/components/UI/Button';
import '../../css/tailwind.css';

const slides = [
  {
    id: 1,
    title: 'Landesgleichstellung auf einen Blick',
    description:
      'Wie steht es um die Umsetzung des Landesgleichstellungsgesetzes in Berliner Behörden? Ein zentrales Dashboard ersetzt das bisher aufwendige manuelle Berichtswesen und ermöglicht eine datenbasierte Auswertung der Gleichstellungsmaßnahmen.',
    image: '/img/example1.svg',
    slug: 'https://odis-berlin.de/',
  },
  {
    id: 2,
    title: 'Akteure im Kiez sichtbar machen',
    description:
      'Wo engagieren sich Träger, Initiativen und soziale Programme in Neukölln? Mit einem Mapping-Tool können Akteure außerhalb der Verwaltung ihre Angebote selbst erfassen, aktuell halten und der Stadtplanung zur Verfügung stellen.',
    image: '/img/example2.svg',
    slug: 'https://odis-berlin.de/',
  },
  {
    id: 3,
    title: 'Bibliotheksdashboard Pankow',
    description:
      'Wie viele Medien wurden ausgeliehen? Wer leiht was? Wie können Gelder und Räume effizient genutzt werden? Das interaktive Dashboard für die Bezirksbibliotheken in Pankow, soll künftig Bedarfserfassung und Makulatur datenbasiert vereinfachen.',
    image: '/img/example3.svg',
    slug: 'https://odis-berlin.de/',
  },
  {
    id: 4,
    title: 'Effiziente Bezirksregionenprofile',
    description:
      'Wie entwickeln sich demographische und soziale Strukturen in Bezirksregionen? Mit Datenbanken und Dashboard-Templates wird der Prozess zur Erstellung zentraler Instrumente der Stadtentwicklung effizienter und einheitlicher.',
    image: '/img/example4.svg',
    slug: 'https://odis-berlin.de/',
  },
];

export default function SectionCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [scrollLock, setScrollLock] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const scrollRef = useRef(null);

  const scrollToIndex = (index: number): void => {
    const container = scrollRef.current;
    const child = container?.children[index];

    if (container && child) {
      const scrollOffset =
        child.offsetLeft - container.offsetWidth / 2 + child.offsetWidth / 2;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const targetScroll = Math.min(scrollOffset, maxScroll);

      setScrollLock(true);
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setScrollLock(false);
      }, 3000);
    }

    setCarouselIndex(index);
  };

  useEffect(() => {
    const startIndex = 1;
    setCarouselIndex(startIndex);
    requestAnimationFrame(() => scrollToIndex(startIndex));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (scrollLock) return;

      const containerRect = container.getBoundingClientRect();
      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const childElement = child as HTMLElement;
        const childRect = childElement.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const containerCenter = containerRect.left + containerRect.width / 2;
        const distance = Math.abs(childCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCarouselIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollLock]);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => {
        let nextIndex = prevIndex;

        if (direction === 'forward') {
          if (prevIndex < slides.length - 1) {
            nextIndex = prevIndex + 1;
          } else {
            setDirection('backward');
            nextIndex = prevIndex - 1;
          }
        } else {
          if (prevIndex > 0) {
            nextIndex = prevIndex - 1;
          } else {
            setDirection('forward');
            nextIndex = prevIndex + 1;
          }
        }

        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering, direction]);

  return (
    <section className="py-20 bg-berlin-yellow mb-12 lg:mb-20">
      <div className="mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            Erste Schritte mit realen Anwendungsfällen
          </h2>
          <p className="text-xl md:text-3xl leading-6 md:leading-relaxed px-[10%]">
            Erste Pilotprojekte zeigen, wie Senatsverwaltungen und Bezirksämter
            den Data Hub Schritt für Schritt in der Praxis implementieren.
          </p>
        </div>

        {/* Scrollable container mit horizontalem Padding */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory space-x-6 px-[20%] hide-scrollbar scroll-smooth"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${
                index !== carouselIndex ? 'opacity-50 ' : ''
              } w-[150%] md:w-[100%] lg:w-[746px] lg:px-6 md:px-3 snap-center cursor-pointer flex-shrink-0 transition-transform hover:scale-[1.01] !max-w-[746px]`}
              onClick={() => scrollToIndex(index)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <SlideCard data={slide} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === carouselIndex ? 'bg-black' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SlideCard({ data }) {
  return (
    <div className="bg-white h-full p-6 px-10 lg:px-12 lg:pt-12 lg:pb-10">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <img
          src={data.image}
          alt={data.title}
          className="w-24 h-24 object-contain"
        />
        <div className="text-left w-full break-words">
          <h3 className="text-xl md:text-3xl font-bold leading-6 lg:leading-relaxed text-berlin-black">
            {data.title}
          </h3>
          <p className="mb-8 text-sm md:text-lg leading-6 md:leading-relaxed text-berlin-black">
            {data.description}
          </p>
          <Button label="Mehr erfahren" slug={data.slug} />
        </div>
      </div>
    </div>
  );
}
