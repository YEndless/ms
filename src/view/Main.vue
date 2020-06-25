<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="block" style="margin-right: 50px ;">
          <div style="padding-bottom: 50px ;">
            <el-button type="success" round>时间线</el-button>
          </div>
          <el-timeline reverse>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp">
              {{activity.content}}
            </el-timeline-item>
          </el-timeline>
        </div>

      </el-col>
      <el-col :span="12">
        <div style="padding-bottom: 50px ;">
          <el-button type="primary" round>成员</el-button>
        </div>
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="史冬阳B17041902" name="1">
            <div>数据库设计+系统登录+购买管理+转借管理后端实现</div>
          </el-collapse-item>
          <el-collapse-item title="刘宇欣B17041903" name="2">
            <div>系统登录+购买管理+转借管理+维修管理前端实现</div>
          </el-collapse-item>
          <el-collapse-item title="陈睿玥B17041905" name="3">
            <div>库存管理+报废管理+用户管理+前端代码整合</div>
          </el-collapse-item>
          <el-collapse-item title="叶晓郎B17041913" name="4">
            <div>维修管理+库存管理+报废管理+用户管理+后端代码整合+服务器部署</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Main",
      data() {
        return {
          isCollapse: true,
          reverse: true,
          activities: [
            {
              content: '写报告，收尾',
              timestamp: '2020-06-17'
            },
            {
              content: '打包项目，部署服务器',
              timestamp: '2020-06-17'
            },
            {
              content: '测试与改bug',
              timestamp: '2020-06-16'
            },
            {
              content: '代码整合',
              timestamp: '2020-06-15'
            },
            {
            content: '前端实现',
            timestamp: '2020-06-12'
          }, {
            content: '后端实现',
            timestamp: '2020-06-11'
          }, {
            content: '数据库设计',
            timestamp: '2020-06-10'
          },
            {
              content: '需求分析',
              timestamp: '2020-06-09'
            }],
          activeName: '1'
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
