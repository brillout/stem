export { data }
export type { IntegrationSpec }

import React from 'react'
import ReactLogo from './tool-logos/react.svg'
import ReactAdminLogo from './tool-logos/react-admin.svg'
import NextAuthLogo from './tool-logos/NextAuth.png'
import PrismaLogo from './tool-logos/prisma.png'
import StripeLogo from './tool-logos/stripe.png'
import TinaCMSLogo from './tool-logos/TinaCMS.png'
import VueLogo from './tool-logos/vue.svg'
import VitePluginSsrLogo from './tool-logos/vite-plugin-ssr.svg'
import GmailLogo from './tool-logos/gmail.svg'
import TelefuncLogo from './tool-logos/telefunc.svg'

type IntegrationSpec = {
  name: string
  description: JSX.Element
  provides?: Connector[]
  requires?: Connector[]
  vision?: boolean
  logoUrl: string
}
type Connector = 'email' | 'database' | 'renderer' | 'auth' | 'payment'

const Vue = () => <a href="https://vuejs.org/">Vue</a>
const ReactLink = () => <a href="https://reactjs.org/">React</a>
const Vps = () => <a href="https://vite-plugin-ssr.com">vite-plugin-ssr</a>
const Vite = () => <a href="https://vitejs.dev/">Vite</a>

const data: IntegrationSpec[] = [
  {
    name: 'stem-react',
    vision: false,
    logoUrl: ReactLogo,
    description: (
      <>
        <ReactLink /> integration for <Vite /> + <Vps />.
      </>
    ),
  },
  {
    name: 'stem-vue',
    vision: false,
    logoUrl: VueLogo,
    description: (
      <>
        <Vue /> integration for <a href="https://vitejs.dev/">Vite</a> +{' '}
        <a href="https://vite-plugin-ssr.com">vite-plugin-ssr</a>.
      </>
    ),
  },
  {
    name: 'vite-plugin-ssr',
    vision: false,
    logoUrl: VitePluginSsrLogo,
    description: (
      <>
        Frontend Framework with <Vps />.
      </>
    ),
  },
  {
    name: 'stem-cms',
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
       */
      'CMS',
    ],
    requires: ['database'],
    vision: true,
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
    vision: true,
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
    vision: true,
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
  },
  {
    name: 'stem-prisma',
    description: (
      <>
        Provide database access to Stem Integrations with <a href="https://www.prisma.io/">Prisma</a>.
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
    vision: true,
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
  },
  {
    name: 'telefunc',
    logoUrl: TelefuncLogo,
    description: (
      <>
        RPC with <a href="https://telefunc.com/">Telefunc</a>.
      </>
    ),
    vision: false,
  },
]
