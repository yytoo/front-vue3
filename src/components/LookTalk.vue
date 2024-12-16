<template>
    <div class="talk">
        <button @click="getTalk">获取一句土味</button>
        <ul>
            <li v-for="(item,index) in talkList" :key = "item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>
<script setup name="LookTalk">
import { reactive } from 'vue';
import axios from "axios"
import { nanoid } from 'nanoid';
import { useTalkStore } from '@/store/talk'
import { storeToRefs } from 'pinia';


let talkStore = useTalkStore();
const { talkList } = storeToRefs(talkStore);

talkStore.$subscribe((mutate, state) => {
    console.log('talkStore里面的保存的数据发生变化')
    console.log(mutate);
    console.log(state);
    localStorage.setItem('talkList', JSON. stringify(state.talkList));
})

function getTalk(){
    talkStore.getTalk();
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