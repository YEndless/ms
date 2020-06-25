<template>
  <div style="width: 500px ; ">
    <h4 style="text-align: center">
      新增库存
    </h4>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="现存数量" prop="quantityOfExistingEquipment">
        <el-input v-model="form.quantityOfExistingEquipment" type="number" ></el-input>
      </el-form-item>
      <el-form-item label="设备号" prop="equipmentNumber">
        <el-input v-model="form.equipmentNumber"></el-input>
      </el-form-item>
      <el-form-item label="设备名" prop="equipmentName">
        <el-input v-model="form.equipmentName"></el-input>
      </el-form-item>
      <el-form-item label="设备状态" prop="equipmentStatus">
        <el-input v-model="form.equipmentStatus" type="number"></el-input>
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
          quantityOfExistingEquipment: '',
          equipmentNumber: '',
          equipmentName: '',
          equipmentStatus:''
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
            "quantityOfExistingEquipment": that.form.quantityOfExistingEquipment,
            "equipmentNumber":that.form.equipmentNumber,
            "equipmentName":that.form.equipmentName,
            "equipmentStatus":that.form.equipmentStatus
          }
          var that = this
          this.$axios
            .post(this.$setting.ApiRoot+'/stock/save',qs.stringify(postData))
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
