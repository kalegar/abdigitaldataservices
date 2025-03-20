import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import colors from 'vuetify/util/colors'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      },
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.green.darken3,
                    secondary: colors.green.lighten2,
                    surface: colors.green.darken2
                }
            },
            dark: {
                dark: true,
                colors: {
                    primary: colors.green.darken3,
                    secondary: colors.green.lighten2,
                    surface: colors.green.darken2
                }
            }
        }
    }
})

const app = createApp(App)

app.use(router)

app.use(vuetify)

app.mount('#app')
