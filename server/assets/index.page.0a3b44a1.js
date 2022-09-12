import { I as IntegrationCatalog } from "./chunk-9b22da4e.js";
import { a as jsxs, F as Fragment, j as jsx } from "./chunk-3a77c9ea.js";
import "react/jsx-runtime";
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(LandingView, {}), /* @__PURE__ */ jsx(IntegrationCatalog, {})]
  });
}
function LandingView() {
  return /* @__PURE__ */ jsxs("div", {
    style: {
      textAlign: "center",
      marginBottom: 70
    },
    children: [/* @__PURE__ */ jsx("h1", {
      style: {
        fontSize: "3em",
        color: "#0c1b33",
        margin: 0
      },
      children: "Ejectable Integrations"
    }), /* @__PURE__ */ jsx(Tagline, {
      children: "Integrate tools without writing boilerplate code. Eject & customize integration code as the need arises."
    }), /* @__PURE__ */ jsx("div", {
      style: {
        textAlign: "center",
        fontSize: "1em",
        margin: 30
      },
      children: /* @__PURE__ */ jsxs("span", {
        style: {
          backgroundColor: "#eee",
          borderRadius: 10,
          padding: "10px 20px"
        },
        children: [/* @__PURE__ */ jsx("span", {
          className: "construction"
        }), " This website is work-in-progress."]
      })
    })]
  });
}
function Tagline({
  children
}) {
  return /* @__PURE__ */ jsx("p", {
    style: {
      fontSize: "1.2em",
      color: "#0c1b33dd",
      margin: "15px auto",
      maxWidth: 500
    },
    children
  });
}
export {
  Page
};
