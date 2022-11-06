export { data }
export type { IntegrationSpec }

import React from 'react'
import ReactLogo from './logos/react.svg'
import ReactAdminLogo from './logos/react-admin.svg'
import NextAuthLogo from './logos/NextAuth.png'
import PrismaLogo from './logos/prisma.png'
import StripeLogo from './logos/stripe.png'
import TinaCMSLogo from './logos/TinaCMS.png'
import VueLogo from './logos/vue.svg'
import VitePluginSsrLogo from './logos/vite-plugin-ssr.svg'
import GmailLogo from './logos/gmail.svg'
import TelefuncLogo from './logos/telefunc.svg'
import ViteLogo from './logos/vite.svg'

type IntegrationSpec = {
  name: `stem-${string}`
  description: JSX.Element
  provides?: Connector[]
  requires?: Connector[]
  showAtVisionPage?: true
  showAtLandingPage?: true
  logoUrl: string
}
type Connector = 'email' | 'database' | 'renderer' | 'auth' | 'payment'

const VueLink = () => <a href="https://vuejs.org/">Vue</a>
const ReactLink = () => <a href="https://reactjs.org/">React</a>
const VpsLink = () => <a href="https://vite-plugin-ssr.com">vite-plugin-ssr</a>
const ViteLink = () => <a href="https://vitejs.dev/">Vite</a>

const data: IntegrationSpec[] = [
  {
    name: 'stem-vite',
    showAtLandingPage: true,
    logoUrl: ViteLogo,
    description: (
      <>
        Frontend with <ViteLink /> and <VpsLink />.
      </>
    ),
  },
  {
    name: 'stem-react',
    showAtLandingPage: true,
    logoUrl: ReactLogo,
    description: (
      <>
        <ReactLink /> integration for <VpsLink />.
      </>
    ),
  },
  {
    name: 'stem-vue',
    logoUrl: VueLogo,
    description: (
      <>
        <VueLink /> integration for <VpsLink />.
      </>
    ),
  },
  {
    name: 'stem-vite-plugin-ssr',
    logoUrl: VitePluginSsrLogo,
    description: (
      <>
        Frontend Framework with <VpsLink />.
      </>
    ),
  },
  {
    name: 'stem-tina',
    description: (
      <>
        CMS with <a href="https://tina.io/">TinaCMS</a>.
      </>
    ),
    provides: [
      /*
        {
        type: 'feature'
        }
      'CMS',
       */
    ],
    requires: ['database'],
    showAtVisionPage: true,
    logoUrl: TinaCMSLogo,
  },
  {
    name: 'stem-stripe',
    description: (
      <>
        Payment with <a href="https://stripe.com/">Stripe</a>.
      </>
    ),
    provides: ['payment'],
    showAtVisionPage: true,
    logoUrl: StripeLogo,
  },
  {
    name: 'stem-react-admin',
    description: (
      <>
        Admin Panel with <a href="https://marmelab.com/react-admin/">react-admin</a>.
      </>
    ),
    provides: ['auth'],
    requires: ['email', 'database'],
    showAtVisionPage: true,
    logoUrl: ReactAdminLogo,
  },
  {
    name: 'stem-nextauth',
    description: (
      <>
        Authentication with <a href="https://next-auth.js.org/">NextAuth.js</a>.
      </>
    ),
    provides: ['auth'],
    requires: ['email', 'database'],
    logoUrl: NextAuthLogo,
    showAtVisionPage: true,
    showAtLandingPage: true,
  },
  {
    name: 'stem-prisma',
    description: (
      // <>Provide database access to Stem Integrations with <a href="https://www.prisma.io/">Prisma</a>.</>
      <>
        Database access with <a href="https://www.prisma.io/">Prisma</a>.
      </>
    ),
    /*
        {
        type: 'feature',
        name: 'ORM"
        },
        {
        type: connector,
        name: 'database-access'
        }
       */
    provides: ['database'],
    logoUrl: PrismaLogo,
    showAtVisionPage: true,
    showAtLandingPage: true,
  },
  {
    name: 'stem-gmail',
    description: (
      <>
        Send emails programmatically with <a href="https://developers.google.com/gmail/api">Gmail's API</a> and{' '}
        <a href="/nodemailer">Nodemailer</a>.
      </>
    ),
    provides: ['email'],
    logoUrl: GmailLogo,
    showAtVisionPage: true,
    showAtLandingPage: true,
  },
  {
    name: 'stem-telefunc',
    logoUrl: TelefuncLogo,
    description: (
      <>
        Frontend-Backend communi-cation with <a href="https://telefunc.com/">Telefunc</a>.
      </>
    ),
    showAtLandingPage: true,
  },
]
