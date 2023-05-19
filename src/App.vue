<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet class="pa-2"> Хеддер портфолио </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="pa-2"> Тут просто текст затычка</v-sheet>
      </v-col>
      <v-col cols="8">
        <v-sheet class="pa-2">
          Тут будут варианты всего
          <nav>
            <router-link to="/first">Info Page</router-link> |
            <router-link to="/second">One with some task</router-link>
          </nav>
          <router-view />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
