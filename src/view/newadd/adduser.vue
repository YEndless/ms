<template>
  <div style="width: 500px ; ">
    <h4 style="text-align: center">
      新增用户
    </h4>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号"  prop="account">
        <el-input v-model="form.account" ></el-input>
      </el-form-item>

      <el-form-item label="密码"  prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="姓名"  prop="userName">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="工号"  prop="employeeID">
        <el-input v-model="form.employeeID"></el-input>
      </el-form-item>
      <el-form-item label="级别"  prop="userType">
        <el-input v-model="form.userType" type="number"></el-input>
      </el-form-item>
      <div style="text-align: center">
        <el-button type="primary" @click="onSubmit">立即新增</el-button>
      </div>

      <el-form-item>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import qs from 'qs';

  export default {
    data() {
      return {
        form: {
          account: '',
          password: '',
          userName : '',
          employeeID: '',
          returnDate: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$confirm('是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var that = this;
          let postData = {
            "account": that.form.account,
            "password":that.form.password,
            "userName":that.form.userName,
            "employeeID":that.form.employeeID,
            "userType":that.form.userType
          }
          var that = this
          this.$axios
            .post(this.$setting.ApiRoot+'/user/save',qs.stringify(postData))
            .then((res)=> {
              // alert(JSON.stringify(response.data));
              console.log(res)
              this.$refs['form'].resetFields();

            }).catch((res)=>{
            // alert("失败");
            console.log(res,'失败')
          })
          this.$message({
            type: 'success',
            message: '新增成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>
