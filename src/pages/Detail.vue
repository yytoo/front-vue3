<template>
    <ul class="new-list">
        <li> 编号: {{ id }}</li>
        <li> 标题: {{ title }} </li>
        <li> 内容: {{  content }}</li>
    </ul>
</template>
<script setup>
import router from '@/router';
import { useRoute } from 'vue-router';
import { toRefs } from 'vue';

// 使用路由中配置props获取父组件的参数
defineProps(["id", "title", "content"])

//路由未使用props时, 获取父组件参数
let route = useRoute()
let {query} = toRefs(route)
console.log('@', route)
</script>
<style scoped>
.new-list{
  border: 2px black;   
}
</style>