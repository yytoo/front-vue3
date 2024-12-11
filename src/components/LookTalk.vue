<template>
    <div class="talk">
        <button @click="getTalk">获取一句土味</button>
        <ul>
            <li v-for="(item,index) in talkList" :key = "item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts" name="LookTalk">
import { reactive } from 'vue';
import axios from "axios"
import { nanoid } from 'nanoid';


let talkList = reactive([
    {id: "adsf133", title:"不知道你有没有注意到"},
    {id: "adsf1331", title:"请多多支持我们"},
])

async function getTalk(){
    let uri = "https://api.uomg.com/api/rand.qinghua?format=json";
    let {data:{content}} = await axios.get(uri); // {data:{content:title}}的简写方式 result结果中取data的值, 再取data中的值作为content
    let obj = {id:nanoid(), title:content}
    console.log(obj)
    talkList.unshift(obj);
}
</script>
<style scoped>
.talk {
    background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        margin-top: 50px;
}
</style>