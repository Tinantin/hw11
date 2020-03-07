<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-show="modalVisible">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <button type="button" class="btn-close" 
          @click="close" aria-label="Close modal">x</button>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
             Login
             
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
              Password
          </slot>
        </footer>
        <router-link to='/' class="line_btn">
        <button class="button"
        @click="$router.push('/')" >
         Sign In
        </button>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",

  props: {
    visible: {
      type: Boolean,
      // default: false
      }
  },
  data() {
    return {
      modalVisible: true
    };
  },
  watch: {
    visible: function(newVal) {
      this.modalVisible = newVal;
    }
  },
  methods: {
    close() {
      this.modalVisible = false;
    }
  }
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 400px;
  height: 500px;
  text-align: center;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  text-align: right;
}

.modal-body,
.modal-footer {
  padding: 15px;
  display: flex;
  padding: 20px 10px;
  border-top: 1px solid #eeeeee;
  justify-content: center;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  display: inline-block;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>