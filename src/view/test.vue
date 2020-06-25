<template>
  <div style="margin-left: 0.5em; margin-right: 0.5em;">

    <li class="hjdz" v-on:click="showdiv()" style="list-style-type:none ;">
      测试
    </li>
    <div class="mask-black hide" id="show">
      <div class="select-area">
        <h3><span v-on:click="showdiv()">取消</span><span class="right" v-on:click="confirmArea()">确定</span></h3>
        <ul class="province">
          <li v-for="(item,index) in province" v-on:click="selectProvince(item, index) "
              style="list-style:none" :class="{'active':item.active,'':!item.active}" class="aaa">{{item.codeName}}</li>
        </ul>
        <ul class="city">
          　　　　　　<li v-for="(item,index) in city" v-on:click="selectCity(item, index) " style="list-style:none"
                    :class="{'active':item.active,'':!item.active}">{{item.codeName}}</li>
          　　　　</ul>
        　　　　<ul class="county">
        　　　　　　<li v-for="(item,index) in county" v-on:click="selectCounty(item, index) "
                  style="list-style:none" :class="{'active':item.active,'':!item.active}">{{item.codeName}}</li>
        　　　　 </ul>
      </div>
    </div>
<!--    <div class="mask-black hide" id="show">-->
<!--      <div class="select-area">-->
<!--        <h3><span v-on:click="showdiv()">取消</span><span class="right" v-on:click="confirmArea()">确定</span></h3>-->
<!--        <ul class="province">-->
<!--          <li v-for="(item,index) in province" v-on:click="selectProvince(item, index) "-->
<!--              style="list-style:none" :class="{'active':item.active,'':!item.active}">{{item.name}}</li>-->
<!--        </ul>-->
<!--        <ul class="city">-->
<!--  　　　　　　<li v-for="(item,index) in city" v-on:click="selectCity(item, index) " style="list-style:none"-->
<!--            :class="{'active':item.active,'':!item.active}">{{item.name}}</li>-->
<!--  　　　　</ul>-->
<!--  　　　　<ul class="county">-->
<!--  　　　　　　<li v-for="(item,index) in county" v-on:click="selectCounty(item, index) "-->
<!--            style="list-style:none" :class="{'active':item.active,'':!item.active}">{{item.name}}</li>-->
<!--  　　　　 </ul>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
  import { Settings } from '../assets/js/common.js'

  export default {
    name: "",
    data() {
      return {

        idCard: '',
        name: '',
        address: '',
        province: [],
        city: [],
        county: [],

        t_province: '',
        t_city: '',
        t_county: '',

      }
    },
    methods: {

      //加载省
      getProvince() {
        var that = this;
        console.log("234")
        var data = ''

        this.$axios({
          method: 'get',
          url: Settings.ApiRoot + '/workerregister/getProvince',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
          data: data,
          dataType: 'text/xml;charset=utf-8'
        }).then(function (resp) {
          console.log(resp.data.data);
          console.log("kkkkkkkkkk");

          that.province = resp.data.data;
          if (that.province.length > 0) {
            that.province[0].active = true;
            that.selectProvince(that.province[0])
            // console.log(that.province[0])
          }

          console.log(resp.data);
          console.log("000data");
          console.log(that.province[0]);

        }).catch(function (error) {
          console.log('请求失败:' + error);
          // alert(error.data)
          // alert("请求失败")

        });
      },

      getCity(provinceCode) {
        console.log("provinceCode")

        console.log(provinceCode)
        var that = this;
        var data = '';

        this.$axios({
          method: 'get',
          url: Settings.ApiRoot + '/workerregister/getCity?provinceCode=' + provinceCode,
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
          data: data,
          dataType: 'text/xml;charset=utf-8'
        }).then(function (resp) {
          console.log(resp)
          console.log("aaaaaaa")

          that.city = resp.data.data;
          console.log( that.city[0])

          if (that.city.length > 0) {
            that.city[0].active = true;
            that.getCounty(that.city[0].code);
            that.selectCity(that.city[0]);
          }

        }).catch(function (error) {
          console.log('请求失败:' + error);
          alert(error.data)
        });
      },
      //加载县
      getCounty(cityCode) {
        var that = this;
        var data = '';
        console.log(cityCode)
        this.$axios({
          method: 'get',
          url: Settings.ApiRoot + '/workerregister/getCountry?cityCode=' + cityCode,
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
          data: data,
          dataType: 'text/xml;charset=utf-8'
        }).then(function (resp) {
          that.county = resp.data.data;
          console.log(resp.data)
          console.log("sdfghhjfdssssssssssss")

          if (that.county.length > 0) {
            that.selectCounty(that.county[0]);
            //that.county[0].active = true;
          }
        }).catch(function (error) {
          console.log('请求失败:' + error);
          alert(error.data)
        });
      },

      //省市区确定按钮
      confirmArea: function () {
        var that = this;
        // that.area = '' ;
        that.showdiv();
        console.log("!111111")
        console.log(that.t_county)

      },
      //省 css
      selectProvince: function (item,index) {
        this.$nextTick(function () {
          this.province.forEach(function (item) {
            Vue.set(item, 'active', false);
          });
          Vue.set(item, 'active', true);
          //输入框显示点击省份
          var that = this;
          that.t_province = item.codeName;
        });
        console.log(item.code)
        this.getCity(item.code);
      },
      //市 css
      selectCity: function (item,index) {
        this.$nextTick(function () {
          this.city.forEach(function (item) {
            Vue.set(item, 'active', false);
          });
          Vue.set(item, 'active', true);
          var that = this;
          that.t_city = ' ' + item.codeName;
        });
        this.getCounty(item.code);
      },
      selectCounty: function (item,index) {
        this.$nextTick(function () {
          this.county.forEach(function (item) {
            Vue.set(item, 'active', false);
          });
          Vue.set(item, 'active', true);
          var that = this;
          console.log(that.t_county)
          that.t_county = ' ' + item.codeName;

        });
      },
      //css 显示与隐藏
      showdiv: function () {
        document.getElementById('show').style.display =
          document.getElementById('show').style.display == "block" ? "none" : "block";
      },
    },
    mounted() {

    },
    created: function () {
      this.getProvince();
    }
  }
