import '../../css/tailwind.css';

// import { Button } from '@site/src/components/UI/Button';
const toolList = [
  { name: 'grafana', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
  { name: 'master_portal', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
  { name: 'superset', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
  { name: 'appsmith', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
  { name: 'airflow', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
  { name: 'jupiter', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
  { name: 'gravitee', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
  { name: 'node_red', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
  { name: 'geoserver', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
  { name: 'minio', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
  { name: 'pgadmin', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
  { name: 'piveau', size: 'w-32 h-32', bgColor: 'berlin-yellow' },
];

export default function Bausteine() {
  return (
    <section className="w-full md:py-12 px-6 md:px-16 py-6">
      <div className="max-w-7xl ">
        <div className="col-span-12 max-w-[489px] lg:max-w-[873px] max-w-[489px] mx-auto lg:mx-0">
          <h1 className="pt-12 text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            Data Hub Bausteine
          </h1>
          <h3 className="text-xl md:text-3xl font-normal mb-8">
            Alle Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
            id ipsam.
          </h3>

          <div>
            <div className="grid grid-cols-12 gap-[20px] mb-16">
              {toolList.map((d) => {
                return (
                  <div
                    className={`bg-${d.bgColor} col-span-6 sm:col-span-4 lg:col-span-3 flex items-center justify-center h-20`}
                    key={d.name}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={`img/logos/${d.name}.svg`}
                        alt={d.name}
                        className={d.size}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
