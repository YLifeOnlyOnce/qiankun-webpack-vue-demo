<template>
  <div class="about-content">
    <h1>Home Page</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    console.log('vue2.0写法 created');
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    close() {
      console.log('close');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-content {
  color: #7265e6;
}
</style>