<template>
  <div class="box">
    <!-- <div class="card" v-for="string in card_names" v-bind:key="string.id">
		{{string}}
		</div> -->
    <div class="button" v-for="item in buttons" v-bind:key="item.id">
      <div>{{getName}}</div>
	<button @click="onClick(item)">{{item}}</button>
    </div>
    
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "ButtonWindow",
  data() {
    return {
      buttons: ["Коля", "Ирина", "Станислав"],
    //   card_names: ["Костя", "Костя", "Костя"]
    };
  },
  computed: {
    ...mapGetters(["getName"])
  },
  methods: {
    ...mapMutations(["setName"]),

    onClick(item) {
      this.setName(item);
    }
  }
};
</script>

<style>
.box {
  color: red;
}
.button {
  width: 200px;
  height: 200px;
  border: 2px solid red;
  background-color: black;
}
button {
  background-color: black;
  color: red;
  border: 2px solid red;
}
</style>