<template>
  <div class="box">
    <div  class="box" v-for="string in card_names" v-bind:key="string.id">
	{{string}}
    </div>
	<div class="card" v-for="item in button_names" v-bind:key="item.id">
      <button @click="onClick(item)">{{item}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonWindow",
  data() {
    return {
      button_names: ["Сat", "Dog", "Alpaca" ],
      card_names: ["Костя", "Костя", "Костя"]
    };
  }
};
</script>

<style>
.box {
  display: flex;
  justify-content: space-around;
  background-color: black;
  color: brown;
  border: 2px solid red;
  width: 400px;
  height: 250px;
}
.card {
  
  border: 2px solid red;
}
</style>