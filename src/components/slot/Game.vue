<template>
    <div class="game">
      <h2>游戏列表</h2>
      <slot :youxi = "games" :imgUrl = "imgUrl" :videoUrl="videoUrl"></slot>
    </div>
</template>
<script setup name="Game" lang="ts">
import { reactive } from 'vue';
import { nanoid } from 'nanoid';

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
.game{
    width:200px;
    height:300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
h2{
    background-color:orange;
    text-align: center;
}

</style>