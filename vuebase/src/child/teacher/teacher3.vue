<template>
<div id="teacher3">
  <button class="butt" @click="backTo">返回上一页面</button>
  <div class="div1">
    <h2>欢迎来到备课管理界面</h2>
    <span> <h3>需要备课的科目：</h3></span><input type="text" v-model="obj.text1">
    <h3>备课的内容：</h3>
    <textarea v-model="obj.text2" cols="31" rows="10"></textarea>
    <button class="btn" @click="clickMe">确定</button>
  </div>
</div>
</template>

<script>
    export default {
      name: "teacher3",
      data() {
        return {
          obj: {
            text1: '',
            text2: ''
          }
        }
      },
      methods: {
        clickMe: function () {
          var storage = window.localStorage;
          storage.setItem('gotoPreparing', JSON.stringify(this.obj))
        },
        backTo:function () {
          this.$router.back()
        }
      },
      mounted() {
        var sto = window.localStorage;
        var man = JSON.parse(sto.getItem('gotoPreparing'))
        for (let i = 1; i <= 2; i++) {
          this.obj['text' + i] = man['text' + i]
        }
      }
    }
</script>

<style scoped>
#teacher3{
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
  margin-left: 30px;
}
  h3{
    display: inline-block;
    margin-left: 10px;
    margin-top: 30px;
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
