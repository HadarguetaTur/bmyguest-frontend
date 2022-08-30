import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus"
import store from "./store"
import "element-plus/dist/index.css"
import VueEasyLightbox from "vue-easy-lightbox"
import vue3GoogleLogin from "vue3-google-login"
import HistogramSlider from "vue3-histogram-slider"
import "vue3-histogram-slider/dist/histogram-slider.css"
import "./assets/styles/styles.scss"
import VueGoogleMaps from "@fawmi/vue-google-maps"
import Datepicker from "@vuepic/vue-datepicker"

const app = createApp(App)

app.component(HistogramSlider.name, HistogramSlider)
app.component("Datepicker", Datepicker)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueEasyLightbox)
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyARPmS2dhjKdP2WVF_7L5yKt4Alzdzfe38",
  },
  autobindAllEvents: false,
})
app.use(vue3GoogleLogin, {
  clientId:
    "533877104669-o315vdo0m8gvp4qr8tqmikhii3sjruqs.apps.googleusercontent.com",
})

app.mount("#app")
