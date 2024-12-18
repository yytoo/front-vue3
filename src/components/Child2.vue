<template>
    <div class = "child2">
        <h3>子组件2</h3>
        <h4>电脑: {{ computer }}</h4>
        <h4>哥哥给的玩具: {{ toy }}</h4>
    </div>
</template>
<script setup name ="Child2">
import { ref, onUnmounted } from 'vue';
import emitter from '@/utils/emitter';
let computer = ref('联想')
let toy = ref('');
// 给emitter绑定send-toy事件
emitter.on('send-toy', (value)=>{
    toy.value = value;
    console.log("send-toy", value)
})
// 在组件卸载时解绑send-toy事件
onUnmounted(() => {
    emitter.off('send-boy')
})
</script>
<style scoped>
</style>