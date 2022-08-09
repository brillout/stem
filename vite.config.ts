// vite.config.js
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config: UserConfig = {
  plugins: [ react() ],
  server: {
    host: true,
    port: 3000,
  },
}
export default config
