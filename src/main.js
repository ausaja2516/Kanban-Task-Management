import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { VueFire, VueFireAuth } from "vuefire";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6IqUULrYvXA-6e5stPS0x9rTLxZKtg4Q",
  authDomain: "ninja-turtle-b93c9.firebaseapp.com",
  projectId: "ninja-turtle-b93c9",
  storageBucket: "ninja-turtle-b93c9.appspot.com",
  messagingSenderId: "259568479672",
  appId: "1:259568479672:web:0d2b86588bf8f1873cb34d",
};

const firebaseApp = initializeApp(firebaseConfig);
const app = createApp(App);

app.use(router);

app.use(createPinia());

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

app.mount("#app");
