<template>
    <div class="other">
        <h2>求和为: {{ sum }}</h2>
        <h2>名字为: {{ person.name }}</h2>
        <h2>年龄为: {{ person.age }}</h2>
        <button @click="changeSum">修改合计</button>
        <button @click="changeName">修改名字</button>
        <button @click="changePerson">修改人</button>
        <h2>{{ car }}</h2>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changeColor">修改颜色</button>
        <button @click="changeCar">修改车</button>
    </div>
</template>
<script setup name = "Other" lang="ts">
// 只在顶层是响应式的, 对所有深层的对象不会做任何处理, 避免了对每一个内部属性做响应式带来的性能成本, 使得属性的访问更快
import {ref, shallowRef,reactive, shallowReactive} from 'vue';

let sum =shallowRef(0);
let person = shallowRef({
    name:'张三',
    age:18
})

let car = shallowReactive({
    brand:'奔驰',
    options:{
        color:'红色',
        engine:'v8'
    }
})
function changeSum (){
    sum.value += 1
}
function changeName(){
    person.value.name="老王"
}
function changePerson(){
    person.value = {name:'李四', age: 16}
}

function changeBrand(){
    car.brand = '宝马'
}
function changeColor(){
    car.options.color = 'blue'
}
function changeCar(){
    Object.assign(car, {
        brand:'小米',
        options:{
            color:'green',
            engine:'v6'
        }
    })
}
</script>
<style scoped>
.other{
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
}
</style>