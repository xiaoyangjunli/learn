<template>
  <div id="boss2">
    <button class="butt" @click="backTo">返回上一页面</button>
    <div class="div1">
      <h2>欢迎来到开会管理界面</h2>
      <h3 class="h3-1">请选择时间：</h3><input type="datetime-local" v-model="obj.text1">
      <h3>需要开会的人员及负责的职责：</h3>
      <textarea v-model="obj.text2" cols="31" rows="5"></textarea>
      <h3>过程与总结：</h3>
      <textarea v-model="obj.text3" cols="31" rows="10"></textarea>
      <button class="btn" @click="clickMe">确定</button>
      <!--<h3 class="h3-1">请选择时间：</h3><input type="datetime-local" v-model="currentTime">-->
      <!--<button class="btn" @click="clickQuery">查询</button>-->
      <!--<h4>您如果忘了您那一天有记录了，请点击<router-link :to="toPage"><button @click="toQuery">这里</button></router-link></h4>-->
    </div>
  </div>

</template>

<script>
  export default {
    name: "boss2",
    data() {
      return {
        obj: {
          text1: '',
          text2: '',
          text3: ''
        },
        // arr: [{text1:'',text2:'',text3:''}],
        // currentTime: '',
        toPage: ''
      }
    },
    methods: {
      clickMe: function () {
        var storage = window.localStorage;
        storage.setItem('gotoMessing',JSON.stringify(this.obj));
      //   var storage = window.localStorage;//2019-03-06T12:59
      //   var getDate = JSON.parse(storage.getItem('gotoMessing'));
      //   for (var i=0;i<getDate.length;i++) {
      //     if (getDate[i].text1 == this.obj.text1) {
      //       getDate[i] = this.obj;
      //       storage.setItem('gotoMessing', JSON.stringify(getDate));
      //     }
      //   }
      //   var neeedDate =storage.getItem('gotoMessing');
      //   for(var j=0;j<neeedDate.length;j++){
      //     if(neeedDate[j]==neeedDate[j+1]){
      //       neeedDate.split(neeedDate[j],1);
      //       storage.setItem('gotoMessing',JSON.stringify(neeedDate))
      //
      //     }
      //   }
      //
      //   getDate.push(this.obj);
      //   storage.setItem('gotoMessing',JSON.stringify(getDate));
      //
      },
      backTo: function () {
        this.$router.back()
      },
      clickQuery: function () {

      },
      // toQuery: function () {
      //   this.toPage = '/query'
      //
      // }
    },
    mounted() {
      var sto = window.localStorage;
      var man = JSON.parse(sto.getItem('gotoMessing'))
      for (let i=1;i<=3;i++){
        this.obj['text'+i]=man['text'+i];
      }
    }
      // var sto = window.localStorage;
      // if(sto.getItem('gotoMessing')==null){
      //   var setDate = sto.setItem('gotoMessing', JSON.stringify(this.arr));
    //   }
    // }
  }
</script>

<style scoped>
  #boss2{
    position: relative;
    height: 560px;
    background: url("../../../static/imgs/boss2.jpg");
  }
  .div1 {
    position: absolute;
    vertical-align: middle;
  }
  .div1>h2{
    margin-left: 20px;
  }
  h3{
    margin-left: 10px;
    margin-top: 5px;
  }
  textarea{
    margin-top: 10px;
    font-weight: bold;
    font-size: 20px;
  }
  .btn{
    width: 70px;
    height: 40px;
    margin: 0 auto;
    display: block;
  }
  .h3-1{
    display: inline-block;
    margin-right: 5px;
  }
</style>
