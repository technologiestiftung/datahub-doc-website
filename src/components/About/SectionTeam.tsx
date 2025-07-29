import '../../css/tailwind.css';

export default function SectionTeam() {
  return (
    <section className={`w-full bg-berlin-yellow `}>
      <div className="grid grid-cols-12 gap-[20px] items-center z-10 max-w-7xl mx-auto px-6 md:px-16 py-20">
        {/* Title Section */}
        <div className="col-span-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Unser Team</h2>
          <p className="text-xl md:text-3xl">
            Das sind die Menschen hinter dem Data Hub Berlin
          </p>
        </div>
        <div className="col-span-12">
          <img src="./img/team.png"></img>
        </div>
        <div className="col-span-12 text-center">
          <div className="flex flex-col md:flex-row justify-center md:gap-20 gap-2 text-md md:text-lg max-w-4xl mx-auto">
            <div className="text-left">
              <p>
                <span className="font-semibold">Lisa Stubert</span>
                <br />
                Projektleitung Data Hub Prototyp <br />
                CityLAB Berlin
                <br />
                Technologiestiftung Berlin
              </p>
            </div>
            <div className="text-left">
              <p>
                <span className="font-semibold">Martina Kuhaupt</span>
                <br />
                Stv. Leiterin Smart City <br />
                und Datenmanagement
                <br />
                Senatskanzlei Berlin, Abteilung 6
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
