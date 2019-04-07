<template>
  <div id="boss3">
    <button class="butt" @click="backTo">返回上一页面</button>
    <div class="div1">
      <h2>欢迎来到旅游界面</h2>
      <span> <h3>想去的地方：</h3></span><input v-model="obj.text1" type="text" >
      <h3>怎么去：</h3><input v-model="obj.text2" type="text" >
      <h3>途中风景：
      </h3><textarea v-model="obj.text3" cols="31" rows="5"></textarea>
      <h3>旅游趣事：</h3>
      <textarea v-model="obj.text4" cols="31" rows="5"></textarea>
      <button class="btn" @click="clickMe">确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "boss3",
    data(){
      return{
        obj: {
          text1: '',
          text2: '',
          text3:'',
          text4:'',
        }
      }
    },
    methods: {
      clickMe: function () {
        var storage = window.localStorage;
        storage.setItem('gotoVisition', JSON.stringify(this.obj))
      },
      backTo:function () {
        this.$router.back()
      }
    },
    mounted() {
      var sto = window.localStorage;
      var man = JSON.parse(sto.getItem('gotoVisition'))
      for (let i = 1; i <= 4; i++) {
        this.obj['text' + i] = man['text' + i]
      }
    }
  }
</script>

<style scoped>
  #boss3{
    position: relative;
    height: 560px;
    background: url("../../../static/imgs/teacher4.jpg");
  }
  .div1 {
    position: absolute;
    top: 50px;
    vertical-align: middle;
  }
  .div1>h2{
    margin-left: 60px;
  }
  h3{
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
  }
  input{
    height: 25px;
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
