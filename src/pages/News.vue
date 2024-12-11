<script setup lang="ts" name = "News">
import {reactive} from 'vue'
import { RouterLink, RouterView , useRouter} from 'vue-router';
const newList = reactive([
    {
        id:'asdf12433',
        title:'很好的抗癌食物',
        content:'西蓝花'
    },
    {
        id:'asdf124313',
        title:'好消息',
        content:'学IT'
    },
    {
        id:'asdf1243132',
        title:'万万没想到',
        content:'漫画'
    },
])

// 编程式导航
let router = useRouter();
interface NewsInter {
    id: string,
    title: string,
    content: string
}
function showNewsDetail(item:NewsInter){
    router.push({
        path:'/news/detail',
        query:{
            id: item.id,
            title: item.title,
            content: item.content
        }
    })
}
</script>

<template>
<!--导航区---->
<div>
    <ul>
        <li v-for="item in newList" :key="item.id">
            <!-- 第一种写法
            <RouterLink :to="`/news/detail?id=${item.id}&title=${item.title}&content=${item.content}`">
                {{ item.title }}
                </RouterLink>-->
            <!--第二种写法-->
            <button @click="showNewsDetail(item)">查看新闻</button>
            <RouterLink
                :to = "{
                    path:'/news/detail',
                    query:{
                        id: item.id,
                        title: item.title,
                        content: item.content
                    }
                }"
            >{{ item.title }}</RouterLink>

            <!-- params传参方式
            <RouterLink
                :to = "{
                    name:'xinwen',
                    params:{
                        id: item.id,
                        title: item.title,
                        content: item.content
                    }
                }"
            >{{ item.title }}</RouterLink>-->
        </li>

    </ul>
</div>
<!--展示区-->
<div class="news-content">
    <RouterView></RouterView>
</div>
</template>

<style>
</style>