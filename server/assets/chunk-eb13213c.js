import { a as jsxs, j as jsx, F as Fragment } from "./chunk-3a77c9ea.js";
const IntegrationCatalog$1 = "";
function Integration({
  integrationSpec
}) {
  const {
    name,
    description,
    logoUrl
  } = integrationSpec;
  return /* @__PURE__ */ jsxs("div", {
    className: "div-integration",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "div-header",
      children: [/* @__PURE__ */ jsx("img", {
        src: logoUrl
      }), " ", /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("code", {
          children: name
        })
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "div-description",
      children: description
    })]
  });
}
const ReactLogo = "/assets/react.274eee9a.svg";
const ReactAdminLogo = "/assets/react-admin.60dc15ff.svg";
const NextAuthLogo = "/assets/NextAuth.c0001ba4.png";
const PrismaLogo = "/assets/prisma.502f639a.png";
const StripeLogo = "data:image/png;base64,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";
const TinaCMSLogo = "/assets/TinaCMS.93ab92cb.png";
const VueLogo = "/assets/vue.606c4449.svg";
const VitePluginSsrLogo = "/assets/vite-plugin-ssr.5177312a.svg";
const GmailLogo = "/assets/gmail.de129dff.svg";
const TelefuncLogo = "/assets/telefunc.6a5581b5.svg";
const Vue = () => /* @__PURE__ */ jsx("a", {
  href: "https://vuejs.org/",
  children: "Vue"
});
const ReactLink = () => /* @__PURE__ */ jsx("a", {
  href: "https://reactjs.org/",
  children: "React"
});
const Vps = () => /* @__PURE__ */ jsx("a", {
  href: "https://vite-plugin-ssr.com",
  children: "vite-plugin-ssr"
});
const Vite = () => /* @__PURE__ */ jsx("a", {
  href: "https://vitejs.dev/",
  children: "Vite"
});
const data = [{
  name: "stem-react",
  vision: false,
  logoUrl: ReactLogo,
  description: /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(ReactLink, {}), " integration for ", /* @__PURE__ */ jsx(Vite, {}), " + ", /* @__PURE__ */ jsx(Vps, {}), "."]
  })
}, {
  name: "stem-vue",
  vision: false,
  logoUrl: VueLogo,
  description: /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Vue, {}), " integration for ", /* @__PURE__ */ jsx("a", {
      href: "https://vitejs.dev/",
      children: "Vite"
    }), " + ", /* @__PURE__ */ jsx("a", {
      href: "https://vite-plugin-ssr.com",
      children: "vite-plugin-ssr"
    }), "."]
  })
}, {
  name: "vite-plugin-ssr",
  vision: false,
  logoUrl: VitePluginSsrLogo,
  description: /* @__PURE__ */ jsxs(Fragment, {
    children: ["Frontend Framework with ", /* @__PURE__ */ jsx(Vps, {}), "."]
  })
}, {
  name: "stem-cms",
  description: /* @__PURE__ */ jsxs(Fragment, {
    children: ["CMS with ", /* @__PURE__ */ jsx("a", {
      href: "https://tina.io/",
      children: "TinaCMS"
    }), "."]
  }),
  provides: [
    "CMS"
  ],
  requires: ["database"],
  vision: true,
  logoUrl: TinaCMSLogo
}, {
  name: "stem-stripe",
  description: /* @__PURE__ */ jsxs(Fragment, {
    children: ["Payment with ", /* @__PURE__ */ jsx("a", {
      href: "https://stripe.com/",
      children: "Stripe"
    }), "."]
  }),
  provides: ["payment"],
  vision: true,
  logoUrl: StripeLogo
}, {
  name: "stem-react-admin",
  description: /* @__PURE__ */ jsxs(Fragment, {
    children: ["Admin Panel with ", /* @__PURE__ */ jsx("a", {
      href: "https://marmelab.com/react-admin/",
      children: "react-adming"
    }), "."]
  }),
  provides: ["auth"],
  requires: ["email", "database"],
  vision: true,
  logoUrl: ReactAdminLogo
}, {
  name: "stem-nextauth",
  description: /* @__PURE__ */ jsxs(Fragment, {
    children: ["Authentication with ", /* @__PURE__ */ jsx("a", {
      href: "https://next-auth.js.org/",
      children: "NextAuth.js"
    }), "."]
  }),
  provides: ["auth"],
  requires: ["email", "database"],
  logoUrl: NextAuthLogo
}, {
  name: "stem-prisma",
  description: /* @__PURE__ */ jsxs(Fragment, {
    children: ["Provide database access to Stem Integrations with ", /* @__PURE__ */ jsx("a", {
      href: "https://www.prisma.io/",
      children: "Prisma"
    }), "."]
  }),
  provides: ["database"],
  logoUrl: PrismaLogo
}, {
  name: "stem-gmail",
  description: /* @__PURE__ */ jsxs(Fragment, {
    children: ["Send emails programmatically with ", /* @__PURE__ */ jsx("a", {
      href: "https://developers.google.com/gmail/api",
      children: "Gmail's API"
    }), " and", " ", /* @__PURE__ */ jsx("a", {
      href: "/nodemailer",
      children: "Nodemailer"
    }), "."]
  }),
  provides: ["email"],
  logoUrl: GmailLogo
}, {
  name: "stem-telefunc",
  logoUrl: TelefuncLogo,
  description: /* @__PURE__ */ jsxs(Fragment, {
    children: ["RPC with ", /* @__PURE__ */ jsx("a", {
      href: "https://telefunc.com/",
      children: "Telefunc"
    }), "."]
  })
}];
function IntegrationCatalog({
  vision = false
}) {
  return /* @__PURE__ */ jsx("div", {
    id: "div-catalog",
    children: data.filter((integrationSpec) => {
      if (integrationSpec.vision === void 0) {
        return true;
      }
      return integrationSpec.vision === vision;
    }).map((integrationSpec) => /* @__PURE__ */ jsx(Integration, {
      integrationSpec
    }))
  });
}
export {
  IntegrationCatalog as I
};
