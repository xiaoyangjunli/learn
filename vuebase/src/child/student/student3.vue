<template>
<div id="student3">
  <button class="butt" @click="backTo">返回上一页面</button>
  <h2>欢迎来到运动计划界面</h2>
  <div class="div1">
    <span class="span">计划运动的时间：</span><input v-model="obj.text1" type="date">
    <div><h3>计划一：</h3></div><textarea v-model="obj.text2" cols="31" rows="5"></textarea>
    <div><h3>计划二：</h3></div><textarea v-model="obj.text3" cols="31" rows="5"></textarea>
    <div><h3>计划一：</h3></div><textarea v-model="obj.text4" cols="31" rows="5"></textarea>
    <button class="btn" @click="clickMe">确定</button>
  </div>
</div>
</template>

<script>
    export default {
        name: "student3",
      data(){
          return{
            obj:{
              text1:'',
              text2:'',
              text3:'',
              text4:''
            }
          }
      },
      methods:{
        clickMe:function () {
          var storage = window.localStorage;
          storage.setItem('data',JSON.stringify(this.obj));
        },
        backTo:function () {
          this.$router.back()
        }
      },
      mounted(){
        var sto = window.localStorage;
        var man = JSON.parse(sto.getItem('data'))
        for (let i=1;i<=4;i++){
          this.obj['text'+i]=man['text'+i];
        }
      }
    }
</script>

<style scoped>
  #student3{
    position: relative;
    height: 560px;
    background: url("../../../static/imgs/student2.jpg");
  }
  .div1{
    position: absolute;
    top: 50px;
  }
  .div1>select>option{
    font-size: 20px;
    font-weight: bold;
  }
  .span{
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
  }
  textarea{
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
