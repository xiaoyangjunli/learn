<template>
  <div id="boss4">
    <button class="butt" @click="backTo">返回上一页面</button>
    <div class="div1">
      <h2>欢迎来到假期计划管理界面</h2>
      <h3>请选择时间：<input v-model="obj.text1" type="date"></h3>
      <h3>计划做的事情：</h3>
      <textarea v-model="obj.text2" cols="31" rows="3"></textarea>
      <h3>请选择时间：<input v-model="obj.text3" type="date"></h3>
      <h3>计划做的事情：</h3>
      <textarea v-model="obj.text4" cols="31" rows="3"></textarea>
      <h3>请选择时间：<input v-model="obj.text5" type="date"></h3>
      <h3>计划做的事情：</h3>
      <textarea v-model="obj.text6" cols="31" rows="3"></textarea>
      <button class="btn" @click="clickMe">确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "boss4",
    data(){
      return{
        obj: {
          text1:'',
          text2:'',
          text3:'',
          text4:'',
          text5:'',
          text6:''
        }
      }
    },
    methods: {
      clickMe: function () {
        var storage = window.localStorage;
        storage.setItem('gotoPlay', JSON.stringify(this.obj))
      },
      backTo:function () {
        this.$router.back()
      }
    },
    mounted() {
      var sto = window.localStorage;
      var man = JSON.parse(sto.getItem('gotoPlay'))
      for (let i = 1; i <= 6; i++) {
        this.obj['text' + i] = man['text' + i]
      }
    }
  }
</script>

<style scoped>
  #boss4{
    position: relative;
    height: 560px;
    background: url("../../../static/imgs/student2.jpg");
  }
  .div1 {
    position: absolute;
    top: 50px;
    vertical-align: middle;
  }
  .div1>h2{
    margin-left: 20px;
  }
  h3{
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
  }
  input{
    height: 20px;
  }
  textarea{
    /*margin-top: 10px;*/
    font-weight: bold;
    font-size: 20px;
  }
  .btn{
    width: 70px;
    height: 40px;
    margin: 0 auto;
    display: block;
  }
</style>
