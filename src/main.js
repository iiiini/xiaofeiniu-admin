import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI); //注册ElementUI插件
Vue.prototype.$axios = axios //把axios设置为所有vue组建的成员属性，以后可以用this.$axios使用异步请求功能
Vue.config.productionTip = false
//创建全局过滤器
Vue.filter('date',(val)=>{
    //把bigint转为yyyy-mm-dd
    var date = new Date(val)
    var yy = date.getFullYear()
    var mm = date.getMonth()+1
    mm = mm>9 ? mm : '0'+mm
    var dd = date.getDate()
    dd = dd > 9 ? dd: "0"+dd
    return yy+'-'+mm+"-"+dd
})
Vue.filter('datetime',(val)=>{
    //把bigint转为yyyy--mm--dd hh:mm:ss
    var date = new Date(val)
    var yy = date.getFullYear()
    var mm = date.getMonth()+1
    mm = mm>9 ? mm : '0'+mm
    var dd = date.getDate()
    dd = dd > 9 ? dd: "0"+dd
    var hh = date.getHours()
    hh = hh > 9 ? hh: "0"+hh
    var mi = date.getMinutes()
    mi = mi > 9 ? mi: "0"+mi
    var ss = date.getSeconds()
    ss = ss > 9 ? ss: "0"+ss
    return yy+'-'+mm+"-"+dd+" "+hh+":"+mi+":"+ss
})
Vue.filter('currency',(val)=>{
    //把int转为￥xx.yy
    return '￥'+val.toFixed(2)
})
Vue.filter("tableStatus",(val)=>{
    if(val==1) return "空闲";
    else if(val==2) return "预定";
    else if(val==3) return "占用";
    else return "其他";
})
new Vue({ //全局的VUE实例对象
  router,
  store,  //指定当前项目唯一的Vuex储存仓库对象，其中保存着可供左右的组件共享的数据
  render: h => h(App)
  //根据App组件创建<App></App>元素，挂载到#app内容
//   render: (createElement)=>{
//     return createElement(App);
// }
}).$mount('#app')
