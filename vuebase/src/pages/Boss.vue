<template>
  <div id="Boss">
    <button class="butt" @click="backTo">返回上一页面</button>
    <h2>欢迎来到BOSS日程管理界面</h2>
    <div class="div1_2">
      <audio  loop src="../../static/audios/许飞-男兵女兵.mp3"></audio>
      <div class="div1-1">
        请选择您要记录的事情：<select v-model="selected" id="select">
        <option value="gotoWork">上班</option>
        <option value="gotoMessing">开会</option>
        <option value="gotoVisition">旅游</option>
        <option value="gotoPlay">假期计划</option>
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
    name: "Boss",
    data() {
      return {
        message: '',
        toPage: '',
        selected: ''
      }
    },
    methods: {
      onClick: function () {
        if (!this.selected) {
          this.message = '请选择您需要记录的事情！'
        }
        switch (this.selected) {
          case 'gotoWork':
            this.toPage = '/boss1';
            break;
          case 'gotoMessing':
            this.toPage = '/boss2';
            break;
          case 'gotoVisition':
            this.toPage = '/boss3';
            break;
          case 'gotoPlay':
            this.toPage = '/boss4';
            break;
        }
      },
      backTo:function () {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  #Boss{
    position: relative;
    height: 560px;
    background: url("../../static/imgs/student3.jpg");
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
