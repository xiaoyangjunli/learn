<template>
    <div id="query">
      <button class="butt" @click="backTo">返回上一页面</button>
      <h1>欢迎来到查询管理界面</h1>
      <div class="btn"><button id="btn" @click="clickMe">点击查看历史记录</button></div>
        <h2><ul v-for="item in items">
          <li>{{item}}</li>
        </ul></h2>
    </div>
</template>

<script>
    export default {
        name: "query",
      data(){
          return{
            message:'',
            items:[],
          }
      },
      methods:{
        clickMe:function(){
          var storage = window.localStorage;
          var getData = JSON.parse(storage.getItem('gotoMessing'));
          for (var i=0;i<getData.length;i++){
            this.items.push(getData[i].text1);
          }
        },
        backTo:function () {
          this.$router.back();
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>
  #query{
    position: relative;
    height: 560px;
    background: url("../../static/imgs/teacher5.jpg");
  }
  h1{
    position: absolute;
    top: 30px;
  }
  .btn{
    margin-top: 80px;
  }
  .btn>button{
    height: 40px;
  }
  textarea{
    font-weight: bold;
    font-size: 20px;
  }


</style>
