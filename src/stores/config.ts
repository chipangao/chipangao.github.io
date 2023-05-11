import { ref } from 'vue'
import { defineStore } from 'pinia'

export const configStore = defineStore('config', () => {

    const theme = ref<string|null>('');
    const locale = ref<string|null>('');

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
    
    function setlocale(v:string|null){
        locale.value = v;
        switch(theme.value) {
            case 'en':
                localStorage.setItem('locale', 'en');
                document.documentElement.setAttribute("data-locale", "en");
                break;
            case 'cn':
                localStorage.setItem('locale', 'cn');
                document.documentElement.setAttribute("data-locale", "cn");
                break;
            default:
                localStorage.setItem('locale', 'en');
                document.documentElement.setAttribute("data-locale", "en");
                break;
        }
    }

    

  return { theme, setTheme, locale, setlocale}
})
