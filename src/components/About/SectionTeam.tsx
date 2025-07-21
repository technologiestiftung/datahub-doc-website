import '../../css/tailwind.css';

export default function SectionTeam() {
  return (
    <section className="w-full md:py-12 px-16 py-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-5 items-center">
        {/* Title Section */}
        <div className="col-span-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Unser Team</h2>
          <p className="text-lg">
            Das sind die Menschen hinter dem Data Hub Berlin
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="col-span-12 lg:col-span-6">
          {/* Replace with actual image tag later */}
          <div className="w-full h-64 bg-gray-800 text-white flex items-center justify-center">
            [Bild]
          </div>
        </div>

        {/* Text Info */}
        <div className="col-span-12 lg:col-span-6">
          <div className="flex flex-col md:flex-row lg:flex-col md:px-20 lg:px-0">
            <div className="md:w-1/2">
              <p>
                <span className="font-semibold">Lisa Stubert</span>
                <br />
                Projektleitung Data Hub <br />
                CityLAB Berlin
                <br />
                Technologiestiftung Berlin
              </p>
            </div>
            <div className="md:w-1/2">
              <p>
                <span className="font-semibold">Martina Kuhhaupt</span>
                <br />
                Stv. Leiterin Smart City und <br />
                Datenmanagement Senatskanzlei Berlin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
