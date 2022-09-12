export { Integration }

import type { IntegrationSpec } from './data'
import React from 'react'

function Integration({ integrationSpec }: { integrationSpec: IntegrationSpec }) {
  const { name, description, logoUrl } = integrationSpec
  return (
    <div className="div-integration">
      <div className="div-header">
        <img src={logoUrl} />{' '}
        <div>
          <code>{name}</code>
        </div>
      </div>
      <div className="div-description">{description}</div>
    </div>
  )
}
