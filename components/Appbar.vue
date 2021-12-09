<template>
  <v-app-bar
    clipped-left
    fixed
    app
    dense
  >
    <img src="~static/logo.svg">
    <v-toolbar-title v-text="title" />
    <v-spacer />

    <v-chip
      id="pointsCount"
      outlined
      dark
      label
      small
      text-color="white"
    >
      <v-icon left class="animate__animated animate__pulse animate__infinite">
        mdi-ray-vertex
      </v-icon>
      {{ gg }}
    </v-chip>
    <v-spacer />
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    title: 'PointCloud',
    gg: null,
    active: false
  }),
  computed: {
    pointCounts () {
      return this.$store.state.points.count
    }
  },
  watch: {
    pointCounts (count) {
      this.gg = count
      // Our fancy notification (2).
      // console.log(`We have ${count} fruits now, yay!`)
    }
  }

}
</script>
