import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import SectionTools from '@site/src/components/Home/SectionTools';
import SectionHeader from '@site/src/components/Home/SectionHeader';
import SectionLogin from '@site/src/components/Home/SectionLogin';
import AnimatedBlocks from '@site/src/components/AnimatedBlocks';
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
        <div className="flex whitespace-nowrap">
          {Array.from({ length: 50 }).map((_, i) => (
            <span key={'ss' + i} className="px-4 text-white font-bold">
              PILOTPROJEKT 2025
            </span>
          ))}
        </div>
      </div>
      <main>
        <AnimatedBlocks />
        <SectionCarousel />
        <SectionLogin />
        <SectionTools />
        <SectionWissensspeicher />
        <SectionContact bgColor="bg-berlin-yellow" />
      </main>
    </Layout>
  );
}
