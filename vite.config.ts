import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

const config: UserConfig = {
  plugins: [react(), ssr({ prerender: true, includeAssetsImportedByServer: true })],
  server: {
    host: true,
  },
}
export default config
