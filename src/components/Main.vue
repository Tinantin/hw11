<template>
  <div class>
    <Catalog />
  
  </div>
</template>

<script>
import Catalog from './Catalog.vue'
import jsonCatalog from './json/jsonCatalog.json';

export default {
  name: "Main",
    components: {
     Catalog
  },
  data(){
    return {
      myJson: jsonCatalog
    }
  }

}
</script>

<style scoped>



</style>