<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item  v-for="item in TabBarData"
                     :itemIcon="item.icon"
                     :item-text="item.name"
                     :key="item.name"
                     @itemClick="onClick(item)"
      >
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/common/tabbar/TabBar";
import TabBarItem from "./components/common/tabbar/TabBarItem";
const TabBarData = [
  {
    name:"首页",
    icon:{
      itemIcon:require("./assets/img/tabbar/dianpu.png"),
      itemIconActive:require("./assets/img/tabbar_active/dianpu.png"),
    },
    url:"/home"
  },
  {
    name:"发现",
    icon:{
      itemIcon:require("./assets/img/tabbar/yun.png"),
      itemIconActive:require("./assets/img/tabbar_active/yun.png"),
    },
    url:"/category"
  },
  {
    name:"购物车",
    icon:{
      itemIcon:require("./assets/img/tabbar/gouwu.png"),
      itemIconActive:require("./assets/img/tabbar_active/gouwu.png"),
    },
    url:"/cart"
  },
  {
    name:"我的",
    icon:{
      itemIcon:require("./assets/img/tabbar/yonghuzu.png"),
      itemIconActive:require("./assets/img/tabbar_active/yonghuzu.png"),
    },
    url:"/profile"
  }
]
export default {
  name: 'App',
  data(){
    return{
      TabBarData
    }
  },
  components: {
    TabBar,
    TabBarItem
  },
  methods:{
    onClick(item){
      //点击两次会报错
      if(item.url === this.$route.path)return
      this.$router.replace(item.url)
    }
  }
}
</script>

<style>
@import "assets/css/base.css";
#app {

}
</style>
