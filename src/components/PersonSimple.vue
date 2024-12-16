<template>
  <div>
    <h2 style="color: blue;">一辆{{ car.brand }}车, 价值{{ car.price }}</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <button @click="changeBrand">修改品牌</button>
    <br>
    <ul>
        <li v-for="item in games" :key="item.id">
            {{ item.name }}
        </li>
    </ul>
    <button @click="changeFirstGame">changeFirstGame</button>
  </div> 
  <div>
    <ul>
        <li v-for="item in list" :key="item.id">
            {{ item.name }} --{{item.age}}
        </li>

    </ul>
  </div>
</template>
<script setup lang="ts" name = "PersonSimple">
    import { reactive, toRefs, toRef, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount } from 'vue';
    // 导入ts
    import {type PersonInter, type Persons} from '@/types';

    /**
     * 接收父组件传入的参数
     * ?  入参可空 -> 限制必要性
     * <>指定入参类型
     * list:Persons  父组件入参, Persons入参类型 ->接收list+限制类型
     * withDefaults 指定默认值
     * */
    let fatherList = withDefaults(defineProps<{list?:Persons}>(), {
        list:() => [{id:"test01", name:"王麻子", age:19}]
    });
    console.log("开始打印父组件传递参数", fatherList);

   
    let car = reactive({brand: '东风', price : 100})
    let games = reactive([
        {id: "01", name : "王者荣耀"},
        {id: "02", name : "原神"}
    ])
    let a = ref(0);
    let b = ref(0);


    /** 
     * 解构赋值 相当于两行代码; let brand = car.brand; let price = car.price; 
    let {brand, price} = car
    function changeBrand(){
        brand = "长安"  // 解构赋值的值, 页面是不更新的, 但是brand的值打印出来了
        console.log(brand) // 这个brand相当于let brand的值, 未定义ref
        console.log(car.brand) // 这个是reactive后的car.brand, 上面的代码修改的"长安并没有改变他
    }
     */
    // 对解构赋值使用toRefs
    let {brand, price} = toRefs(car)
    // toRef单个赋值
    let priceSingle = toRef(car, 'price')

    function changePrice(){
        car.price += 10; //如果使用ref代理car, 则需要car.value.price
        console.log(car.price);
        priceSingle.value += 1;
        console.log(car.price)
    }

    function changeFirstGame(){
        games[0].name = "zzz" //如果使用ref代理car, games.value[0].name
    }

    function changeCar(){
        // car= reactive({brand:"奥托", price : 200})  // 这么写页面是不更新的, 使用reactive不能直接给对象重新指向新对象, 赋值之后的car是另一个car
        // 使用分配的方式, 类似beancopy
        Object.assign(car, {brand:"奥拓", price : 200})
    }
    // ref的底层的value调用的reactive
    /**
     * 需要一个基本类型的响应式数据, 必须使用ref
     * 需要一个响应式对象, 层级不深, ref reactive都可以
     * 需要一个响应式对象, 且层级较深, 推荐使用reactive
     */
     function changeBrand(){
        brand.value = "长安"  // 使用toRefs后, 相当于ref 
        console.log(car.brand) // 使用ref会修改数据源
     }
     // 使用ts的对象
     let person:PersonInter = {id:'afdf34', name:'张三', age:60};
     let personList:Array<PersonInter> = [
     {id:'afdf34', name:'张三', age:60},
     {id:'afdf34', name:'李四', age:70},
     ]
     let persons =reactive<Persons>([
     {id:'afdf34', name:'张三', age:61},
     {id:'afdf34', name:'李四', age:71},
     ])
     console.log(persons);
     //向上层暴露参数, 在app打印.value
     defineExpose({a})

     // 挂载
     onBeforeMount(() => {
        console.log("personSimple挂载前")
     })

     onMounted(() => {
        console.log("挂载完毕")
     })
     onBeforeUpdate(() => {
        console.log("更新前")
     })
     onUpdated(() => {
        console.log("更新完毕")
     })
     onUnmounted(() => {
        console.log("销毁完成")
     })
     onBeforeUnmount(() => {
        console.log("销毁前")
     })
</script>

<style>

</style>
