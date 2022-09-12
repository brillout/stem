export { Page }

import React from 'react'
import { IntegrationCatalog } from '../../catalog/IntegrationCatalog'

function Page() {
  return (
    <>
      <LandingView></LandingView>
      <IntegrationCatalog vision={true} />
    </>
  )
}

function LandingView() {
  return (
    <div style={{ textAlign: 'center', marginBottom: 70 }}>
      <h1 style={{ fontSize: '3em', color: '#0c1b33', margin: 0 }}>Stem's Vision</h1>
      <Tagline>
        The vision is to implement integrations such as following list. As we implement these, Stem increasingly becomes
        a WordPress alternative.
      </Tagline>
      <Tagline>
        At this point, Stem becomes the first framework that is liked by both developers and business users.
      </Tagline>
    </div>
  )
}

function Tagline({ children }: { children: any }) {
  return <p style={{ fontSize: '1.2em', color: '#0c1b33dd', margin: '15px auto', maxWidth: 710 }}>{children}</p>
}
