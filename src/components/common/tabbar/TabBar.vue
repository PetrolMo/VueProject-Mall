<template>
<div id="tabbar">
<slot></slot>
</div>
</template>

<script>
export default {
name: "TabBar"
}
</script>
<style scoped>
#tabbar{
  background-color: #f6f6f6;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}

</style>
