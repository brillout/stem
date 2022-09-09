export { Builder }

import React, { useState } from 'react'
import { unique, getObjectEntries } from '../utils'
import './Builder.css'

const subsections = {
  staticHost: {
    name: 'Static Hosts',
  },
  serverless: {
    name: 'Static Hosts',
  },
}

const choices = {
  react: {
    name: 'React',
    url: 'https://reactjs.org/',
  },
  vue: {
    name: 'Vue',
    url: 'https://vuejs.org/',
  },
  telefunc: {
    name: 'Telefunc',
    url: 'https://telefunc.com/',
  },
  relay: {
    name: 'Relay',
    url: 'https://relay.dev/',
  },
  nodejs: {
    name: 'Node.js',
    url: 'https://nodejs.org/',
  },
  vercel: {
    name: 'Vercel',
    url: 'https://vercel.com/',
    subsection: 'serverless',
  },
  cloudflare: {
    name: 'Cloudflare Workers',
    url: 'https://workers.cloudflare.com/',
    subsection: 'serverless',
  },
  githubPages: {
    name: 'GitHub Pages',
    url: 'https://pages.github.com/',
    subsection: 'staticHost',
  },
  netlify: {
    name: 'Netlify',
    url: 'https://www.netlify.com/',
    subsection: 'staticHost',
  },
} as const

type ChoiceID = keyof typeof choices
type ComponentID = keyof typeof components
type Selection = { choices: ChoiceID[]; components: ComponentID[] }

const warnings = [
  {
    condition: (selection: Selection) => {
      const hasGraphQL = selection.choices.includes('relay')
      const hasRPC = selection.choices.includes('telefunc')
      if (selection.components.includes('communication')) {
        assert(hasGraphQL || hasRPC)
        assert(!(hasGraphQL && hasRPC))
      } else {
        assert(!hasGraphQL && !hasRPC)
      }
    },
    warningMsg: 'When using Node.js, we recommend using RPC instead of GraphQL',
  },
]

const components = {
  frontend: {
    name: 'Frontend',
    choices: [
      'react' as const,
      //'vue' as const,
    ],
    isRequired: true,
  },
  communication: {
    name: 'API',
    choices: ['telefunc' as const, 'relay' as const],
  },
  backend: {
    name: 'Backend',
    choices: ['nodejs' as const],
  },
  deploy: {
    name: 'Deployment',
    choices: ['vercel' as const, 'cloudflare' as const],
    /*
    choices: (selection: Selection) => {
      if( selection.components.includes('backend') ) {
        return ['vercel', 'cloudflare']
      } else {
        return ['githubPages', 'netlify']
      }
    }
    */
  },
} as const

function Builder() {
  const [selection, setSelection] = useState<Selection>({ choices: [], components: [] })
  console.log(JSON.stringify(selection))
  return (
    <>
      <Components
        selection={selection}
        onChoiceChange={(choiceId: ChoiceID) => {
          console.log(choiceId)
          if (selection.choices.includes(choiceId)) {
            return
          }
          const componentId = findComponentId(choiceId)
          setSelection({
            choices: [
              choiceId,
              ...selection.choices.filter((id) => {
                const isSameComponentId = findComponentId(id) === componentId
                return !isSameComponentId
              }),
            ],
            components: unique([componentId, ...selection.components]),
          })
        }}
        onComponentToggle={(componentId: ComponentID) => {
          console.log(componentId)
          const isRemoval = selection.components.includes(componentId)
          const component = components[componentId]
          setSelection({
            choices: isRemoval
              ? selection.choices.filter((choiceId) => !hasChoice(componentId, choiceId))
              : unique([component.choices[0], ...selection.choices]),
            components: !isRemoval
              ? [...selection.components, componentId]
              : selection.components.filter((id) => {
                  return id !== componentId
                }),
          })
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
        <GeneratedCommand selection={selection} />
      </div>
    </>
  )
}

function findComponentId(choiceId: ChoiceID) {
  const componentsMatch = getObjectEntries(components)
    .filter(([componentId]) => hasChoice(componentId, choiceId))
    .map(([componentId]) => componentId)
  assert(componentsMatch.length === 1)
  return componentsMatch[0]!
}

function hasChoice(componentId: ComponentID, choiceId: ChoiceID) {
  const component = components[componentId]
  return (component.choices as readonly string[]).includes(choiceId as string)
}

function Components({
  selection,
  onComponentToggle,
  onChoiceChange,
}: {
  selection: Selection
  onComponentToggle: (componentId: ComponentID) => void
  onChoiceChange: (choiceId: ChoiceID) => void
}) {
  return (
    <div id="components">
      {getObjectEntries(components).map(([componentId, component]) => (
        <div id={`component-${componentId}`} key={componentId}>
          <label>
            <input
              type="checkbox"
              checked={selection.components.includes(componentId)}
              onChange={() => onComponentToggle(componentId)}
            />{' '}
            {component.name}
          </label>
          <div>
            {component.choices.map((choiceId) => {
              const choice = choices[choiceId]
              const isSelected = selection.choices.includes(choiceId)
              return (
                <div key={choiceId} style={{ marginLeft: '1.4em' }}>
                  <label style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      checked={isSelected}
                      onChange={() => {
                        onChoiceChange(choiceId)
                      }}
                    />{' '}
                    {choice.name} (<Link url={choice.url} />)
                  </label>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

function Link({ url }: { url: string }) {
  const urlStart = 'https://'
  assert(url.startsWith(urlStart))
  const urlEnd = '/'
  assert(url.endsWith(urlEnd))
  const urlPretty = url.slice(urlStart.length).slice(0, -1 * urlEnd.length)
  return <a href={url}>{urlPretty}</a>
}

function GeneratedCommand({ selection }: { selection: Selection }) {
  return (
    <div>
      <code className="big">$ npm create stem {selection.choices.map((choiceId) => `--${choiceId}`).join(' ')}</code>
    </div>
  )
}

function assert(val: unknown): asserts val {
  if (!val) {
    throw new Error('Internal Error')
  }
}
