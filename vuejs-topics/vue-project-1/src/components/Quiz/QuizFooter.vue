<script setup>
import {state} from '@/stores/quizStore'

</script>
<template>
  <div>
    <h6>Quiz Footer</h6>
    <h5 >{{ state.name }}</h5>
    <button @click.prevent="state.name = 'A new Quiz Name'"> Change Quiz Name</button>
    <ul>
      <li><a href="#" >Get A job</a> </li>
      <li><a href="#" >Contact Us</a> </li>
    </ul>
  </div>
</template>