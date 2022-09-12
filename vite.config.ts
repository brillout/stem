import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const config: UserConfig = {
  plugins: [ react() ],
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        p1: path.resolve(__dirname, 'index.html'),
        p2: path.resolve(__dirname, 'builder.html'),
        p3: path.resolve(__dirname, 'vision.html')
      }
    }
  }
}
export default config
