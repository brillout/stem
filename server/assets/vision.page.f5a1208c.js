import { I as IntegrationCatalog } from "./chunk-9b22da4e.js";
import { a as jsxs, F as Fragment, j as jsx } from "./chunk-3a77c9ea.js";
import "react/jsx-runtime";
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(LandingView, {}), /* @__PURE__ */ jsx(IntegrationCatalog, {
      vision: true
    })]
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
      children: "Stem's Vision"
    }), /* @__PURE__ */ jsx(Tagline, {
      children: "The vision is to implement integrations such as following list. As we implement these, Stem increasingly becomes a WordPress alternative."
    }), /* @__PURE__ */ jsx(Tagline, {
      children: "At this point, Stem becomes the first framework that is liked by both developers and business users."
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
      maxWidth: 710
    },
    children
  });
}
export {
  Page
};
