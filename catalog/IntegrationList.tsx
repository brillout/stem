export { IntegrationList }

import './IntegrationList.css'
import React from 'react'
import { Integration } from './Integration'
import { data } from './data'
import { assert } from '../utils'

function IntegrationList({ integrations }: { integrations: string[] }) {
  return (
    <div id="div-catalog">
      {integrations.map((name, i) => {
        const integrationSpec = data.find((integration) => name === integration.name)
        assert(integrationSpec)
        return <Integration key={i} integrationSpec={integrationSpec} />
      })}
    </div>
  )
}
