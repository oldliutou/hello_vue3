<template>
    <!-- html -->
    <div class="app">
        <h1>Hello World</h1>
        <Person/>
    </div>
</template>

<script lang="ts" setup name="App">
    // js 或 ts
    import Person from "./components/Person.vue"    
    
</script>


<style scoped>
    /* css */
    .app {
        color: red;
        box-shadow: 0 0 10px;
        border-radius: 10px;
    }
</style>