import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-4 border-yellow-400 py-8 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-12 gap-[20px]">
          {/* Left Side: Logos and Text */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <img
                src="/img/logos/datahub.svg"
                alt="Datahub Logo"
                className="h-10"
              />
              <img
                src="/img/logos/tsb.svg"
                alt="Technologiestiftung Berlin Logo"
                className="h-10"
              />
              <img
                src="/img/logos/senatskanzlei_berlin.svg"
                alt="Senatskanzlei Berlin Logo"
                className="h-10"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Ein Projekt der Technologiestiftung Berlin. Gefördert von der
              Senatskanzlei Berlin aus den Mitteln des Landes Berlin.
            </p>
          </div>

          {/* Right Side: Social & Links */}
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
            <div className="flex space-x-4">
              <a href="#">
                <img
                  src="/img/logos/github.svg"
                  alt="GitHub"
                  className="h-5 w-5"
                />
              </a>
              <a href="#">
                <img
                  src="/img/logos/facebook.svg"
                  alt="Facebook"
                  className="h-5 w-5"
                />
              </a>
              <a href="#">
                <img
                  src="/img/logos/linkedin.svg"
                  alt="LinkedIn"
                  className="h-5 w-5"
                />
              </a>
              <a href="#">
                <img
                  src="/img/logos/instagram.svg"
                  alt="Instagram"
                  className="h-5 w-5"
                />
              </a>
              <a href="#">
                <img
                  src="/img/logos/youtube.svg"
                  alt="YouTube"
                  className="h-5 w-5"
                />
              </a>
            </div>
            <div className="flex space-x-6 font-semibold text-black">
              <a href="#" className="underline underline-offset-8 decoration-2">
                Kontakt
              </a>
              <a href="#" className="underline underline-offset-8 decoration-2">
                Datenschutz
              </a>
              <a href="#" className="underline underline-offset-8 decoration-2">
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
