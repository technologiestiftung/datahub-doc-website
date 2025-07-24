import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@site/src/components/UI/Button';
import '../../css/tailwind.css';

const slides = [
  {
    id: 1,
    title: 'Landesgleichstellung',
    description:
      'Wie steht es um die Umsetzung des Landesgleichstellungsgesetzes in Berliner Einrichtungen? Ein zentrales Dashboard ersetzt das bisher manuelle Berichtswesen und ermöglicht eine Auswertung der Gleichstellungsmaßnahmen.',
    image: '/img/example1.svg',
    slug: 'https://odis-berlin.de/',
  },
  {
    id: 2,
    title: 'Akteure im Kiez sichtbar machen',
    description:
      'Wo engagieren sich Träger, Initiativen und soziale Programme in Neukölln? Mit einem Mapping-Tool können Akteure außerhalb der Verwaltung ihre Angebote selbst erfassen und aktuell halten.',
    image: '/img/example2.svg',
    slug: 'https://odis-berlin.de/',
  },
  {
    id: 3,
    title: 'Bibliotheksdashboard Pankow',
    description:
      'Wie viele Medien wurden ausgeliehen? Welche Standorte sind besonders gefragt? Das interaktive Dashboard für die Bezirksbibliotheken in Pankow bereitet aktuelle Nutzungszahlen übersichtlich auf.',
    image: '/img/example3.svg',
    slug: 'https://odis-berlin.de/',
  },
  {
    id: 4,
    title: 'Effiziente Bezirksregionenprofile',
    description:
      'Bezirksregionenprofile sind ein zentrales Instrument der Stadtentwicklung. Mit Datenbanken und Dashboard-Templates wird der Prozess zur Erstellung effizienter und einheitlicher.',
    image: '/img/example4.svg',
    slug: 'https://odis-berlin.de/',
  },
];

export default function SectionCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [scrollLock, setScrollLock] = useState(false);
  const scrollRef = useRef(null);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    const child = container?.children[index];

    if (container && child) {
      const containerRect = container.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();
      const offset = childRect.left - containerRect.left;
      const scrollOffset =
        offset - container.offsetWidth / 2 + child.offsetWidth / 2;

      setScrollLock(true);
      container.scrollTo({
        left: container.scrollLeft + scrollOffset,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setScrollLock(false);
      }, 3000);
    }

    setCarouselIndex(index);
  };

  useEffect(() => {
    const middleIndex = Math.floor(slides.length / 2);
    setCarouselIndex(middleIndex);
    scrollToIndex(middleIndex);
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
        const childRect = child.getBoundingClientRect();
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

  // Auto-slide logic
  useEffect(() => {
    let autoSlideInterval;
    let userInteractionTimeout;

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        setCarouselIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % slides.length;
          scrollToIndex(nextIndex);
          return nextIndex;
        });
      }, 1000);
    };

    const resetUserInteraction = () => {
      clearInterval(autoSlideInterval);
      clearTimeout(userInteractionTimeout);

      userInteractionTimeout = setTimeout(() => {
        startAutoSlide();
      }, 1000);
    };

    const interactionEvents = ['click', 'mousemove', 'touchstart', 'scroll'];
    interactionEvents.forEach((event) =>
      scrollRef.current.addEventListener(event, resetUserInteraction)
    );

    startAutoSlide();

    return () => {
      clearInterval(autoSlideInterval);
      clearTimeout(userInteractionTimeout);
      if (scrollRef.current) {
        interactionEvents.forEach((event) =>
          scrollRef.current.removeEventListener(event, resetUserInteraction)
        );
      }
    };
  }, []);

  return (
    <section className="py-12 bg-berlin-yellow">
      <div className="mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-5xl font-bold">
            Erste Anwendungsfälle
          </h2>
          <p className="text-xl md:text-3xl">
            So nutzt die Berliner Verwaltung den Data Hub bereits heute
          </p>
        </div>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory space-x-6 px-2 md:px-0 hide-scrollbar scroll-smooth"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${index !== carouselIndex ? 'opacity-50 ' : ''} ${
                index === 0 ? 'ml-[25%] ' : ''
              }${
                index === 3 ? '!mr-[25%] ' : ''
              }w-[90%] sm:w-[70%] lg:w-[746px] snap-center cursor-pointer flex-shrink-0 transition-transform hover:scale-[1.01] !max-w-[746px]`}
              onClick={() => scrollToIndex(index)}
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
    <div className="bg-white p-6 h-full">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={data.image}
          alt={data.title}
          className="w-24 h-24 object-contain"
        />
        <div className="text-left w-full break-words">
          <h3 className="text-xl md:text-3xl font-bold text-gray-800">
            {data.title}
          </h3>
          <p className="mb-4 text-base md:text-lg text-gray-600">
            {data.description}
          </p>
          <Button label="Mehr erfahren" slug={data.slug} accented={false} />
        </div>
      </div>
    </div>
  );
}
