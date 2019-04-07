<template>
  <div id="boss1">
    <button class="butt" @click="backTo">返回上一页面</button>
    <div class="div1">
      <h2>欢迎来到工作管理界面</h2>
      <h3>请选择工作时间：<input v-model="obj.text1" type="date"></h3>
      <span> <h3>工作一：</h3></span><input v-model="obj.text2" type="text" >
      <h3>过程与总结：</h3>
      <textarea v-model="obj.text3" cols="31" rows="5"></textarea>
      <span> <h3>工作二：</h3></span><input v-model="obj.text4" type="text" >
      <h3>过程与总结：</h3>
      <textarea v-model="obj.text5" cols="31" rows="5"></textarea>
      <button class="btn" @click="clickMe">确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "boss1",
    data(){
      return{
        obj: {
          text1: '',
          text2: '',
          text3:'',
          text4:'',
          text5:''
        }
      }
    },
    methods: {
      clickMe: function () {
        var storage = window.localStorage;
        storage.setItem('gotoWork', JSON.stringify(this.obj))
      },
      backTo:function () {
        this.$router.back()
      }
    },
    mounted() {
      var sto = window.localStorage;
      var man = JSON.parse(sto.getItem('gotoWork'))
      for (let i = 1; i <= 5; i++) {
        this.obj['text' + i] = man['text' + i]
      }
    }
  }
</script>

<style scoped>
  #boss1{
    position: relative;
    height: 560px;
    background: url("../../../static/imgs/boss1.jpg");
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
</style>
