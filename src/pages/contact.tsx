import React from 'react';
import Layout from '@theme/Layout';
import SectionContactText from '@site/src/components/Contact/SectionContactText';
import SectionAboutText from '@site/src/components/About/SectionAboutText';
import SectionTeam from '@site/src/components/About/SectionTeam';

export default function ContactPage() {
  return (
    <Layout>
      <SectionContactText />
    </Layout>
  );
}
