export { Wip }

import React from 'react'

const wip = [
  {
    name: 'NextAuth.js',
    url: 'https://next-auth.js.org/',
  },
  {
    name: 'Prisma',
    url: 'https://www.prisma.io/',
  },
  {
    name: 'Vue',
    url: 'https://vuejs.org/',
  },
  {
    name: 'Deno',
    url: 'https://deno.land/',
  },
  {
    name: 'Apollo GraphQL',
    url: 'https://www.apollographql.com/',
  },
  {
    name: 'PlanetScale',
    url: 'https://planetscale.com/',
  },
]

function Wip() {
  return (
    <div style={{ fontSize: '0.9em' }}>
      <span className="seedling"></span> Upcoming integrations:{' '}
      {wip.map(({ name, url }, i) => (
        <span key={i}>
          <a href={url}>{name}</a>{' '}
        </span>
      ))}
    </div>
  )
}
/*
Frontend
 - React
 - Vue

Authentication
 - NextAuth.js

Backend
 - Node.js
 - Deno
 - Bun

Frontend <-> Backend
 - Telefunc (RPC)
 - Relay (GraphQL)
 - Apollo (GraphQL)

Database
 - MySQL
 - PostgreSQL

ORM
 - Prisma
 - MikroORM

Emailing
 - nodemailer

- SEO
 - Crucial
 - Matters
 - Doesn't matter

Deploy (1)
 - Static Hosts
   - GitHub Pages
   - Cloudflare Pages
 - 
 - Vercel
 - Cloudflare Workers
 */
