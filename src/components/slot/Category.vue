<template>
    <div class = "category">
        <!-- 插槽 默认插槽名字: default-->
        <slot name="s1">默认内容</slot>
        <slot name="s2">默认内容</slot>
    </div>
</template>
<script setup name = "Category" lang="ts">
defineProps(['title'])
</script>
<style scoped>
.category{
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    font-size: 20px;
    font-weight: 800;
}

</style> 