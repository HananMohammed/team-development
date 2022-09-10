import {ref, watch} from 'vue';

export function UseStorage(key, val)
{
    let storedValue = read()
    if(storedValue){
        val = ref(storedValue)
    }else{
        val = ref(val)
        write()
    }

    watch(val, write, {deep: true})

    function read()
    {
        return localStorage.getItem(key);
    }

    function write()
    {
        if(val.value === ''){
            localStorage.removeItem(key)
        }else{
            localStorage.setItem(key, val.value)
        }
    }

    return val;
}