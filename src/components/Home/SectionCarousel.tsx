import React, { useRef, useEffect } from 'react';
import { Button } from '@site/src/components/UI/Button';
import '../../css/tailwind.css';

const slides = [
  {
    id: 1,
    title: 'Bibliotheksdashboard Pankow',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    image: '/img/blocks.svg',
    slug: 'about',
  },
  {
    id: 2,
    title: 'Masterdata',
    description:
      'Lorem ipsum dolor sit amet, adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    image: '/img/blocks.svg',
    slug: 'about',
  },
  {
    id: 3,
    title: 'Data Explorer',
    description:
      'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus.',
    image: '/img/blocks.svg',
    slug: 'about',
  },
];

export default function SectionCarousel() {
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

      container.scrollTo({
        left: container.scrollLeft + scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  // Scroll to center slide on mount
  useEffect(() => {
    const middleIndex = Math.floor(slides.length / 2);
    scrollToIndex(middleIndex);
  }, []);

  return (
    <section className="py-12 px-4 bg-dhub-background">
      <div className="mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            Drei Show Use Cases
          </h2>
          <p className="text-lg">Hier kommt der Data Hub bereits zum Einsatz</p>
        </div>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory space-x-6 px-2 md:px-0 hide-scrollbar scroll-smooth"
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="w-[90%] sm:w-[80%] snap-center cursor-pointer flex-shrink-0 transition-transform hover:scale-[1.01]"
              onClick={() => scrollToIndex(index)}
            >
              <SlideCard data={slide} />
            </div>
          ))}
        </div>

        {/* Mobile Dots */}
        <div className="mt-6 flex justify-center gap-3 md:hidden">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-500"
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
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            {data.title}
          </h3>
          <p className="mb-4 text-sm md:text-base text-gray-600">
            {data.description}
          </p>
          <Button label="Mehr erfahren" slug={data.slug} accented={false} />
        </div>
      </div>
    </div>
  );
}
