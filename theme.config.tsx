import React, { Fragment } from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – wobbl3 Docs'
    }
  },
  logo: <span>Wobbl3 Docs</span>,
  project: {
    link: 'https://github.com/spobwoode/wobbl3-docs/',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/spobwoode/wobbl3-docs/tree/main/',
  footer: {
    text: 'Wobbl3 Docs',
  },
  head: (
    <Fragment>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="%s – wobbl3 Docs" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta property="og:title" content="%s – wobbl3 Docs" />
      <meta property="og:description" content="%s – wobbl3 Docs" />
      <meta name="apple-mobile-web-app-title" content="%s – wobbl3 Docs" />
    </Fragment>
  ),
}

export default config;
