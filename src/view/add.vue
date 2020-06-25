<template>
<div style="width: 500px ; ">
   <h4 style="text-align: center">
     新增购买
   </h4>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="设备数量" prop="purchaseNumber">
      <el-input v-model="form.purchaseNumber" type="number" ></el-input>
    </el-form-item>
    <el-form-item label="购入日期" prop="purchaseDate">
      <div class="block">
        <el-date-picker
          v-model="form.purchaseDate"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
    </el-form-item>
    <el-form-item label="购买经费" prop="purchaseFunds">
      <el-input v-model="form.purchaseFunds"></el-input>
    </el-form-item>
    <el-form-item label="经手人员" prop="purchasePerson">
      <el-input v-model="form.purchasePerson"></el-input>
    </el-form-item>
    <el-form-item label="设备号" prop="equipmentNumber">
      <el-input v-model="form.equipmentNumber"></el-input>
    </el-form-item>
    <el-form-item label="设备名" prop="equipmentName">
      <el-input v-model="form.equipmentName"></el-input>
    </el-form-item>
    <div style="text-align: center">
      <el-button type="primary" @click="onSubmit"  >立即新增</el-button>
<!--      <el-button type="primary" @click="resetForm('form')"  >dsddd增</el-button>-->

    </div>

    <el-form-item>
<!--      <el-button>取消</el-button>-->
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
          purchaseNumber: '',
          purchaseDate: '',
          purchaseFunds : '',
          purchasePerson: '',
          equipmentNumber: '',
          equipmentName: ''
        }
      }
    },
    methods: {
      resetForm(formName) {
        console.log("!11")
        this.$refs[formName].resetFields();
        console.log("!11")

      },
      onSubmit() {
        this.$confirm('是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var that = this;
          let postData = {
            "purchaseNumber": that.form.purchaseNumber,
            "purchaseDate":that.form.purchaseDate,
            "purchaseFunds":that.form.purchaseFunds,
            "purchasePerson":that.form.purchasePerson,
            "equipmentNumber":that.form.equipmentNumber,
            "equipmentName":that.form.equipmentName,

          }
          var that = this
          this.$axios
            .post(this.$setting.ApiRoot+'/purchase/save',qs.stringify(postData))
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
