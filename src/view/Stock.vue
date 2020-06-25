<template>

  <div>
    <el-row :gutter="20" id="el">
      <el-col :span="18"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6">
        <el-button type="primary" round style="text-align: center" @click="getAll">刷新</el-button>

        <el-button type="primary" round style="text-align: center" @click="pur">新增库存</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData.filter(data => !search || data.equipmentName.toLowerCase().includes(search.toLowerCase()))"
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
        label="设备数量"
        prop="quantityOfExistingEquipment"
      >
      </el-table-column>
      <el-table-column
        sortable
        label="设备号"
        prop="equipmentNumber">
      </el-table-column>
      <el-table-column
        sortable
        label="设备名"
        prop="equipmentName">
      </el-table-column>
      <el-table-column
        sortable
        label="设备状态"
        prop="equipmentStatus"
      >
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入设备名关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <!--<el-button-->
          <!--size="mini"-->
          <!--@click="handleEdit(scope.$index, scope.row)">Edit</el-button>-->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
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

      getAll(){
        var that = this
        this.$axios
          .get(this.$setting.ApiRoot+'/stock/all')
          .then(function (response) {
            // alert(JSON.stringify(response.data));
            that.tableData = response.data;
          })
      },
      pur(){
        this.$router.push({path:'/addstock'});
      },
      handleEdit(index, row) {
        console.log(index, row);
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
              .delete(this.$setting.ApiRoot +'/stock/delete', {
                  params:
                    {
                      id:row.id
                    }
                }
              )
              .then(response=>{
                this.$message({message: "删除成功", type : 'success'})
                this.getAll() ;              })
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
