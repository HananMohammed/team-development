<script setup>
  import {UseStorage} from "@/composables/UseStorage";
  let food = UseStorage('food', 'pizza')
  let obj = UseStorage('obj', {'one':"Hanana"})
</script>

<template>
  <main>
    <p>what is your favourite food ?</p>
     <input type="text" placeholder="food..." v-model="food" >
  </main>
</template>
