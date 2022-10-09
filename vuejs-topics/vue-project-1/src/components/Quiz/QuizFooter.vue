<script setup>
import {inject} from "vue";
defineProps({quiz: Object})
let {name, changeName} = inject('name')


</script>
<template>
  <div>
    <button @click.prevent = "changeName">{{ name }}</button>
    <ul>
      <li><a href="#" >Get A job</a> </li>
      <li><a href="#" >Contact Us</a> </li>
    </ul>
  </div>
</template>