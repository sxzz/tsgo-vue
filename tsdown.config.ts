import { defineConfig } from 'tsdown'
import vue from 'unplugin-vue/rolldown'

export default defineConfig({
  entry: ['src/index.ts'],
  plugins: [
    vue({
      isProduction: true,
    }),
  ],
  dts: {
    generator: 'tsgo',
    tsgo: {
      runExternalCode: true,
    },
  },
})
