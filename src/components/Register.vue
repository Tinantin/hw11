<template>
  <div class="body">
    <span class="hi">Hello</span>
    <div class="window">
      <div>
        <!-- <lebel>login</lebel> -->
        <input type="text" id="login" class="input" placeholder="Login" />
        <div>
          <!-- <lebel>password</lebel> -->
          <input type="text" id="password" class="input" placeholder="Password" />
        </div>
      </div>
      <div class="btn">
        <button class="button">Sign In</button>
        <button class="button">Registration</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      login: null,
      password: null
    };
  }
};
</script>

<style scoped>
.body {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.hi {
  font-size: 40px;
  font-style: initial;
  font-weight: 800;
  color: #41b883;
  margin: 20px;
}
/* .btn {
  width: 100%;
  vertical-align: middle;
  display: flex;
} */
.button {
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.842);
  width: 100px;
  height: 50px;
  margin-top: 30px;
  margin-left: 52px;
  border-radius: 20px;
  background: #41b883;
  border-color: #35495e;
}
.input {
  color: #35495e;
  font-size: 20px;
  padding: 5px;
  background: #41b883;
  border: none;
  width: 200px;
  border-radius: 50px;
  margin-top: 15px;
}
input:focus {
  box-shadow: 5px 5px 10px #41b883;
  text-align: center;
}
::-webkit-input-placeholder {
  color: white;
  text-align: center;
}
</style>