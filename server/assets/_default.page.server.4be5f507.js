import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import React, { useContext } from "react";
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
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
const PageShell$1 = "";
function Link({
  href,
  children
}) {
  const pageContext = usePageContext();
  const className = ["navigation-link", pageContext.urlPathname === href && "is-active"].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("a", {
    href,
    className,
    children
  });
}
const logoUrl$1 = "/assets/stem-with-text.ade4913e.svg";
const index = "";
function PageShell({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsx(React.StrictMode, {
    children: /* @__PURE__ */ jsxs(PageContextProvider, {
      pageContext,
      children: [/* @__PURE__ */ jsxs(Header, {
        children: [/* @__PURE__ */ jsx(Logo, {}), /* @__PURE__ */ jsx(Link, {
          href: "/about",
          children: "About"
        })]
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
      alignItems: "center",
      border: "2px solid #eee"
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
      padding: 20,
      paddingBottom: 50,
      display: "flex",
      justifyContent: "center",
      marginTop: 10
    },
    children: /* @__PURE__ */ jsx("div", {
      children
    })
  });
}
function Logo() {
  return /* @__PURE__ */ jsx("div", {
    style: {
      padding: 10
    },
    children: /* @__PURE__ */ jsx("a", {
      href: "/",
      children: /* @__PURE__ */ jsx("img", {
        src: logoUrl$1,
        height: 64,
        width: 160
      })
    })
  });
}
function getPageTitle(pageContext) {
  const title = (pageContext.exports.documentProps || {}).title || (pageContext.documentProps || {}).title || "Demo";
  return title;
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
  const title = getPageTitle(pageContext);
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="icon" type="image/svg+xml" href="${logoUrl}" />
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
