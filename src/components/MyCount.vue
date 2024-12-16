<template>
    <div class="count">   
        <h2>当前求和为: {{ bigSum }}</h2>
        <!-- v-model.number转为数字-->
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>
<script setup lang="ts" name ="MyCount">
import { reactive, ref } from 'vue';
import {useCountStore} from '@/store/count'
import { storeToRefs } from 'pinia';

let n = ref(1)

// 得到一个专门保存count相关的store
let counntStore = useCountStore(); 
// storeToRefs只会关注store中数据, 不会对方法进行ref包裹
// 能够获取state和getters里面的值
const {sum, bigSum} = storeToRefs(counntStore);

function add(){
    // 第一种方法, 直接改
    // counntStore.sum += n.value;

    /**
     * 方法二
     *  counntStore.$patch({
     *    sum : 100 
     *  })
     */

     counntStore.increment(n.value);
}

function  minus(){
    counntStore.sum -= n.value;
}

</script>
<style scoped>
    .count{
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    select, button{
        margin: 0 5px;
        height: 25px;
    }
</style>