import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import React from "react";
import { j as jsx, a as jsxs } from "./chunk-3a77c9ea.js";
import { renderToString } from "react-dom/server";
import "react/jsx-runtime";
const Context = React.createContext(void 0);
function PageContextProvider({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsx(Context.Provider, {
    value: pageContext,
    children
  });
}
const PageShell$1 = "";
const logoUrl$1 = "/assets/stem-with-text.ade4913e.svg";
const index = "";
function PageShell({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsx(React.StrictMode, {
    children: /* @__PURE__ */ jsxs(PageContextProvider, {
      pageContext,
      children: [/* @__PURE__ */ jsx(Header, {
        children: /* @__PURE__ */ jsx(Logo, {})
      }), /* @__PURE__ */ jsx(Content, {
        children
      })]
    })
  });
}
function Header({
  children
}) {
  return /* @__PURE__ */ jsx("header", {
    style: {
      width: "100vw",
      display: "flex",
      alignItems: "center"
    },
    children
  });
}
function Content({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    id: "page-content",
    style: {
      padding: "0 20px",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ jsx("div", {
      children
    })
  });
}
function Logo() {
  return /* @__PURE__ */ jsx("a", {
    href: "/",
    children: /* @__PURE__ */ jsx("div", {
      style: {
        padding: "21px 35px"
      },
      children: /* @__PURE__ */ jsx("img", {
        src: logoUrl$1,
        height: 64,
        width: 160
      })
    })
  });
}
const logoUrl = "/assets/stem.89276af2.svg";
const passToClient = ["pageProps", "documentProps", "someAsyncProps"];
async function render(pageContext) {
  const {
    Page,
    pageProps
  } = pageContext;
  const page = renderToString(/* @__PURE__ */ jsx(PageShell, {
    pageContext,
    children: /* @__PURE__ */ jsx(Page, {
      ...pageProps
    })
  }));
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/svg+xml" href="${logoUrl}" />
        <title>Stem: Ejectable Integrations</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(page)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: (async () => {
      return {
        someAsyncProps: 42
      };
    })()
  };
}
export {
  passToClient,
  render
};
