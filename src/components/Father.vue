<template>
<div class="father">
    <h2>父组件</h2>
    <h4>汽车: {{ car }}</h4>
    <h4 v-show="toy">子组件玩具: {{ toy }}</h4>
    <!--第一种 子组件向父组件传递参数, 子组件defineProps获取方法sendToy并且触发, 父组件执行sendToyF-->
    <!--第二种 子组件自定义事件haha, 在子组件触发haha以后会调用方法bindChidEvent-->
    <Child :car = "car" :sendToy = "sendToyF" @haha = "bindChildEvent" 
        :a = "a" :b = "b" v-bind = "{x: '111', y:'2222'}" :updateA = "updateAValue"
        ref="childRef"/>

    <!-- 将点击事件的默认行为绑定到字符串str变量上-->
    <button @click="str = $event">方法事件</button>
    <input v-model="userName" type="text"/>
    <!--断言$event.target是html输入元素不会为空
        等价于上一行, 使用:value绑定显示的值, 使用click点击事件的value触发方法事件把值赋给变量
    -->
    <input  type="text" :value="userName" @click="userName =(<HTMLInputElement> $event.target).value">
    <!-- v-model是基于mitt对底层ui进行封装
        <MyInput :modelValue="userName" @update:modelValue="userName = $event"/>
        使用v-model可替代简化modelValue,
        但是再底层ui里面, 接收的:value变量名必须是modelValue, 
        绑定监听名必须是update:modelValue, 传递的事件作为入参;

        对于原生事件, $event就是事件对象, 使用$event.target.value ; 对于自定义事件, $event就是出发事件时, 所传递的数据 
        可以对传给底层ui的变量和时间名称重命名
        -->
    <MyInput v-model="userName" v-model:asd="password"></MyInput>{{ password }}
    <Child2 ref="Child2Ref"/>
    <h4>a: {{ a }}</h4>
    <h4>b: {{ b }}</h4>
    <h4>c: {{ c }}</h4>
    <h4>d: {{ d }}</h4>
    <button @click="getRefs($refs)">获取子组件对象实例</button>
</div>
</template>
<script setup lang = "ts" name="Father">
import Child from './Child.vue'
import Child2 from './Child2.vue';
import {onMounted, provide, ref, watch} from'vue'

import MyInput from './MyInput.vue';

let car = ref('奔驰');
let toy = ref('');
let str = ref('')

let userName = ref('张三')
let password = ref('123456')

let a = ref(1)
let b = ref(2)
let c = ref(3)
let d = ref(4)


let money = ref(100)

// 子传父必须是函数
function sendToyF(value: string){
    console.log('父', value);
    toy.value = value;
}

watch(str, (newVal, oldVal)=>{
    console.log(newVal);
    console.log(oldVal)
})

function bindChildEvent(vaule:string){
    console.log('触发子组件事件haha', vaule)
}


function updateAValue(){
    a.value = 6
}


function getRefs(refs: any){
    console.log(refs);
    for(let key in refs){
        console.log(refs[key]?.book,3);
    }
   
}

function updateMoney(value:number){
    money.value -= value;
}

defineExpose({car})


// 向后代提供的变量
// money传递的时候不能穿money: money.value, 这不是响应式的, 孙子组件使用的时候也就不是响应式的.
// {money:money, updateMoney}简写为{money, updateMoney}
provide('moneyContext', {money, updateMoney})
provide('giveCar', car)

</script>
<style scoped>
.father{
    padding: 10px;;
    background-color: orange;
    border: 1px black;
    margin-bottom: 30px;
    border-radius: 20px;
}
</style>