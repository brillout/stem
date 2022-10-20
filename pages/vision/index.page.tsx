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
    <div style={{ textAlign: 'center', marginBottom: 70 }}>
      <h1 style={{ fontSize: '3em', color: '#0c1b33', margin: 0 }}>Stem's Vision</h1>
      <p style={{ fontSize: '1.4em', color: '#0c1b33dd', margin: '15px auto' }}>
        To progressively become a WordPress alternative.
      </p>
    </div>
  )
}

function Body() {
  return (
    <div style={{ fontSize: '1.1em', color: '#0c1b33dd' }}>
      <h2>Long-term goal</h2>
      <p>
        As the number of <a href="/">Stem Integrations</a> grows, Stem increasingly covers WordPress use cases.
      </p>

      <h2 id="special">What makes Stem special</h2>
      <p>A unique characteristic of Stem is that it's liked not only by business users but also developers.</p>
      <p>
        Stem's foundation (<a href="https://vite-plugin-ssr.com">vite-plugin-ssr</a> and{' '}
        <a href="https://telefunc.com">Telefunc</a>) is loved by highly-technical developers. Attracting them plays a
        central role in fostering high-quality Stem Integrations developed by the community.
      </p>
      <blockquote>
        <p>
          Beyond its outdated technological foundation, WordPress is disliked by developers because it's rigid and ties
          the hands of developers. Stem, in contrast, is designed from the ground up to be flexible: users can use any
          JavaScript tool they want and can take control over how tools integrate with each other (by{' '}
          <a href="/">ejecting</a>).
        </p>
        <p>
          Not only does Stem improves the no-code experience for business users, but it also enables highly-technical
          developers to take over control (by <a href="/">ejecting</a>).
        </p>
      </blockquote>

      <h2>Example</h2>
      <p>
        The following Stem Integrations cover the typical WordPress use case of setting up an e-commerce website
        (authentication, payment, emailing, and CMS).
      </p>
      <div style={{ fontSize: '1rem' }}>
        <IntegrationList
          integrations={['stem-tina', 'stem-stripe', 'stem-react-admin', 'stem-nextauth', 'stem-prisma', 'stem-gmail']}
        />
      </div>
      <blockquote>
        <p>
          Note how integrations such as <code>stem-tina</code> and <code>stem-react-admin</code> offer no-code
          interfaces for business-users.
        </p>
        <p>
          We believe no-code interfaces should be extensions available on the Stem Marketplace (instead of being
          built-in) &mdash; fostering competition and continuous improvements in no-code technology.
        </p>
      </blockquote>

      <h2>Money</h2>
      <p>Users pay for premium Stem Integrations on the Stem Marketplace, while Stem takes a 30% cut.</p>
      <p>
        Yearly revenue of WooCommerce's marketplace alone (subset of WordPress plugins): <code>$85mil</code>.
      </p>
      <p>
        Automattic valuation (company owning WordPress): <code>$7.2bn</code>.
      </p>

      <h2>Pragmatic plan</h2>
      <p>
        Stem is the first WordPress alternative that is liked and used by (highly-technical) developers. This means that
        market is won quickly.
      </p>
      <p>
        There is a unique opportunity to build, what we call, a low-code platform for developers. (While having no-code
        extensions for business-users.)
      </p>
      <p>
        We progressivley add/extend Stem Integrations while focusing on use cases that easily bring money (e.g. UI
        themes), enabling us to quickly be profitable or raise funds.
      </p>
    </div>
  )
}
