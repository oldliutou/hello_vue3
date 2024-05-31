<template>
    <!-- html -->
    <div class="app">
        <h1>Hello World</h1>
        <Person a="哈哈" :list="personlist"/>
    </div>
</template>

<script lang="ts" setup name="App">
    // js 或 ts
    import Person from "./components/Person.vue"    
    import { reactive } from "vue";
    import {type Persons } from "@/types";
    let personlist = reactive<Persons>([
        {id:"1",name: '张三', age: 18},
        {id:"2",name: '李四', age: 20},
        {id:"3",name: '王五', age:22,x:222}
    ])
    
</script>


<style scoped>
    /* css */
    .app {
        color: red;
        box-shadow: 0 0 10px;
        border-radius: 10px;
    }
</style>