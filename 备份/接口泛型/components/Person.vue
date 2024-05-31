<template>
    <div class="person">
      
    </div>

</template>

<script lang="ts" setup> 
    import {type PersonInter} from '@/types'


    let person:PersonInter = {
        id: 'asfas01',
        name: '张三',
        age: 20
    }


</script>

<style scoped>
    .person{
        background-color: aqua;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin:0 5px;
    }
</style>