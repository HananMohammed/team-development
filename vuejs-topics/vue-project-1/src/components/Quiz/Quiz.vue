<script setup>
import QuizFooter from "@/components/Quiz/QuizFooter.vue"
import {provide, ref} from "vue";
defineProps({quiz: Object})
let name = ref('Hanan Mohammed')
provide('name', {
  name,
  changeName: () => name.value = 'Name Changed .....'
})
</script>
<template>
  <h1>{{ name }}</h1>
  <h6>Footer</h6>
  <QuizFooter :quiz="quiz"/>
</template>