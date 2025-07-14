import '../../css/tailwind.css';

export default function HomepageLogin() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-16 py-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Datenprojekte ohne Dienstleister. <br></br>
            Erhalte auch du deinen Zugang!
          </h1>
          <div className="text-lg leading-relaxed space-y-4">
            <p>
              Datenprojekte lassen sich jetzt in der Berliner Verwaltung ganz
              ohne Dienstleister umsetzen. Schnell, einfach und nachhaltig. Ein
              zentraler Log-in bietet dauerhaften, sicheren Zugang zum Open
              Source Softwareportal, das stetig durch die aktive Community
              gepflegt und durch die Stadt erweitert wird.{' '}
            </p>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="">
          <img src="/img/login.svg" alt="Buttons taht spell L O G I N" />
        </div>
      </div>
    </div>
  );
}
