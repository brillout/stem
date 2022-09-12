export { renderCatalog }

import React from 'react'
import ReactDOM from 'react-dom/client'
import { IntegrationCatalog } from './IntegrationCatalog'

function renderCatalog({ vision }: { vision?: true } = {}) {
  ReactDOM.createRoot(document.getElementById('react-root') as HTMLElement).render(
    <React.StrictMode>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <div>
          <IntegrationCatalog vision={vision} />
          <div style={{ height: 20 }} />
        </div>
      </div>
    </React.StrictMode>,
  )
}
