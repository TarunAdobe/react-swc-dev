'use client';

import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/src/themes.js';
import Header from './components/header';

export default function Home() {
  return (
    <sp-theme
      system="spectrum"
      color="light"
      scale="medium"
    >
      <Header />
    </sp-theme>
  );
}
