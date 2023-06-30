import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Fragment as Fragment12, jsx as jsx31, jsxs as jsxs21 } from "react/jsx-runtime";

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
  head: /* @__PURE__ */ jsxs21(Fragment12, {
    children: [
      /* @__PURE__ */ jsx31("meta", {
      name: "msapplication-TileColor",
      content: "#fff"
    }),
      /* @__PURE__ */ jsx31("meta", {
      httpEquiv: "Content-Language",
      content: "en"
    }),
      /* @__PURE__ */ jsx31("meta", {
      name: "description",
      content: "here"
    }),
      /* @__PURE__ */ jsx31("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }),
      /* @__PURE__ */ jsx31("meta", {
      name: "twitter:site",
      content: "@shuding_"
    }),
      /* @__PURE__ */ jsx31("meta", {
      property: "og:title",
      content: "hehr"
    }),
      /* @__PURE__ */ jsx31("meta", {
      property: "og:description",
      content: "here"
    }),
      /* @__PURE__ */ jsx31("meta", {
      name: "apple-mobile-web-app-title",
      content: "herh"
    }),
    ]
  }),
}

export default config
