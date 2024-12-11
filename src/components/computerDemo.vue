<template>
  <div>
    姓: <input type = "text" v-model = "firstName"/><br/> <!-- 双向绑定使用v-model:value 单向显示使用v-brand:value -->
    名: <input type = "text" v-model = "lastName"/><br>
    全名: <span>{{ fullName }}</span><br>
    全名: <span>{{ fullName }}</span><br>
    <button @click="changeFullName">修改全名</button>
  </div>
  <div>
    {{ sum }}<br>
    <button @click="changeSum">sum+1</button>
    <h2 ref="name2">姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <button @click="changeAge">年龄+1</button>
    <button @click="changePerson">修改人</button>
  </div>
  <div>
    {{ car.name }}={{ car.price }}<br>
    <button @click="changeCar">修改车</button>
    <button @click="changeCarPrice">修改车价格</button>
    {{ personCar.name }}-{{ personCar.car.car_price }}<br>
    <button @click="changePersonCar">修改人持有的车</button>
    <button @click="changePersonName">修改持车人</button>
    <button @click="changePersonCarPrice">修改持有车的价格</button>
  </div>
  <div>
    <h2>需求: 当水温达到60℃, 或者水位达到80cm, 发送消息</h2>
    <h2>当前水温: {{ template }} ℃</h2><br>
    <h2>当前水位: {{ height }} cm</h2><br>
    <button @click="changeTemplate">修改水温</button>
    <button @click="changeHeight">修改水位</button>
    <button @click="showName2">showName2</button>
  </div>
</template>

<script setup lang = 'ts' name = 'computerDemo'>
import { ref, computed, watch, reactive, watchEffect } from 'vue';
    let firstName = ref("哈哈");
    let lastName = ref("三");

    let sum = ref(0)

    let person = ref({
        name: "张三",
        age: 18
    });

    let car = reactive({
        name: "长安",
        price: 5
    })

    let personCar = reactive({
        name : "张三",
        age: 24,
        car : {
            car_name: "长城",
            car_price: 5
        }
    })

    let template = ref(10);

    let height = ref(0);

    // 计算属性: 只要依赖的数据发生变化, 他就会重新计算; 但是fullName本身只读
    let fullName = computed(() => {
        console.log("开始执行计算属性"); //  有缓存, 多次使用只会计算一次
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    })
    // 可读写的计算属性
    let fullNameW = computed({
        get(){
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
        },
        set(val){
            const [str1, str2] = val.split('-')
            firstName.value = str1
            lastName.value = str2
        }
        
    })

    // 创建一个name2用于存储ref标记的内容, 在组件上 打印实例对象
    let name2 = ref();
    function showName2(){
        console.log(name2.value);
    }
    // 对计算属性的value进行修改触发set
    function changeFullName(){
        fullNameW.value = "li-si"
    }

    /**
     * watch监视数据类型: 1. ref定义的数据, 2.reactive定义的数据, 3.函数返回一个值(getter函数), 4. 一个包含上述内容的数组
     */
    function  changeSum(){
        sum.value += 1
    }
    function changeAge(){
        person.value.age += 1
    }
    function changePerson(){
        person.value = {
            name: "李四",
            age: 19
        }
    }
    function changeCar(){
        car = Object.assign(car,{name: "东风", price: 7})
    }
    function changeCarPrice(){
        car.price = 10;
    }
    function changePersonCarPrice(){
        personCar.car.car_price = 10;
    }
    function changePersonCar(){
        console.log("changePersonCar")
        personCar.car = {
            car_name : "大众",
            car_price: 15
        }
    }
    function changePersonName(){
        personCar.name = "李四"
    }

    function changeTemplate(){
        template.value += 10;
    }

    
    function changeHeight(){
        height.value += 10;
    }
    // 1. 不能监视sum.value, 只能监视ref定义的数据sum
    const stopWatch = watch(sum, (newValue, oldValue) => {
        console.log("sum变化了 " + newValue +" " +oldValue);
        if(newValue >= 10){   //值大于10以后不再监视
            stopWatch()
        }
    })
    // 2. 监视ref定义的对象类型的数据, 监视对象的地址值, 需要对对象进行赋值
    const stopWatchPerson = watch(person, (newValue, oldValue) => {
        console.log("人发生变化 ",  newValue + " " + oldValue);
        if(newValue.age >= 25){
            stopWatchPerson()
        }
    })
    /**
     * 2. 监视ref定义的对象类型的数据, 监视对象的地址值, 需要对整个对象进行赋值; 
     *  immediate:true是进入页面先监视一次; deep是监听对象里面的具体值
     * 如果是直接修改整个对象, oldValue是改变前的, 因为不是一个对象了.  如果是修改单个值, oldValue是改变后的, 因为他们是同一个对象
     **/ 
    const stopWatchAge = watch(person, (newValue, oldValue) => {
    console.log("年龄发生变化 ",  newValue.age + " " + oldValue?.age);
        if(newValue.age >= 25){
            stopWatchPerson()
        }
    }, {deep:true, immediate:true})

    // 3. 监视reactive定义的对象类型的数据, 且默认是开启深度监视. 注意此处是用Object.assign对值进行修改
    watch(car, (newValue, OldValue) => {
        console.log('car变化了', newValue, OldValue);
    })
    // 4.监视响应式对象中的某个属性, 且该属性是基本类型的, 要写成函数式
    watch(() => personCar.name, (newValue, oldValue) => {
        console.log("持车人名字发生变化", newValue, oldValue);
    })
    watch(() => personCar.car.car_price, (newValue, oldValue) => {
        console.log("持有车价格发生变化", newValue, oldValue);
    })
    // 监视响应式对象中的某个属性, 且该属性是对象类型的, 可以直接写, 也能写函数,更推荐直接写函数(包了函数相当于监视对象地址值, 直接对对象赋新值也能监视到)
    watch([() => personCar.name,() => personCar.car], (newValue, oldValue) => {
        console.log("持有车发生变化", newValue, oldValue);
    },{deep:true})

    watch([template, height], (value) => {
        let [newTemp, newHeight] = value;
        if(newTemp >= 60 || newHeight >= 80){
            console.log(value);
        }
    })
    // 立即运行一个函数, 同时响应式地追踪其依赖, 并再依赖更改时重新执行该函数
    watchEffect(() => {
        if(template.value >= 60 || height.value >= 80){
            console.log(template, height);
        }
    })
</script>

<style scoped>

</style>