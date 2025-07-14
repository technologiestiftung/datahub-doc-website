import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import MainTools from '@site/src/components/HomepageMainTools';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageLogin from '@site/src/components/HomepageLogin';
import AnimatedBlocks from '@site/src/components/AnimatedBlocks';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div className="bg-dh-background h-12 py-2 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={'ss' + i} className="px-4  whitespace-nowrap">
            PILOTPROJEKT 2025
          </span>
        ))}
      </div>

      <main>
        <AnimatedBlocks />
        <HomepageLogin />

        <MainTools />
        {/* <AnimatedBlocks /> */}
      </main>
    </Layout>
  );
}
