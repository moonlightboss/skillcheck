<template>
  <v-app id="#app">
    <v-container>
      <v-row no-gutters>
        <v-col cols="2">
          <v-sheet class="pa-2">
            <v-img
              class="align-end text-white mx-auto"
              width="200"
              height="200"
              v-bind:src="require('../src/assets/photo.jpg')"
              cover
            >
            </v-img>
            <div>Frontend dev</div>
            <div class="skills">
              <div class="main-skills">
                <h3 class="skill-title">Main</h3>
                JavaScript TypeScript Vue 3
              </div>
              <div class="html-skills">
                <h3 class="skill-title">HTML</h3>
                HTML5
              </div>
              <div class="css-skills">
                <h3 class="skill-title">CSS</h3>
                CSS3 SCSS Tailwind Bootstrap Vuetify
              </div>
              <div class="other-skills">
                <h3 class="skill-title">OTHER</h3>
                figma php nodejs npm,yarn postman
              </div>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="10">
          <v-sheet class="pa-2 mx-auto">
            <h2>Варианты решенных задач</h2>
            <nav>
              <v-slide-group show-arrows>
                <v-slide-group-item>
                  <v-btn class="ma-2" rounded>
                    <router-link to="/weatherapp">Weather App</router-link>
                  </v-btn>
                </v-slide-group-item>
                <v-slide-group-item>
                  <v-btn class="ma-2" rounded>
                    <router-link to="/second">Pomodoro timer</router-link>
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </nav>
            <router-view />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-footer class="d-flex flex-column">
      <div class="d-flex w-100 align-center px-4">
        <strong>My social</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="link in links"
          :key="link"
          color="black"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn>
      </div>

      <div class="px-4 py-2 text-center w-100">
        {{ new Date().getFullYear() }} —
        <strong>Vue 3, Vuetify and Vladislav "moonlight" Golosnoy</strong>
      </div>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    links: ["GitHub", "LinkedIn", "Team", "CodeWars"],
  }),
};
</script>

<style>
.v-application__wrap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  color: #2c3e50;
  background-image: linear-gradient(180deg, #8294c4, #acb1d6, #dbdfea, #ffead2);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #7042b9;
}
</style>
