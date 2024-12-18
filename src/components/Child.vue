<template>
        <div class="child">
        <h3>子组件</h3>
        a: {{ a }}<br>
        其他: {{ $attrs }}
        <h4>玩具: {{ toy }}</h4>
        <h4>父车: {{ car }}</h4>
        <button @click="sendToy(toy)">sendToy</button>
        <button @click="emit('haha', 555)">emit触发</button>
        <button @click="emitter.emit('send-toy', toy)">触发emitter事件</button>
        <GrandChild v-bind = "$attrs"/>
    </div>
</template>
<script setup lang = "ts" name ="Child">
import { ref, onMounted } from 'vue';
import emitter from '@/utils/emitter';
import GrandChild from './GrandChild.vue';

let toy = ref('奥特曼');
 
defineProps(['car', 'sendToy', 'b']);

// 声明时间, 在父组件绑定上去
const emit = defineEmits(['haha'])

// 挂在3秒钟之后触发定义的事件emit
onMounted(() => {
    setTimeout(() => {
        emit('haha', 5555);
    }, 3000);
})

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