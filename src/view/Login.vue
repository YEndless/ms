<template>
  <el-container style="text-align: center ; margin: 0">
    <el-header> </el-header>
    <el-main style="margin:10px 225px 0 225px;    text-align: center ;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)" >
      <div style="font-weight: 700">系统登陆</div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"   class="demo-ruleForm login-container"  >
        <el-form-item label="账号" prop="account">
          <el-input v-model.number="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" size="large" style="width:100%;">登录</el-button>
<!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
  //import NProgress from 'nprogress'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }

      };
      var validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        }

          };
      return {
        ruleForm: {
          pass: '',
          account: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          account: [
            { validator: validateAccount, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        console.log(this.ruleForm.account)
        console.log(this.ruleForm.pass)

            var that = this;
            this.$axios
              .post(this.$setting.ApiRoot+'/user/sign_in', {"account": this.ruleForm.account, "pass": this.ruleForm.pass})
              .then( (response) => {
                console.log(response.data.code)
                if (response.data.code == 1){
                  this.$message({
                    message: response.data.msg,
                    type: 'success'
                  });
                  // console.log(JSON.stringify(response.data));
                  localStorage.setItem("loginUser", JSON.stringify(response.data.data))
                  that.$router.push("/")
                }else{
                  this.$message.error(response.data.msg);
                }
              })
            console.log('555')
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>

<style scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 40px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

  }
</style>
