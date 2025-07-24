import React from 'react';
import Layout from '@theme/Layout';
import Bausteine from '@site/src/components/Bausteine/Bausteine';
import SectionContact from '@site/src/components/Home/SectionContact';
import SectionWissensspeicher from '@site/src/components/Home/SectionWissensspeicher';

export default function BausteinePage() {
  return (
    <Layout>
      <Bausteine />
      <SectionWissensspeicher />
      <SectionContact bgColor="bg-berlin-yellow" />
    </Layout>
  );
}
