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
      <p>
        Stem's edge over WordPress is that Stem is liked not only by business users but also developers. (Whereas
        WordPress is disliked and not widely used by developers.)
      </p>
      <p>
        Stem's foundation (<a href="https://vite-plugin-ssr.com">vite-plugin-ssr</a> and{' '}
        <a href="https://telefunc.com">Telefunc</a>) is tailored for and liked by highly-technical developers.
        Attracting them is important for fostering high-quality Stem Integrations developed by the community, leading to
        a highly-quality marketplace.
      </p>

      <h2>Example</h2>
      <p>
        The following Stem Integrations cover the WordPress use case of setting up a e-commerce website (authentication,
        payment, emailing, CMS, etc.).
      </p>
      <div style={{ fontSize: '1rem' }}>
        <IntegrationList
          integrations={['stem-tina', 'stem-stripe', 'stem-react-admin', 'stem-nextauth', 'stem-prisma', 'stem-gmail']}
        />
      </div>

      <h2>Money</h2>
      <p>Users pay for premium Stem Integrations while the Stem Platform takes a 30% cut.</p>
      <p>
        Yearly revenue of WooCommerce's marketplace alone (subset of WordPress plugins): <code>$85mil</code>.
      </p>
      <p>
        Automattic valuation (company owning WordPress): <code>$7.2bn</code>.
      </p>

      <h2>Pragmatic plan</h2>
      <p>
        We don't suffer the chicken-and-egg problem because there isn't any WordPress-like platform tailored for
        (highly-technical) developers: today, developers still stich tools manually and if they want automatic
        integrations like WordPress then their only option is Stem (as said <a href="#special">above</a>, developers
        don't like/use WordPress).
      </p>
      <p>
        In a nutshell: there is a unique opportunity to build a "low-code platform" for developers &mdash; and we take
        it.
      </p>
      <p>
        We progressivley add/extend Stem Integrations while focusing on use cases that bring money ASAP (e.g. UI
        themes), enabling us to be profitable or further raise funds quickly.
      </p>
    </div>
  )
}
