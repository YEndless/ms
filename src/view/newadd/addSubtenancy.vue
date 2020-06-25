<template>
  <div style="width: 500px ; ">
    <h4 style="text-align: center">
      新增转借
    </h4>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="设备号"  prop="lendingEquipmentNumber">
        <el-input v-model="form.lendingEquipmentNumber" ></el-input>
      </el-form-item>

      <el-form-item label="设备名"  prop="lendingEquipmentName">
        <el-input v-model="form.lendingEquipmentName"></el-input>
      </el-form-item>
      <el-form-item label="经手人"  prop="handlingPersonnel">
        <el-input v-model="form.handlingPersonnel"></el-input>
      </el-form-item>
      <el-form-item label="借出日期"  prop="borrowDate">
        <div class="block">
          <el-date-picker
            v-model="form.borrowDate"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="归还日期"  prop="returnDate">
        <div class="block">
          <el-date-picker
            v-model="form.returnDate"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
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
          lendingEquipmentNumber: '',
          lendingEquipmentName: '',
          handlingPersonnel : '',
          borrowDate: '',
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
            "lendingEquipmentNumber": that.form.lendingEquipmentNumber,
            "lendingEquipmentName":that.form.lendingEquipmentName,
            "handlingPersonnel":that.form.handlingPersonnel,
            "borrowDate":that.form.borrowDate,
            "returnDate":that.form.returnDate
          }
          var that = this
          this.$axios
            .post(this.$setting.ApiRoot+'/subtenancy/save',qs.stringify(postData))
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
