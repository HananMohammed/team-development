<template>
    <div>
 
        <textarea @keyup="update" style="width: 100%;height: inherit;" v-text="modelValue" @keydown.tab.prevent="onTabPress"></textarea> 
    </div>
</template>
<script setup>
    defineProps({
        modelValue: String
    })

    let emit = defineEmits(['update:modelValue'])

    function onTabPress(e) {
        let t = e.target;
        
        let val = t.value,
            start = t.selectionStart,
            end = t.selectionEnd;
            console.log(val, start, end);

        t.value = val.substring(0, start) + "\t" + val.substring(end)
        t.selectionStart = t.selectionEnd + 1;
  }

  function update(e){
    emit('update:modelValue', e.target.value)
  }
</script>