<template>
<div id="student1">
  <button class="butt" @click="backTo">返回上一页面</button>
    <div class="div1">
      <h2>欢迎来到课程管理界面</h2>
      <table border="">
        <tr>
          <th>时间</th>
          <th>星期一</th>
          <th>星期二</th>
          <th>星期三</th>
          <th>星期四</th>
          <th>星期五</th>
          <th>星期六</th>
          <th>星期日</th>
        </tr>
        <tr>
          <td>1</td>
          <td><textarea v-model="obj.class1" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class2" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class3" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class4" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class5" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class6" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class7" cols="5" rows="3"></textarea></td>
        </tr>
        <tr>
          <td>2</td>
          <td><textarea v-model="obj.class8" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class9" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class10" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class11" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class12" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class13" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class14" cols="5" rows="3"></textarea></td>
        </tr>
        <tr>
          <td>3</td>
          <td><textarea v-model="obj.class15" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class16" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class17" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class18" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class19" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class20" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class21" cols="5" rows="3"></textarea></td>
        </tr>
        <tr>
          <td>4</td>
          <td><textarea v-model="obj.class22" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class23" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class24" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class25" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class26" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class27" cols="5" rows="3"></textarea></td>
          <td><textarea v-model="obj.class28" cols="5" rows="3"></textarea></td>
        </tr>
      </table>
      <button class="btn" @click="clickMe">确定</button>
    </div>
</div>
</template>

<script>
    export default {
        name: "srudent1",
      data(){
          return{
            obj:{
              class1:'',
              class2:'',
              class3:'',
              class4:'',
              class5:'',
              class6:'',
              class7:'',
              class8:'',
              class9:'',
              class10:'',
              class11:'',
              class12:'',
              class13:'',
              class14:'',
              class15:'',
              class16:'',
              class17:'',
              class18:'',
              class19:'',
              class20:'',
              class21:'',
              class22:'',
              class23:'',
              class24:'',
              class25:'',
              class26:'',
              class27:'',
              class28:'',
            }
          }
      },
      methods:{
          clickMe:function () {

            var storage = window.localStorage;
            storage.setItem('name',JSON.stringify(this.obj));
          },
        backTo:function () {
          this.$router.back()
        }
      },
      mounted(){
        var sto = window.localStorage;
        var man = JSON.parse(sto.getItem('name'))
          for (let i=1;i<=28;i++){
            this.obj['class'+i]=man['class'+i];
            console.log(man.class+'i')
          }
      }
    }
</script>

<style scoped>
#student1{
  position: relative;
  height: 560px;
  background: url("../../../static/imgs/student3.jpg");
}
  .div1{
    position: absolute;
    top: 50px;
    text-align: center;
    /*vertical-align: middle;*/
  }
  textarea{
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    text-align: center;
  }
  .btn{
    width: 70px;
    height: 40px;
    margin: 0 auto;
    display: block;
  }
</style>
