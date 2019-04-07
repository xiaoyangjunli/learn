<template>
<div id="student2">
  <button class="butt" @click="backTo">返回上一页面</button>
  <div class="div1">
    <h2>欢迎来到课余活动管理界面</h2>
    <div class="div1-1">
      <textarea v-model="gotoActivite" cols="31" rows="10"></textarea>
      <button class="btn" @click="clickMe">确定</button>
    </div>

  </div>

</div>
</template>

<script>
    export default {
        name: "student2",
      data(){
          return{
            gotoActivite:'',
          }
      },
      methods:{
        clickMe:function () {
          var storage = window.localStorage;
          storage.setItem('age',JSON.stringify(this.gotoActivite));
        },
        backTo:function () {
          this.$router.back()
        }
      },
      mounted(){
        var sto = window.localStorage;
        var man = JSON.parse(sto.getItem('age'))
        this.gotoActivite=man;
      }
    }
</script>

<style scoped>
  #student2{
    position: relative;
    height: 560px;
    background: url("../../../static/imgs/student4.jpg");
  }
  .div1{
    position: absolute;
    top: 50px;
    text-align: center;
    vertical-align: middle;
  }
  .div1-1{
    margin-top: 30px;
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
