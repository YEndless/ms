
function httpGet(url, successCallback, errorCallback) {
  // this.axios({
  //   method: 'get',
  //   url: "http://sam.k-qy.njhzjwl.cn/sam-api" + '/sam/getsam?idCard=' + that.idcard,
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8'
  //   },
  //   data: data,
  //   dataType: 'text/xml;charset=utf-8'
  // }).then(function (resp) {
  //   console.log(resp);
  //   if (resp.data.status == 0) {
  //     localStorage.setItem("idCard", that.idcard)
  //     // console.log(localStorage.getItem('idCard'))
  //     localStorage.setItem("information", JSON.stringify(resp));
  //     alert(resp.message)
  //     that.$router.push('/info');
  //
  //   } else {
  //     console.log("111")
  //     console.log(that.idcard)
  //     alert(resp.data)
  //   }
  // }).catch(function (error) {
  //   console.log('请求失败:' + error);
  //   alert(resp.data)
  // });

    this.$axios.get(url,{
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    }).then(function (resp) {
        console.log(resp)
        console.log(resp.status)
        console.log("222222")
        if(resp.data && resp.data.success) {
            if(successCallback)
                successCallback(resp.data.data);
        }else {
            if(errorCallback)
                errorCallback(resp.data);
        }
    }).catch(function (error){
        console.log('请求失败:' + error);
    });
}
function httpGet2(url, successCallback, errorCallback) {
    this.$axios({
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    }).then(function (resp) {

        if(resp.data && resp.data.status == 0) {
            console.log("1234")
            if(successCallback)
                successCallback(resp.data);
        }else {
            console.log("333")

            if(errorCallback)
                errorCallback(resp.data);
        }
    }).catch(function (error){
        console.log('请求失败:' + error);
    });
}

function httpPost(url, data, successCallback, errorCallback) {
        this.$axios({
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        data: data,
        dataType: 'text/xml;charset=utf-8'
    }).then(function (resp) {
        console.info(resp);
        console.log("12312")
        if(resp.data) {
            successCallback(result);
        } else {
            if(errorCallback)
                errorCallback(resp);
        }
    }).catch(function (error){
        console.log('请求失败:' + error);
    });
}
function httpGet3(url, successCallback, errorCallback){
  var that = this;
  var data = '';
  this.$axios({
    method: 'get',
    url: url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    data: data,
    dataType: 'text/xml;charset=utf-8'
  }).then(function (resp) {
    console.info(resp);
    console.log("12312")
    if(resp.data) {
      successCallback(result);
    } else {
      if(errorCallback)
        errorCallback(resp);
    }
  }).catch(function (error) {
    console.log('请求失败:' + error);
    alert(resp.data)
  });
}
export { httpGet , httpGet2 , httpPost,httpGet3}
