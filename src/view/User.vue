<template>

  <div>
    <el-row :gutter="20" id="el">
      <el-col :span="18"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6">
        <el-button type="primary" round style="text-align: center" @click="getAll">刷新</el-button>

        <el-button type="primary" round style="text-align: center" @click="pur">新增用户</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData.filter(data => !search || data.userName.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        sortable
        label="id"
        prop="id"
      >
      </el-table-column>
      <el-table-column
        sortable
        label="账号"
        prop="account"
      >
      </el-table-column>
      <el-table-column
        sortable
        label="密码"
        prop="password">
      </el-table-column>
      <el-table-column
        sortable
        label="姓名"
        prop="userName">
      </el-table-column>
      <el-table-column
        sortable
        label="工号"
        prop="employeeID"
      >
      </el-table-column>
      <el-table-column
        sortable
        label="级别"
        prop="userType"
      >
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入姓名关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)" >修改密码</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除账号  </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import qs from "qs";

  export default {
    data() {
      return {
        tableData:[],
        search: ''
      }
    },
    created(){
      this.getAll() ;
    },
    methods:{
      open() {

      },
      getAll(){
        var that = this
        this.$axios
          .get(this.$setting.ApiRoot+'/user/all')
          .then(function (response) {
            // alert(JSON.stringify(response.data));
            console.log(JSON.stringify(response.data));

            that.tableData = response.data;
          })
      },
      pur(){
        this.$router.push({path:'/adduser'});
      },
      handleEdit(index, row) {
        console.log(index, row);
        console.log( row);
        console.log(index);


        this.$prompt('请输入密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {

          var that = this;
          let postData = {
            "id":row.id,
            "account": row.account,
            "password":value,
            "userName":row.userName,
            "employeeID":row.employeeID,
            "userType":row.userType
          }
          var that = this
          this.$axios
            .post(this.$setting.ApiRoot+'/user/save',qs.stringify(postData))
            .then((res)=> {
              // alert(JSON.stringify(response.data));
              console.log(res)
              this.getAll() ;
            }).catch((res)=>{
            // alert("失败");
            console.log(res,'失败')
          })

          this.$message({
            type: 'success',
            message: '修改成功 !'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });
        });

      },
      handleDelete(index, row) {

        console.log(index, row);
        this.$confirm('即将删除',
          '提示',
          {
            confirmButtonText:'确定',
            cancelButtonText:'取消',
            type:'warning'
          }).then((response)=>{
            this.$axios
              .delete(this.$setting.ApiRoot +'/user/delete', {
                  params:
                    {
                      id:row.id
                    }
                }
              )
              .then(response=>{
                this.$message({message: "删除成功", type : 'success'})
                this.getAll() ;
              })
          }

        ).catch(()=>{
          this.$message({
            type:'info',
            message:'删除取消'
          })
        })
      }
    }
  }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
  }
  #el .el-col {
    border-radius: 4px;
    text-align: right;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
</style>
