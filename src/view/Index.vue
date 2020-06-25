<template>
  <div class="">
    <el-container>
      <el-header>

        <Header style="background: #c1c1c1">

          <el-row :gutter="20">
            <el-col :span="20">
              设备管理系统
            </el-col>
            <el-col :span="4">
              <el-dropdown>
  <span class="el-dropdown-link" >
    设置<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                <el-dropdown-menu slot="dropdown">
                  <div  @click="dialogTableVisible = true">
                    <el-dropdown-item >我的

<!--                      <el-button >click 激活</el-button>-->

                    </el-dropdown-item>
                  </div>
<!--                  <div  @click="setting">-->
<!--                    <el-dropdown-item>设置</el-dropdown-item>-->
<!--                  </div>-->
                  <div  @click="signout">
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </div>
                </el-dropdown-menu>
              </el-dropdown>

            </el-col>
          </el-row>

        </Header>

      </el-header>

      <el-container>
        <el-aside width="205px" style="min-height: 1000px ; background-color: white">

          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <router-link to="/">
                  <el-menu-item index="0">
                      <i class="el-icon-s-home"></i>
                      首页
                  </el-menu-item>
                </router-link >

                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>设备管理</span>

                  </template>
                  <el-menu-item-group>
                    <router-link to="/purchase" style="">
                      <el-menu-item index="1-1">
                          购买管理
                      </el-menu-item>
                    </router-link>
                    <router-link to="/subtenancy">
                      <el-menu-item index="1-2">转借管理</el-menu-item>
                    </router-link >
                    <router-link to="/maintain">
                      <el-menu-item index="1-3">维修管理</el-menu-item>
                    </router-link >
                    <router-link to="/stock">
                      <el-menu-item index="1-4">库存管理</el-menu-item>
                    </router-link >
                    <router-link to="/scrap">
                      <el-menu-item index="1-5">报废管理</el-menu-item>
                    </router-link >
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-s-operation"></i>
                    <span>新增设备</span>

                  </template>
                  <el-menu-item-group>
                    <router-link to="/addpurchase" style="">
                      <el-menu-item index="3-1">
                        新增购买
                      </el-menu-item>
                    </router-link>
                    <router-link to="/addsubtenancy">
                      <el-menu-item index="3-2">新增转借</el-menu-item>
                    </router-link >
                    <router-link to="/addmaintain">
                      <el-menu-item index="3-3">新增维修</el-menu-item>
                    </router-link >
                    <router-link to="/addstock">
                      <el-menu-item index="3-4">新增库存</el-menu-item>
                    </router-link >
                    <router-link to="/addscrap">
                      <el-menu-item index="3-5">新增报废</el-menu-item>
                    </router-link >
                  </el-menu-item-group>
                </el-submenu>


                <el-menu-item index="3" :disabled="this.pd" @click="adduser">
                  <!--<span slot="title">用户管理</span>-->
                  <div>
                      <i class="el-icon-user"></i>
                      用户管理
                  </div>
                </el-menu-item>
                <router-link to="/others">
                  <el-menu-item index="4">
                      <i class="el-icon-more-outline"></i>
                      其他
                  </el-menu-item>
                </router-link >

              </el-menu>
            </el-col>
          </el-row>

        </el-aside>
        <el-container >
          <el-main style="border: 1px solid #b3c0d1">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
          <el-footer style="font-size: 10px ; text-align: right ;"> 第八小组@2020 </el-footer>
        </el-container>
      </el-container>
    </el-container>

    <el-dialog title="我的信息" :visible.sync="dialogTableVisible">
      <el-button type="primary" round style="width : 150px;"> 账号:{{user.account}}</el-button>
      <el-button type="success" round style="width : 150px;">工号:{{user.employeeID}}</el-button>
      <el-button type="info" round style="width : 150px;">姓名：{{user.userName}}</el-button>
    </el-dialog>
  </div>

</template>

<script>

  export default {
    name: "Main",
    data() {
      return {
        isCollapse: true,
        user:  JSON.parse(localStorage.getItem('loginUser')),
        pd:true,
        dialogTableVisible: false,
        user1:localStorage.getItem('loginUser')
      };
    },
    created(){
      console.log(this.user)
      if (this.user == null){
        this.$router.push("/login")
      }else {
        if (this.user.userType == 1){
          this.pd = false
        }else {
          this.pd = true
        }
      }
    },
    methods: {
      my(){
        console.log("111")
      },
      setting(){
        console.log("111")
      },
      signout(){
        localStorage.removeItem('loginUser')
        this.$router.push("/login")
      },
      adduser(){
        this.$router.push("/user")
      },
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
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  a {
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }
</style>
