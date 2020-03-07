<template>
  <div class>
    <button>jdcjssdj</button>
    <div v-for="item in jsonCatalog" v-bind:key="item.id">
      <img :src="item.image" />
      <h1>{{ item.title }}</h1>
      <h2>{{ item.brand }}</h2>
      <h3>{{ item.price }}</h3>
      <p>{{ item.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog",
  props: {
    jsonCatalog: Array
  }
};
</script>

<style scoped>
</style>