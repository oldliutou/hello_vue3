<template>
    <!-- html -->
    <div class="app">
        <h2>Vue路由测试</h2>
        <!-- 导航区 -->
        <div class="navigation">
            <RouterLink to="/home" >首页</RouterLink>
            <RouterLink to="/news">新闻</RouterLink>
            <RouterLink to="/about">关于</RouterLink>
        </div>
    
        <!-- 展示区 -->
        <div class="main-content">
            <!-- 此处以后可能要展示各种组件，以后展示哪个组件，需要看路径 -->
            <RouterView></RouterView>
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
    import {RouterView,RouterLink} from 'vue-router'
    
</script>


<style scoped>
 
    /* css */
    .app {
        margin: 0 auto;
        max-width: 1200px;
        padding: 0 20px;
    }
    .navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: #958383;
        border-bottom: 1px solid #864141;
    }
    a {
       color: #450dc8; 
       margin: 10px;
      
        text-decoration: none;
        font-size: 18px;
        border: 2px solid black;
        }

        /* 添加伪类样式 */
       a:hover {
            color: green;
            text-decoration: underline;
            border-color: red;
        }  
        
        .main-content {
            margin-top: 20px;
            padding: 20px;
            background-color: #f5f5f5;
            border: 10px solid #ccc;
            font-size: 16px;
            line-height: 1.5
        }
</style>