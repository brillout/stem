export { IntegrationCatalog }

import './IntegrationCatalog.css'
import React from 'react'
import { Integration } from './Integration'
import { data } from './data'

function IntegrationCatalog({ vision = false }: { vision?: boolean }) {
  return (
    <div id="div-catalog">
      {data
        .filter((integrationSpec) => {
          if (integrationSpec.vision === undefined) {
            return true
          }
          return integrationSpec.vision === vision
        })
        .map((integrationSpec, i) => (
          <Integration key={i} integrationSpec={integrationSpec} />
        ))}
    </div>
  )
}
