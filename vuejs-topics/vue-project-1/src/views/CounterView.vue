<script setup>
import {counter} from '@/stores/counterStore'
</script>
<template>
  <h1>{{counter.count}}</h1>
  <button @click="counter.increment()">Increment</button>
</template>