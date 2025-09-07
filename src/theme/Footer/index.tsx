import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-4 border-yellow-400 pb-12 pt-24 text-sm text-berlin-black">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-[20px]">
          {/* Left Side: Logos and Text */}
          <div className="md:col-span-12 lg:col-span-8">
            <div className="flex flex-col lg:flex-row flex-wrap gap-2 items-start lg:items-center mb-4">
              <img
                src="/img/logos/DataHub-Logo-Prototyp-transparent-RGB.svg"
                alt="Datahub Logo"
                className="h-10 pr-10 my-2"
              />
              <img
                src="/img/logos/tsb.svg"
                alt="Technologiestiftung Berlin Logo"
                className="h-10 pr-10 my-2"
              />
              <img
                src="/img/logos/senatskanzlei_berlin.svg"
                alt="Senatskanzlei Berlin Logo"
                className="h-10 my-2"
              />
            </div>
            <p className="text-berlin-black text-base pt-6">
              Ein Projekt der Technologiestiftung Berlin. Gefördert von der
              Senatskanzlei Berlin aus den Mitteln des Landes Berlin.
            </p>
          </div>

          {/* Right Side: Social & Links */}
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end gap-4 lg:gap-10 mt-auto pb-6 lg:pb-12">
            <div className="flex space-x-4 pt-2">
              <a href="#">
                <img
                  src="/img/logos/github.svg"
                  alt="GitHub"
                  className="h-6 w-6"
                />
              </a>
              <a href="#">
                <img
                  src="/img/logos/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a href="#">
                <img
                  src="/img/logos/linkedin.svg"
                  alt="LinkedIn"
                  className="h-6 w-6"
                />
              </a>
              <a href="#">
                <img
                  src="/img/logos/instagram.svg"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
              <a href="#">
                <img
                  src="/img/logos/youtube.svg"
                  alt="YouTube"
                  className="h-6 w-6"
                />
              </a>
            </div>
            <div className="flex space-x-6 font-semibold text-berlin-black text-base">
              <a
                href="../contact"
                className="underline underline-offset-8 decoration-2"
              >
                Kontakt
              </a>
              <a
                href="https://www.technologiestiftung-berlin.de/datenschutz"
                className="underline underline-offset-8 decoration-2"
              >
                Datenschutz
              </a>
              <a
                href="https://www.technologiestiftung-berlin.de/impressum"
                className="underline underline-offset-8 decoration-2"
              >
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
