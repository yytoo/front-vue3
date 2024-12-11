<template>
  <div>
    
        <h2>{{ name }}</h2>
        <h2>{{ age }}</h2>
        <h2>{{ dataA }}</h2>
        <button @click="changeName">changeName</button>
        <button @click="showTel">showTel</button>
        <button @click="methodsA">methodsA</button>
  </div>
  <computerDemo/>
</template>

<script lang ="ts">

import computerDemo from './computerDemo.vue'
import {ref} from 'vue' // 引入ref函数

export default {
    components: { computerDemo },
    name:'Person',
    beforeCreate(){
        console.log('beforeCreate')
    },
    // setup生命周期早于data, 所以setup中不能使用data中的数据
    setup(){
        // console.log(this) //setup函数中的this是undefined, Vue3中已经弱化this了
        // 数据, 原来是写在data中的, 此时的name/age/tel都不是响应式的数据
        //数据
        let name =ref("demo") // ref创建基本类型(也可以是对象)的响应式, 模板里面自动带.value, function里面要手动加.value
        let age = 18 //此时的age不是响应式的
        let tel = "13999999999"

        //方法
        function changeName (){
            console.log(name)
            name.value = "demo1" // 这样修改name, 值是改了, 但是不是响应式的, 页面没有变化; 可以用volar插件简化.value
            console.log(name)
        } 

        function showTel(){
            alert(tel)
        }
        // 数据 方法交出去, 模板中才可以使用; 可以使用setup语法糖简化
        return {name, age, changeName, showTel}
    },
    data(){
        return {
            dataA: 100,
            setupAge: this.age
        }
    },
    methods:{
        methodsA(){
            console.log('methods' + this.setupAge) //methods能用this读取到setup中的数据
        }
    }
}
</script>

<style>

</style>