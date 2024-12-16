import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
    // 真正存储数据的地方
    state(){
        return {
            sum:6
        }
    },
    // actions里面放置的是一个一个的方法, 用于响应组件中的动作
    actions:{
        increment(n: number){
            if(this.sum < 10){
                this.sum += n
            }
        },

        substract(n : number){
            if(this.sum > 3){
                this.sum += n
            }
        }
    },
    getters:{
        bigSum:state => {
            return state.sum * 10
        }
    }
});