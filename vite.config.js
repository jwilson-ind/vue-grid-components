import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'vue-grid-components'
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                },
            },
        },

        // If you set esmExternals to true, this assumes that
        // all external dependencies are ES modules
        commonjsOptions: {
            esmExternals: true
        },
    },
})
