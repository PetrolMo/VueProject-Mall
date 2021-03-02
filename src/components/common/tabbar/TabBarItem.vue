<template>
  <div class="tab-bar-item" @click="onClick">
    <img :src="icon" alt="">
    <div :style="activeStyle">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return{
    }
  },
  //在组件中，使用v-model对数据进行双向绑定时，最好不要绑定props中的数据
  props:{
    itemIcon: Object,
    itemText: String,
    itemClick:Function,
    activeColor:{
      type:String,
      default:'#1296db'
    }
  },
  computed:{
    isActive(){
      return this.$route.name === this.itemText
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    },
    text(){
      return this.itemText
    },
    icon(){
      return this.isActive ? this.itemIcon.itemIconActive: this.itemIcon.itemIcon
    }
  },
  methods:{
    onClick(){
      this.$emit("itemClick")
    }
  },

}
</script>

<style scoped>
.tab-bar-item{
  height: 49px;
  font-size: 14px;
  text-align: center;
}
.tab-bar-item img{
  margin-top: 1px;
  vertical-align: middle;
  height: 26px;
  width: 26px;
}
</style>
