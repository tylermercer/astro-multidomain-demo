import shared from './astro.config.shared'
import { defineConfig } from 'astro/config'

export default defineConfig({
    ...shared,
    srcDir: './src/two'
})