export { Page }

import React from 'react'
import { IntegrationCatalog } from '../../catalog/IntegrationCatalog'

function Page() {
  return (
    <>
      <LandingView></LandingView>
      <IntegrationCatalog />
    </>
  )
}

function LandingView() {
  return (
    <div style={{ textAlign: 'center', marginBottom: 70 }}>
      <h1 style={{ fontSize: '3em', color: '#0c1b33', margin: 0 }}>Ejectable Integrations</h1>
      <Tagline>
        Integrate tools without writing boilerplate code. Eject & customize integration code as the need arises.
      </Tagline>
      <div style={{ textAlign: 'center', fontSize: '1em', margin: 30 }}>
        <span style={{ backgroundColor: '#eee', borderRadius: 10, padding: '10px 20px' }}>
          <span className="construction"></span> This website is work-in-progress.
        </span>
      </div>
    </div>
  )
}

function Tagline({ children }: { children: any }) {
  return <p style={{ fontSize: '1.2em', color: '#0c1b33dd', margin: '15px auto', maxWidth: 500 }}>{children}</p>
}
