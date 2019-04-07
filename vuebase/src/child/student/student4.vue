<template>
<div id="student4">
  <button class="butt" @click="backTo">返回上一页面</button>
  <div class="div1">
    <h2>欢迎来到劳动计划界面</h2>
    <h3>热爱劳动，劳动最光荣！</h3>
    <div class="div1-1">
      <span class="span">我的劳动计划：</span>
    </div>
    <textarea v-model="obj.dest1" cols="31" rows="5"></textarea>
    <div class="div1-1">
      <span class="span">劳动总结：</span>
    </div>
    <textarea v-model="obj.dest2" cols="31" rows="5"></textarea>
    <button class="btn" @click="clickMe">确定</button>
  </div>
</div>
</template>

<script>
    export default {
        name: "student4",
      data(){
          return{
           obj:{
             dest1:'',
             dest2:''
           }
          }
      },
      methods:{
          clickMe:function () {
            var storage = window.localStorage;
            storage.setItem('loader',JSON.stringify(this.obj));
          },
          backTo:function () {
            this.$router.back()
          }
      },
      mounted(){
          var man= window.localStorage;
          var getData=JSON.parse(man.getItem('loader'))
          for(let i=1;i<=2;i++){
            this.obj['dest'+i]=getData['dest'+i];
          }
      }
    }
</script>

<style scoped>
 #student4{
   height: 560px;
   position: relative;
   background: url("../../../static/imgs/student5.jpg");
 }
  .div1{
    position: absolute;
    top: 30px;
  }
 .div1>h2{
   margin-left: 30px;
 }
  h3{
    margin-top: 20px;
  }
  .span{
    font-size: 15px;
    font-weight: bold;
  }
  .div1-1{
    margin-top: 20px;
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
