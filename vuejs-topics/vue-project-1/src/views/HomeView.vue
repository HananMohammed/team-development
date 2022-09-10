<script setup>
  import {ref} from 'vue'
   import TabableTextarea from '@/components/TabableTextarea.vue';
  // import {UseStorage} from "@/composables/UseStorage";
  // let food = UseStorage('food', 'pizza')
  // let obj = UseStorage('obj', {'one':"Hanana"})
  let comment = ref('test value')

</script>

<template>
  <main>
    <!-- <p>what is your favourite food ?</p>
     <input type="text" placeholder="food..." v-model="food" > -->
     <TabableTextarea v-model="comment" style="width:100%; height:300px;" />
  </main>
</template>
