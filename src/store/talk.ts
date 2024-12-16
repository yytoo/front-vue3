import { defineStore } from "pinia";
import axios from "axios"
import { nanoid } from "nanoid";
export interface TalkListBean {id: string, title:string};
export const useTalkStore = defineStore('talk', {
    state: (): {talkList: TalkListBean[]} => {
        return {
            talkList : JSON.parse(localStorage.getItem('talkList') as string) 
                        || [
                            {id: "adsf133", title:"不知道你有没有注意到"},
                            {id: "adsf1331", title:"请多多支持我们"},
                        ]
        }
    },
    actions:{
        async getTalk(){
            let uri = "https://api.uomg.com/api/rand.qinghua?format=json";
            try{
                const {data :{content}} = await axios.get(uri);
                console.log(content);
                let obj = {id: nanoid(6), title: content}
                // 末尾追加一个或者单个元素, 并且返回新的长度
                // let len = this.talkList.push(obj, obj);
                // 合并两个或者更多的数组, 返回一个新的数组
                //this.talkList = [...this.talkList, obj]
                // 合并多个数组, 并且返回新的数组
                //this.talkList = this.talkList.concat(obj)
                // 再数组开头添加一个或者多个元素, 返回新的长度
            let newLen = this.talkList.unshift(obj)
            } catch (error){
                console.log("==========================");
                console.log(error)
                this.talkList.unshift( 
                            {id: "adsf133", title:"不知道你有没有注意到"},
                            {id: "adsf1331", title:"请多多支持我们"},
                        )
            }
        }
    }
})