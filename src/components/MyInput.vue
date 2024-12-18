<template>
    <h2>自定义input</h2>{{ asd }}
    <input class= "myinput" type="text" :value="modelValue" @input="emit('update:modelValue', (<HTMLAnchorElement>$event.target.value))">
        <input class="myinput" type = "text" :value="asd" @input="emit('update:asd', (<HTMLAnchorElement>$event.target.value))">
</template>
<script setup name = "MyInput" lang ="ts">
defineProps(['modelValue', 'asd'])
const emit = defineEmits(['update:modelValue', 'update:asd'])
</script>
<style scoped>
.myinput{
    border:2px soild black;
    background-image: linear-gradient(45deg, red, yellow, green);
    height: 30px;
    font-size:20px;
    color: white;
}
</style>