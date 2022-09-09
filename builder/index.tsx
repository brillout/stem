import React from 'react'
import ReactDOM from 'react-dom/client'
import { Builder } from './Builder'
import { Wip } from './Wip'

ReactDOM.createRoot(document.getElementById('react-root') as HTMLElement).render(
  <React.StrictMode>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
      <div>
        <Builder />
        <div style={{ height: 20 }} />
        <Wip />
      </div>
    </div>
  </React.StrictMode>,
)
