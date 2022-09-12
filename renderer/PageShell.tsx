import React from 'react'
import { PageContextProvider } from './usePageContext'
import './PageShell.css'
import { Link } from './Link'
import type { PageContext } from './types'
import logoUrl from '../assets/stem-with-text.svg'
import '../css/index.css'

export { PageShell }

function PageShell({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Header>
          <Logo />
          <Link href="/about">About</Link>
        </Header>
        <Content>{children}</Content>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Header({ children }: { children: React.ReactNode }) {
  return (
    <header
      style={{
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #eee',
      }}
    >
      {children}
    </header>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="page-content"
      style={{
        padding: 20,
        paddingBottom: 50,
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
      }}
    >
      <div>{children}</div>
    </div>
  )
}

function Logo() {
  return (
    <div style={{ padding: 10 }}>
      <a href="/">
        <img src={logoUrl} height={64} width={160} />
      </a>
    </div>
  )
}
