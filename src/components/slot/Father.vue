<template>
    <div class="slot-father cotent">
        <Category >
            <!-- 指定插槽的name, 可以用#简化-->
            <template v-slot:s2>
                <ul>
                    <li v-for="game in games" :key="game.id">
                        {{ game.name }}
                    </li>
                </ul>
            </template>
            <template v-slot:s1>
                <h2>热门游戏列表</h2>
            </template>
        </Category>
        <Category >
            <template #s2>
                <img :src="imgUrl" alt="">
            </template>
            <template #s1>
                <h2>今日美食城市</h2>
            </template>
        </Category>
        <Category>
            <video :src="videoUrl" controls></video> 
            <template v-slot:s1>
                <h2>今日影视推荐</h2>
            </template>
        </Category>
    </div>
    <div class="slot-father cotent">
        <Game>
            <!-- 获取插槽中使用:带上来的数值-->
            <template v-slot="params">
            <ul>
                <li v-for="g in params.youxi" :key="g.id">
                    {{ g.name }}
                </li>
             </ul>
             </template>
        </Game>
        <Game>
            <!-- 获取插槽中使用:带上来的数值-->
            <template #default="{youxi}">
            <ul>
                <li v-for="g in youxi" :key="g.id">
                    {{ g.name }}
                </li>
             </ul>
             </template>
        </Game>
    </div>
</template>
<script setup name="Father" lang ="ts">
import Category from './Category.vue';
import {ref, reactive} from 'vue'
import { nanoid } from 'nanoid';

import Game from './Game.vue';

let games = reactive([
    {id:nanoid(), name: "塞尔达是天"},
    {id: nanoid(), name: "p5天下第一"},
    {id: nanoid(), name: "大表哥2"},
    {id: nanoid(), name: "GTA5"},
])
let imgUrl = "https://z1.ax1x.com/2023/11/19/piNxLo4.jpg";
let videoUrl="http://clips.vorwaerts-gmbh.de/big buck bunny.mp4";
</script>
<style scoped>
.slot-father{
    background-color:rgb(165,164,164);
    padding: 20px;
    border-radius: 10px;
    margin-top:20px;
}
.cotent {
    display: flex;
    justify-content: space-evenly; 
}
img,video{
    width: 180px;
}
.category h2{
    background-color:orange;
    text-align: center;
}
</style>