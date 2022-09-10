<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import {onMounted, ref} from "vue";
import {useFlash} from "@/composables/useFlash";

let {flash} = useFlash();
 
</script>

<template>
  <main>
    <TheWelcome />
    <button @click=" flash('HEYYYYYYYYYYYYYYYYYYYYY!!!!!!!!!!') ">Click Me</button>
  </main>
</template>
