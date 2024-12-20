import mitt from "mitt";

// 调用mitt得到emitter, emitter能: 绑定事件, 触发事件
const emitter = mitt()


// 绑定事件
emitter.on("asd", () => {
    console.log('asb被调用')
})


// 每隔2秒触发一次时间asb
setInterval(() => {
    emitter.emit("asd")
}, 2000)


// 10秒后解绑asb
setTimeout(()=>{
    emitter.off("asd");
    // 绑定的时间全部解绑
    emitter.all.clear();
}, 10000)


export default emitter