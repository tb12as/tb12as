<template>
    <router-view></router-view>
</template>

<script>
export default {
    beforeMount() {
        const html = document.querySelector('html')
        const theme = localStorage.theme || 'light'

        if (theme == 'dark') {
            localStorage.theme = 'dark'
            html.classList.add('dark')
            html.classList.remove('light')
        } else {
            localStorage.theme = 'light'
            html.classList.add('light')
            html.classList.remove('dark')
        }
    }
}
</script>
