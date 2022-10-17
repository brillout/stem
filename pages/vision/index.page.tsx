export { Page }

import React from 'react'
import { IntegrationCatalog } from '../../catalog/IntegrationCatalog'

function Page() {
  return (
    <div style={{ maxWidth: 880 }}>
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
        Progressively become a WordPress alternative
      </p>
    </div>
  )
}

function Body() {
  return (
    <div style={{ fontSize: '1.1em', color: '#0c1b33dd' }}>
      <h2>Plan</h2>
      <p>
        As the number of <a href="/">Stem Integrations</a> grows, WordPress use cases are increasingly covered.
      </p>

      <h2 id="special">What makes Stem special</h2>
      <p>
        Stem's edge over WordPress is that Stem is liked not only by business users, but also by highly-technical
        developers. (Whereas WordPress is disliked by technical folks.)
      </p>
      <p>
        These highly-technical developers develop high-quality Stem Integrations, leading to a highly-quality Stem
        marketplace.
      </p>
      <p>The more the Stem Marketplace grows, the more we win market shares.</p>

      <h2>Example</h2>
      <p>
        For example, the following Stem Integrations cover a WordPress setup consisting of CMS + e-commerce
        (authentication, payment, emailing, etc.).
      </p>
      <IntegrationCatalog vision={true} />

      <h2>Money</h2>
      <p>Users pay for premium Stem Integrations while the Stem PLatform takes a 30% cut.</p>
      <p>
        Yearly revenue of WooCommerce's marketplace alone (subset of WordPress plugins): <code>$85mil</code>.
      </p>
      <p>
        Automaticc (company owning WordPress) valuation: <code>$7.2bn</code>.
      </p>

      <h2>Pragmatic Plan</h2>
      <p>
        We don't suffer the chicken-and-egg problem: today, there isn't any WordPress-like platform tailored for
        developers: developers still stich tools manually and if they want tools to automatically integration with each
        other like WordPress, then their only option currently is Stem (as said above in{' '}
        <a href="#special">What makes Stem special</a>, developers don't like and don't use WordPress).
      </p>
      <p>
        We progressivley add and extend Stem integrations as we see fit, while focusing on use cases that bring money
        quickly (so far we think this is UI themes), enabling us to be profitable or further raise funds ASAP.
      </p>
    </div>
  )
}
