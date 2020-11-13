<template>
   <div>
    <h2 class="title">{{msg}}</h2>
    <button>按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export  default {
  data(){
    return {
    msg:'hello webpack',
    }
  },
  components: {
    Cpn
  }
}
</script>

<style>
.title{
  color: green;
}
</style>
