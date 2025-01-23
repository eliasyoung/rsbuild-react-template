import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSvgr } from '@rsbuild/plugin-svgr'

export default defineConfig({
  plugins: [pluginReact(), pluginSvgr()],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [require('@tailwindcss/postcss')],
      },
    },
  },
})
