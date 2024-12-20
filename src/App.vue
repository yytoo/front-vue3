<script lang="ts" setup name = "APP">
  import Person from './components/Person.vue'
  import {ref, reactive} from 'vue'
  import PersonSimple from './components/PersonSimple.vue'
  import {type Persons, type PersonInter} from '@/types'
  import { RouterLink, RouterView } from 'vue-router'
  import Other from './pages/Other.vue'
  let personsList = reactive<Persons>([
     {id:'afdf34', name:'张三', age:62, x:"str"},
     {id:'afdf34', name:'李四', age:73},
     ])

  let people = ref();
  function consoleTem(){
    console.log(people.value);
  }

  let isShow = ref(true);

  function showPersonSimple(){
    isShow.value = !isShow.value;
  }
</script>

<template>
  <div v-if="false">
    <button @click="consoleTem">打印ref</button>
    <button @click="showPersonSimple">是否展示personSimple</button>
    <Person/>
    <person-simple  ref="people" :list = "personsList" v-if="isShow"/>
  </div>

  <div class="app">
    <h2>Vue路由测试</h2>
    <!--导航区-->
    <div class="navigate">
      <RouterLink to="/" class="active">首页</RouterLink>
      <!-- 默认是push模式 -->
      <RouterLink replace :to="{name:'xinwen'}" >新闻</RouterLink>
      <RouterLink :to="{path:'/about'}" active-class="active">关于</RouterLink>
      <RouterLink :to="{path: '/other'}" active-class="active">其他</RouterLink>
    </div>
    <!--展示区-->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
#main-content{
  border: 2px black;
}
</style>
