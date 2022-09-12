import React from 'react'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr'
import { PageShell } from './PageShell'
import { getPageTitle } from './getPageTitle'
import type { PageContext } from './types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { renderToString } from 'react-dom/server'
import logoUrl from '../assets/stem.svg'

export { render }
export { passToClient }

const passToClient = ['pageProps', 'documentProps', 'someAsyncProps']

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext

  const page = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  const title = getPageTitle(pageContext)

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="icon" type="image/svg+xml" href="${logoUrl}" />
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(page)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    // We can return a `pageContext` promise
    pageContext: (async () => {
      return {
        someAsyncProps: 42
      }
    })()
  }
}
