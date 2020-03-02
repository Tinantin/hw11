<template>
  <div class="body">
     <!-- <div class="login"> -->
    <span class="hi">Hello</span>
    <div class="window">
      <div>
        <input
          type="text"
          id="login"
          class="input"
          placeholder="Login"
        />
        <div>
          <input 
          type="text" 
          id="password" 
          class="input" 
          placeholder="Password" />
        </div>
        
      </div>
      <button class="button">Sign In</button>
    </div>
   <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'Register'
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
		margin: 40px;
	}
	/* .window {
		color: #35495e;
		width: 300px;
		height: 150px;
		background: #35495e;
		box-shadow: 1px 1px 50px  #054b2b;
	} */
	.button {
		font-size: 15px;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.842);
		width: 100px;
		height: 50px;
		margin-top: 50px;
		border-radius: 20px;
        background: #41b883;
        border-color: #35495e;
	}
	.input {
		color: #35495e;
		font-size: 20px;
		padding: 5px;
		background:  #41b883;
		border: none;
		width: 200px;
		border-radius: 50px;
        margin-top: 15px;
        
	}
	input:focus{
        box-shadow: 5px 5px 10px #41b883;
        text-align: center;
	}
	::-webkit-input-placeholder {
        color: white;
        text-align: center;
    }
</style>