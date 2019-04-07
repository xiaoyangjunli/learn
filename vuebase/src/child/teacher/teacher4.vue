<template>
  <div id="teacher4">
    <button class="butt" @click="backTo">返回上一页面</button>
    <div class="div1">
      <h2>欢迎来到自我提升管理界面</h2>
      <span> <h3>需要提升的技能一：</h3></span><input v-model="obj.text1" type="text" >
      <h3>过程与总结：</h3>
      <textarea v-model="obj.text2" cols="31" rows="5"></textarea>
      <span> <h3>需要提升的技能二：</h3></span><input v-model="obj.text3" type="text" >
      <h3>过程与总结：</h3>
      <textarea v-model="obj.text4" cols="31" rows="5"></textarea>
      <button class="btn" @click="clickMe">确定</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "teacher4",
      data(){
          return{
            obj: {
              text1: '',
              text2: '',
              text3:'',
              text4:''
            }
        }
      },
      methods: {
        clickMe: function () {
          var storage = window.localStorage;
          storage.setItem('gotoSelfrepair', JSON.stringify(this.obj))
        },
        backTo:function () {
          this.$router.back()
        }
      },
      mounted() {
        var sto = window.localStorage;
        var man = JSON.parse(sto.getItem('gotoSelfrepair'))
        for (let i = 1; i <= 4; i++) {
          this.obj['text' + i] = man['text' + i]
        }
      }
    }
</script>

<style scoped>
  #teacher4{
    position: relative;
    height: 560px;
    background: url("../../../static/imgs/teacher5.jpg");
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
    width: 100px;
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
