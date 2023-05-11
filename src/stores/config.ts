import { ref } from 'vue'
import { defineStore } from 'pinia'

export const configStore = defineStore('config', () => {

  const theme = ref<string|null>('');

  function setTheme(v:string|null){
    theme.value = v;
    switch(theme.value) {
        case 'dark':
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute("data-theme", "dark");
            break;
        case 'light':
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute("data-theme", "light");
            break;
        default:
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute("data-theme", "light");
            break;
      }
  }
  
  return { theme ,setTheme}
})
