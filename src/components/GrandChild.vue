<template>
    <div class= "grand-class" style="color: green;">
        <h3>孙组件</h3>
        <h4>a: {{ a }}</h4>
        <h4>b: {{ b }}</h4>
        <h4>c: {{ c }}</h4>
        <h4>d: {{ d }}</h4>
        <h4>x: {{ x }}</h4>
        <h4>y: {{ y }}</h4>
        <button @click="updateA(6)">点我更新a</button>
    </div>
</template>
<script setup name="GrandChild">
    defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'updateA'])
</script>
<style scoped>
.grand-child{
    border: 1px blue;
    background-color: antiquewhite;
    border-radius: 20px;
    margin: 20px;
    padding: 10px;
}
</style>