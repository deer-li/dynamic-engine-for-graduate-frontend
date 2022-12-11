import Vue from 'vue'
import Router from 'vue-router'

import Home from '../demo/Home.vue'
import LanguageView from './LanguageView.vue'

Vue.use(Router)

const language = localStorage.getItem('language') || (navigator.language == 'zh-CN' ? 'zh-CN' : 'en-US')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: to => ({name: 'index', params: {lang: language}})
    },
    {
      path: '/:lang',
      // name: 'lang',
      component: LanguageView,
      children: [
        {
          path: '',
          name: 'index',
          component: Home
        }
      ]
    },
    //下面是自定义路由，请求自己后台接口，主要是毕设所用，作为切入点，关键是从路由获取数据
      //然后路由绑定到组件中的按钮上，完成触发，其实在form-making项目中是有一个点的
      //那就是只有当被拖放在画布中的元素，才会在右侧这个页面中产生相应的属性，那既然这样
      //我对整体先有个定义，就让右侧子标签一有所有组件的所有属性，对于具体组件有哪些属性
      //我通过组件属性表和组件表来界定，然后何时触发子标签页中的属性列表，那要把三个div进行一个绑定
      //我这个路由就是想为属性设置面板中的组件属性来完成相关数据服务

    // {
    //   path:'http://localhost:8081/hfuu/componentType/getComponentTypeInfo',
    //   name:'widgetTypeConfig',
    //   //现在认为path和component是紧密绑定在一起的，对于整体的组件和路由绑定
    //   component:WidgetConfig,
    //   //所以应该为整个面板配一个分组件，我现在先为后台消息的返回进行对象封装
    //   //请求到数据后，先把数据放在指定位置
    //
    // }
  ]
})