</script>

<style scoped>
  /* mask */
  .mask-white,.mask-black{
    left:0; top:0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.8);
    z-index: 99}
  .mask-black{
    background: rgba(0,0,0,0.5)
  }
  /* show/hide */
  .hide{
    display:none
  }
  .show{
    display:block
  }
  /* input */
  select{
    vertical-align:middle;
    font-family:"Microsoft YaHei";
    font-size:.4rem;
    border:0;
  }

  .form{
    padding: .106667rem .96rem;
    overflow: hidden;
  }
  .tainan{
    height: 1rem;
    line-height: .96rem;
    position: relative;
    border-bottom: 1px  groove gray;
    margin-top: .213333rem;
    overflow:hidden;
    padding-right: 0.25em;
  }
  .select-area{
    position: fixed;
    width: 100%;
    left: 0;
    background: rgba(255,255,255,1);
    bottom:0;
    z-index: 100;
    overflow: hidden;
  }
  .select-area h3{
    /* border-bottom: 1px solid #ddd; */
    height: .96rem;
    line-height: .96rem;
    padding: 0 1rem;
    color: #9c9c9c
  }
  .select-area h3 span.right{
    color: #2b75a2
  }
  .select-area ul{
    float: left;
    height: 6.4rem;
    min-height: 6.4rem;
    overflow-y: auto;
    -webkit-overflow-scrolling:touch
  }
  .select-area ul li{
    padding: .266667rem 0 .266667rem .266667rem;
    position: relative;
  }
  .province{
    width: 20%;
    font-weight: bold;
  }
  .city,.county{
    width: 23%;
    background: #fcfcfc;
    font-weight: bold;

  }
  .select-area h3 span.right{
    color: #2b75a2;
    float: right;
  }
  .county{
    background: #f9f9f9
  }
  .aaa {
  }
  .select-area ul li.active{
    /* color: #f90 */
    color : #092ca5 ;

  }
  .mask-black{
    position: fixed;
    width: 100%;
    height: 100%;
    /* background: rgba(255,255,255,0.8);  */
    z-index: 99
  }
  .mask-black{
    background: rgba(0,0,0,0.5)
  }
</style>
