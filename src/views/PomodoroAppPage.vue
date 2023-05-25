<template>
  <div class="pomodoro">
    <v-row>
      <v-col sm="6" offset-sm="3">
        <PomodoroClock />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>
<style scoped>
.pomodoro {
  min-height: 65vh;
  transition: background-color 0.4s;
}
</style>
