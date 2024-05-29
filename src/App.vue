<template>
    <!-- html -->
    <div class="app">
        <h1>Hello World</h1>
        <Person/>
    </div>
</template>

<script lang="ts">
    // js 或 ts
    import Person from "./components/Person.vue"

    export default {
        name: 'App',    //组件名
        components: {   //注册组件
            Person
        }
        
    }
</script>


<style>
    /* css */
    .app {
        color: red;
        box-shadow: 0 0 10px;
        border-radius: 10px;
    }
</style>