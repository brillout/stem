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
      <div style={{ marginBottom: 20, marginTop: 30 }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.6em', margin: 0 }}>No-code Integrations. Ejectable.</h1>
          <div style={{ fontSize: '1.4em', margin: '15px auto', maxWidth: 700 }}>
            Integrate tools to your existing app without writing code. As the
            <br />
            need arises, eject integration code for full customizability.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.1em' }}>
          <blockquote className="no-emoji" style={{ marginRight: 6, maxWidth: 600 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="warning" style={{ fontSize: '1.3em', marginRight: 15 }}></span>
              <p>
                This page is meant for <a href="https://vite-plugin-ssr.com">vite-plugin-ssr</a> users. If you aren't a
                vite-plugin-ssr user, then you won't understand this.
              </p>
            </div>
          </blockquote>
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
        By using <code>stem-react</code> you get a <b>React DX like Next.js</b> powered by Vite and vite-plugin-ssr. For
        a <b>Vue DX like Nuxt.js</b> you can use <code>stem-vue</code> instead.
      </p>
      <IntegrationList integrations={['stem-react', 'stem-vue']} />
      <blockquote>
        <p>
          <b>Ejectable</b>
        </p>
        <p>
          Usually, with vite-plugin-ssr, the user defines a <code>renderer/</code> directory that determintes how pages
          are rendered. However, when using <code>stem-react</code>, it's <code>node_modules/stem-react/renderer/</code>{' '}
          instead that determines how pages are rendered.
        </p>
        <p>
          You can eject <code>stem-react</code>: the directory <code>renderer/</code> is moved from{' '}
          <code>node_modules/stem-react/renderer/</code> to your repository's root directory. In other words, after
          ejecting, you fully control how pages are rendererd. You can then even replace React with any UI framework you
          want (Preact, Solid, ...).
        </p>
        <p>
          This means you can use <code>stem-react</code> to quickly get started and, if the need arises, you can eject
          in order to gain control and flexibility.
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
        For <code>stem-nextauth</code> to work, you also have to install <code>stem-prisma</code> (enabling{' '}
        <code>stem-nextauth</code> to talk to your database), <code>stem-telefunc</code> (enabling{' '}
        <code>stem-nextauth</code>'s frontend to talk to the backend), and <code>stem-gmail</code> (enabling{' '}
        <code>stem-nextauth</code> to send emails).
      </p>
      <IntegrationList integrations={['stem-prisma', 'stem-telefunc', 'stem-gmail']} />
      <p>
        All these <code>stem-*</code> pacakges integrate with each other automatically by using open standards.
      </p>
      <blockquote>
        <p>
          <b>Ejectable</b>
        </p>
        <p>
          The <code>stem-nextauth</code> package automatically adds authentication to your app in a way that works for
          the majority of users, while you can eject parts that don't work for you.
        </p>
        <p>
          For example, if you don't like the UI of <code>/login</code> and <code>/signup</code> that is built into{' '}
          <code>stem-nextauth</code>, then you can eject and customize the UI.
        </p>
        <p>
          If you eject all your <code>stem-*</code> packages, then you completely remove Stem. While only very few users
          need to go that extreme, it shows that you can gain as much control as needed.
        </p>
      </blockquote>
      <h2>Conclusion</h2>
      <p>
        Stem enables you to quickly get started with a full-fledged app. As you scale, and if you need special needs,{' '}
        you can eject and take control over integration.
      </p>
    </div>
  )
}
