import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import SectionTools from '@site/src/components/Home/SectionTools';
import SectionHeader from '@site/src/components/Home/SectionHeader';
import SectionLogin from '@site/src/components/Home/SectionLogin';
import SectionScrollBoxes from '@site/src/components/Home/SectionScrollBoxes';
import SectionCarousel from '@site/src/components/Home/SectionCarousel';
import SectionContact from '@site/src/components/Home/SectionContact';
import SectionWissensspeicher from '@site/src/components/Home/SectionWissensspeicher';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <SectionHeader />
      <div className="bg-berlin-black py-4 overflow-hidden w-full">
        <div className="whitespace-nowrap text-white font-bold text-xl md:text-3xl animate-marquee">
          Der Data Hub läuft derzeit als prototypisches Pilotprojekt der
          Technologiestiftung Berlin und der Senatskanzlei Berlin.
        </div>
      </div>
      <main>
        <SectionScrollBoxes />
        <SectionCarousel />
        <SectionLogin />
        <SectionTools />
        <SectionWissensspeicher />
        <SectionContact bgColor="bg-berlin-yellow" />
      </main>
    </Layout>
  );
}
