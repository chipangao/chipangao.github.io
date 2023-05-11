import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const num = ref(0)
  function add(){
    num.value++
  }
  function subtract(){
    num.value--
  }
  function clear(){
    num.value=0
  }
  const theme = ref('light');
  function changeTheme(v:string){
    theme.value = v
  };
  return { count, doubleCount, increment,num,add,subtract,clear }
})
