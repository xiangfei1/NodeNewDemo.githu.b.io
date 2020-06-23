// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui' //导入elementui
import 'nm/element-ui/lib/theme-chalk/index.css'  //使用 elementui 的样式
import '@/assets/vue.css'
import tab from '@/utils/tab.js'
import moment from 'moment' //时间格式化插件
moment.locale('zh-cn')  //设置本地时间中文显示

Vue.filter('dateFormat',(dataStr,pattern) => {
  return moment(dataStr,pattern).startOf('day').fromNow()
})

Vue.config.productionTip = false  //阻止启动生产消息，减少应用的体积和运行是的内存开销
Vue.prototype.$tab = tab

Vue.use(elementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
