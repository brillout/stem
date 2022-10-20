export { Page }

import React from 'react'
import { IntegrationList } from '../../catalog/IntegrationList'
import TwitterLogo from '../../catalog/logos/twitter.svg'

const VpsLink = () => <a href="https://vite-plugin-ssr.com">vite-plugin-ssr</a>
const ViteLink = () => <a href="https://vitejs.dev/">Vite</a>
const VueLink = () => <a href="https://vuejs.org/">Vue</a>

function Page() {
  return (
    <div style={{ maxWidth: 880 }} id="vision-page">
      <Header />
      <Body />
    </div>
  )
}

function Header() {
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: 40, marginTop: 10 }}>
        <h1 style={{ fontSize: '3em', margin: 0 }}>Ejectable Integrations.</h1>
        <div style={{ fontSize: '1.4em', margin: '15px auto', maxWidth: 700 }}>
          Use tools without writing integration code. As the need
          <br />
          arises, eject integration code for full customizability.
        </div>
        <div style={{ textAlign: 'center', fontSize: '1.1em', margin: 30 }}>
          <span style={{ backgroundColor: '#eee', borderRadius: 10, padding: '10px 20px' }}>
            <span className="construction" style={{ marginRight: 6 }}></span> Work-in-progress
          </span>
        </div>
      </div>
    </>
  )
}
function Body() {
  return (
    <div style={{ fontSize: '1.1em', color: '#0c1b33dd' }}>
      <h2>Example: Frontend</h2>
      <p>
        By using <code>stem-vite</code> with <code>stem-react</code> you get a <b>React Frontend similar to Next.js</b>{' '}
        powered by <ViteLink /> and <VpsLink />.
      </p>
      <IntegrationList integrations={['stem-vite', 'stem-react']} />
      <p>
        But, if you prefer <VueLink /> over React, you can use <code>stem-vue</code> instead of <code>stem-react</code>.
      </p>
      <IntegrationList integrations={['stem-vue']} />
      <p>
        You can also <b>eject</b> <code>stem-react</code>/<code>stem-vue</code> <b>and gain full control</b> over how
        Vite integrates with React/Vue. You can then even replace React/Vue with any UI framework you want (Svelte,
        Preact, Solid, ...).
      </p>
      <blockquote>
        <p>We explain what "eject" means down below.</p>
      </blockquote>

      <h2>Example: authentication</h2>
      <p>
        You can add authentication to your app simply by installing the <code>stem-nextauth</code> package.
      </p>
      <IntegrationList integrations={['stem-nextauth']} />
      <p>
        You have <b>zero boilerplate code</b> to write: it just works. Although note that you also have to install{' '}
        <code>stem-prisma</code> (enabling <code>stem-nextauth</code> to talk to your database),{' '}
        <code>stem-telefunc</code> (enabling <code>stem-nextauth</code>'s frontend to talk to the backend), and{' '}
        <code>stem-gmail</code> (enabling <code>stem-nextauth</code> to send emails).
      </p>
      <IntegrationList integrations={['stem-prisma', 'stem-telefunc', 'stem-gmail']} />
      <p>
        All these <code>stem-*</code> pacakges integrate with each other automatically by using open standards.
      </p>
      <p>
        The <code>stem-nextauth</code> package automatically adds authentication to your app in a way that works for the
        majority of users. If it doesn't work for you, then you can <b>eject</b> to take control over the integration
        code so that you can <b>fully customize your app's authentication implementation</b>.
      </p>
      <blockquote>
        <p>
          <b>What does eject mean?</b>
        </p>
        <p>
          In this example, with a normal app without Stem, you'd need to write glue code to tell the authentication code
          how to send emails. We call this kind of code "integration code".
        </p>
        <p>
          Stem Integrations (i.e. <code>stem-*</code> packages) contain such integration code, which are designed to
          work for the majority of users. Users with special needs can "eject": the integration code is moved from the{' '}
          <code>stem-*</code> package to the user's repository and, consequently, the user has full control over the
          integration code.
        </p>
        <p>
          If a user were to eject all its <code>stem-*</code> packages, then the user completely removes Stem. While
          only very few users need to go that extrem, users can gain as much control as needed (highly-technical
          developers care about this).
        </p>
      </blockquote>
      <p>
        Stem enables you to <b>quickly get started with a fully functional app</b>. As you scale, if you need special
        needs, <b>you can eject and take control over integration code</b>.
      </p>

      <h2>It's only the beginning</h2>
      <p>
        Stay tuned for more Stem Integrations. Reach out to{' '}
        <a href="https://twitter.com/brillout">
          <img src={TwitterLogo} style={{ height: 18, verticalAlign: 'middle', position: 'relative', right: -1 }} />{' '}
          brillout
        </a>{' '}
        if you have questions.
      </p>
    </div>
  )
}
