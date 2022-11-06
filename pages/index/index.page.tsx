export { Page }

import React from 'react'
import { IntegrationList } from '../../catalog/IntegrationList'

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
        <h1 style={{ fontSize: '2.6em', margin: 0 }}>No-code Integrations. Ejectable.</h1>
        <div style={{ fontSize: '1.4em', margin: '15px auto', maxWidth: 700 }}>
          Integrate tools to your existing stack without writing code. As the
          <br />
          need arises, eject integration code for full customizability.
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
        By using and <code>stem-react</code> you get a <b>React DX like Next.js</b> powered by Vite and vite-plugin-ssr.
        For a <b>Vue DX like Nuxt.js</b> you can use <code>stem-vue</code> instead.
      </p>
      <IntegrationList integrations={['stem-react', 'stem-vue']} />
      <blockquote>
        <p>
          <b>Ejection</b>
        </p>
        <p>
          Usually, with vite-plugin-ssr, the user defines a <code>renderer/</code> directory that determintes how pages
          are rendered. However, when using <code>stem-react</code>, it's <code>node_modules/stem-react/renderer/</code>{' '}
          instead that determines how pages are rendered.
        </p>
        <p>
          You can eject <code>stem-react</code>: the directory <code>renderer/</code> is moved from{' '}
          <code>node_modules/stem-react/renderer/</code> to your repository's root directory. In other words, it's now
          you that fully controls how pages are rendererd, and you can then even replace React with any UI framework you
          want (Svelte, Preact, Solid, ...).
        </p>
        <p>
          This means you can use <code>stem-react</code> to quickly get started while, if the need arises at scale, you
          can eject to gain control and flexibility.
        </p>
      </blockquote>

      <h2>Example: authentication</h2>
      <p>
        You can add authentication to your app simply by installing the <code>stem-nextauth</code> package.
      </p>
      <IntegrationList integrations={['stem-nextauth']} />
      <p>
        You have <b>zero boilerplate code</b> to write: <code>stem-nextauth</code> includes everything, including a UI
        at <code>/login</code> and <code>/signup</code>.
      </p>

      <p>
        For <code>stem-next</code> to work, you also have to install <code>stem-prisma</code> (enabling{' '}
        <code>stem-nextauth</code> to talk to your database), <code>stem-telefunc</code> (enabling{' '}
        <code>stem-nextauth</code>'s frontend to talk to the backend), and <code>stem-gmail</code> (enabling{' '}
        <code>stem-nextauth</code> to send emails).
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
          <b>Ejection</b>
        </p>
        <p>
          In this example, with a normal app without Stem, you'd need to write glue code to tell the authentication code
          how to send emails. We call this kind of code "integration code".
        </p>
        <p>
          Stem Integrations (i.e. <code>stem-*</code> packages) contain such integration code, which are designed to
          work for the majority of users. But users with special needs can "eject": the integration code is moved from the{' '}
          <code>stem-*</code> package to the user's repository and, consequently, the user gains full control over the
          integration code.
        </p>
        <p>
          If a user were to eject all its <code>stem-*</code> packages, then the user completely removes Stem. While
          only very few users need to go that extreme, users can gain as much control as needed.
        </p>
      </blockquote>
      <p>
        Stem enables you to <b>quickly get started with a fully functional app</b>. As you scale, if you need special
        needs, <b>you can eject and take control over integration code</b>.
      </p>
    </div>
  )
}
