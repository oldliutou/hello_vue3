<template>
    <div class="person">
      <h2>{{a}}</h2>
      <!-- <h2>{{ list }}</h2> -->
        <ul>
            <li v-for="item in list" :key="item.id">{{item}}</li>
        </ul>
    </div>

</template>

<script lang="ts" setup> 
    import {defineProps} from 'vue'
    import {type Persons} from '@/types'
    // 只接收list
    defineProps(['a','list'])
    //  接收list+类型限制
    // defineProps<{list:Persons}>()
    //  接收list+类型限制+限制必要性+指定默认值
    // defineProps<{list?:Persons}>()


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