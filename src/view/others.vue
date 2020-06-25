<template>
    <div style="margin: 100px ;">
      <el-steps :active="2" align-center>
        <el-step title="编辑器" description="WebStorm Idea "></el-step>
        <el-step title="前端" description="VUE"></el-step>
        <el-step title="后端" description="SpringBoot"></el-step>
        <el-step title="数据库" description="mysql"></el-step>
      </el-steps>
    </div>
</template>

<script>
    export default {
        name: "others"
    }
</script>

<style scoped>

</style>
