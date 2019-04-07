<template>
  <div id="student">
    <button class="butt" @click="backTo">返回上一页面</button>
    <h2>欢迎来到学生日程管理界面</h2>
    <div class="div1_2">
      <audio  loop src="../../static/audios/许飞-男兵女兵.mp3"></audio>
      <div class="div1-1">
        请选择您要记录的事情：<select v-model="selected" id="select">
        <option value="gotoClass">课表</option>
        <option value="gotoActivite">课余活动</option>
        <option value="gotoSport">运动</option>
        <option value="gotoLabor">劳动</option>
      </select>
    </div>
      <router-link :to="toPage"><button class="btn" @click="onClick">确认</button></router-link>
    <h2>{{message}}</h2>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
    export default {
        name: "Student",
      data(){
          return{
            message:'',
            toPage:'',
            selected:''
          }
        },
      methods:{
        onClick:function () {
          if (!this.selected){
            this.message='请选择您需要记录的事情！'
          }
          switch (this.selected){
            case 'gotoClass':
              this.toPage='/student1';
              console.log(this.toPage);
              break;
            case 'gotoActivite':
              this.toPage='/student2';
              break;
            case 'gotoSport':
              this.toPage='/student3';
              break;
            case 'gotoLabor':
              this.toPage='/student4';
              break;
          }
        },
        backTo:function () {
          this.$router.back()
        }
      },
      computed:{

      }
    }
</script>

<style scoped>
#student{
  position: relative;
  height: 560px;
  background: url("../../static/imgs/student4.jpg");
}
.div1-1{
  font-size:25px ;
  font-weight: bold;
}
#select{
  width: 100px;
  height: 50px;
  display: block;
  font-weight: bold;
  font-size: 20px;
  margin: 20px auto;
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
  .div1_2{
  position: absolute;
     top: 70px;
  }
</style>
