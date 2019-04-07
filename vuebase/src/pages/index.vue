<template>
  <div id="index">
    <div class="div1-2">
      <h1>欢迎使用日程管理系统</h1>
      <div class="div1-1">
        请选择您的职业：<select  v-model="selected" id="select">
        <option value="student">学生</option>
        <option value="teacher">教师</option>
        <option value="boss">老板</option>
        <option value="other">其他</option>
      </select>
        <router-link :to="toPage"><button class="btn" @click="onClick">确认</button></router-link>
      </div>
      <h2>{{message}}</h2>
      <!--<button class="btn" ref="btn"></button>-->
      <!--<audio id="audio" :autoplay="autoPlay" loop src="../../static/audios/许飞-男兵女兵.mp3"></audio>-->
    </div>

  </div>
</template>
<script>
  export default {
    name: "Index",
    data(){
      return{
        tager:'',
        selected:'',
        toPage:'',
        message:'',
        autoPlay:''
      }
    },
    mounted(){
      this.autoPlay='autoplay';
      console.log(this.autoPlay)

    },
    methods:{
      onClick:function () {
        if (!this.selected){
          this.message='请选择您的职业！！！'
        }
        switch (this.selected){
          case 'student':
            this.toPage='/student';
            break;
          case 'teacher':
            this.toPage='/teacher';
            break;
          case 'other':
            this.toPage='/other';
            break;
          case 'boss':
            this.toPage='/boss';
            break;
        }
      }
    }
  }
</script>

<style scoped>
  #index{
    width: 100%;
    height: 560px;
    background: url("../../static/imgs/huanying.jpg");
  }
  .div1-1{
    font-size:25px ;
    font-weight: bold;
  }
  #select{
    width: 100px;
    height: 50px;
    display: block;
    font-size: 20px;
    font-weight: bold;
    margin: 10px auto;
  }
  .div1-1>select>option{
    font-size: 20px;
    font-weight: bold;
  }
  .btn{
    display: block;
    width: 100px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    margin:40px auto;
  }
  h1{
    margin-bottom: 50px;
  }
</style>
