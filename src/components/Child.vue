<template>
        <div class="child">
        <h3>子组件</h3>
        b: {{ b }}<br>
        其他: {{ $attrs }}
        <h4>玩具: {{ toy }}</h4>
        <h4>父车: {{ car }}</h4>
        <h4>书籍: {{ book }}</h4>
        <button @click="sendToy(toy)">sendToy</button>
        <button @click="emit('haha', 555)">emit触发</button>
        <button @click="emitter.emit('send-toy', toy)">触发emitter事件</button>
        <GrandChild v-bind = "$attrs"/>
        <button @click="changeCar($parent)">改变父组件车</button>
    </div>
</template>
<script setup lang = "ts" name ="Child">
import { ref, onMounted } from 'vue';
import emitter from '@/utils/emitter';
import GrandChild from './GrandChild.vue';

let toy = ref('奥特曼');
let book = ref('追忆似水年华');
 
defineProps(['car', 'sendToy', 'b']);

// 声明时间, 在父组件绑定上去
const emit = defineEmits(['haha'])

// 挂在3秒钟之后触发定义的事件emit
onMounted(() => {
    setTimeout(() => {
        emit('haha', 5555);
    }, 3000);
})

defineExpose({toy, book});

function changeCar(parent: any){
    console.log(parent)
    for(let key in parent){
        parent.car = "保时捷"
    }
}

</script>
<style scoped>
.child{
    border: 1px blue;
    background-color: antiquewhite;
    border-radius: 20px;
    margin: 20px;
    padding: 10px;
}
</style>