<template>
    <div class= "grand-class" style="color: green;">
        <h3>孙组件</h3>
        <h4>a: {{ a }}</h4>
        <h4>b: {{ b }}</h4>
        <h4>c: {{ c }}</h4>
        <h4>d: {{ d }}</h4>
        <h4>x: {{ x }}</h4>
        <h4>y: {{ y }}</h4>
        <button @click="updateA(6)">点我更新</button>
        <h4>money: {{ money }}</h4>
        <button @click="updateMoney(1)">花钱</button>
    </div>
</template>
<script setup name="GrandChild" lang="ts">
import { inject } from 'vue';
    defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'updateA'])


    // 获取并使用父组件传递过来的数据方法, injext第二个参数可设置默认值
    let {money, updateMoney} = inject('moneyContext', {money: 1, updateMoney: (x:number) => {}})


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