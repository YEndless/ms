<template>
  <div style="width: 500px ; ">
    <h4 style="text-align: center">
      新增报废
    </h4>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="报废日期"  prop="retirementDate">
        <div class="block">
          <el-date-picker
            v-model="form.retirementDate"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="设备号"  prop="equipmentNumber">
        <el-input v-model="form.equipmentNumber"></el-input>
      </el-form-item>
      <el-form-item label="设备名"  prop="equipmentName">
        <el-input v-model="form.equipmentName"></el-input>
      </el-form-item>
      <el-form-item label="批准人"  prop="approver">
        <el-input v-model="form.approver"></el-input>
      </el-form-item>
      <div style="text-align: center">
        <el-button type="primary" @click="onSubmit"  >立即新增</el-button>

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
          retirementDate : '',
          approver: '',
          equipmentNumber: '',
          equipmentName: ''
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
            "retirementDate": that.form.retirementDate,
            "approver":that.form.approver,
            "equipmentNumber":that.form.equipmentNumber,
            "equipmentName":that.form.equipmentName,

          }
          var that = this
          this.$axios
            .post(this.$setting.ApiRoot+'/scrap/save',qs.stringify(postData))
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
