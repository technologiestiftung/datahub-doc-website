import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-yellow-400 py-8 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Left Side: Logos and Text */}
        <div className="md:w-2/3">
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
              alt="Senatskanlei Berlin Logos"
              className="h-10"
            />
          </div>
          <p className="text-gray-600 text-sm">
            Ein Projekt der Technologiestiftung Berlin. Gefördert von der
            Senatskanzlei Berlin aus den Mitteln des Landes Berlin.
          </p>
        </div>

        {/* Right Side: Social & Links */}
        <div className="md:w-1/3 flex flex-col items-start md:items-end gap-4">
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
                src="/img/icon-facebook.png"
                alt="Facebook"
                className="h-5 w-5"
              />
            </a>
            <a href="#">
              <img
                src="/img/icon-linkedin.png"
                alt="LinkedIn"
                className="h-5 w-5"
              />
            </a>
            <a href="#">
              <img
                src="/img/icon-instagram.png"
                alt="Instagram"
                className="h-5 w-5"
              />
            </a>
            <a href="#">
              <img
                src="/img/icon-youtube.png"
                alt="YouTube"
                className="h-5 w-5"
              />
            </a>
          </div>
          <div className="flex space-x-6 font-semibold text-black">
            <a href="#" className="hover:underline">
              Kontakt
            </a>
            <a href="#" className="hover:underline">
              Datenschutz
            </a>
            <a href="#" className="hover:underline">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
