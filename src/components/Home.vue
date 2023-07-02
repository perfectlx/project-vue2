<template>
  <div class="hello">
    <h1>hello</h1>
    <el-button type="">hello</el-button>
    <el-button type="primary">hello</el-button>
    <el-button type="info">hello</el-button>
    <el-button type="success">hello</el-button>
    <el-button type="danger">hello</el-button>
    <el-tag>hahha</el-tag>
    <i class="fa fa-user"></i>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello{
  background:yellow;
  .el-button{
    color: blue;
  }
}
</style>
