// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : '/coshend/', // ajusta "/coshend/" al nombre real de tu repo en GitHub
  plugins: [vue()]
}))
