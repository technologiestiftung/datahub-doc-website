import React from 'react';
import Layout from '@theme/Layout';
import SectionContact from '@site/src/components/Home/SectionContact';
import SectionAboutText from '@site/src/components/About/SectionAboutText';

export default function MyReactPage() {
  return (
    <Layout>
      <SectionAboutText />
      <SectionContact />
    </Layout>
  );
}
