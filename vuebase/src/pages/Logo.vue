<template>
    <div id="Logo">
      <div class="div1">
        <h2>欢迎来到日程管理界面</h2>
      </div>
      <div class="div2">
        <h3>用户名：<input v-model="obj.text1" type="text"></h3>
        <h3>密&nbsp&nbsp&nbsp码：<input v-model="obj.text2" type="password"></h3>
        <span class="span"><input v-model="obj.text3" type="checkbox">是否记住密码？</span>
        <router-link :to="toPage"><button @click="clickMe1" class="btn">登录</button></router-link>
        <button @click="clickMe2" class="btn">注册</button>
        <button @click="clickMe3" class="btn">修改密码</button>
        <h4>提示:第一次使用本系统的用户输入用户名和密码之后点击注册，即可完成用户注册</h4>
        <h2 >{{message}}</h2>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Logo",
      data(){
          return{
            message:'',
            obj:{
              text1:null,
              text2:null,
              text3:true
            },
            isSelect:false,
            isShow:false,
            toPage:''
          }
      },
      methods:{
          clickMe1:function(){
            var getDate = window.localStorage;
            var date = JSON.parse(getDate.getItem('logo'));
            if (this.obj.text1==null&&this.obj.text2==null){
              this.message='请先注册，再使用！';
            }else if(this.obj.text1!==date.text1&&this.obj.text2==date.text2){
              this.message='您输入的用户名不正确，请重新输入！'
            }else if(this.obj.text1==date.text1&&this.obj.text2!==date.text2){
              this.message='您输入的密码不正确，请重新输入！'
            }else if(this.obj.text1!==date.text1&&this.obj.text2!==date.text2){
              this.message='您输入的用户名和密码不正确，请重新输入！'
            }else if(this.obj.text1==date.text1&&this.obj.text2==date.text2){
              this.toPage='/index';
            }
          },
          clickMe2:function(){
            var storage = window.localStorage;
            if(storage.getItem('loge')==null&&this.obj.text1!==null&&this.obj.text2){
              storage.setItem('logo',JSON.stringify(this.obj));
              this.message='注册成功！'
            }else{
              this.message='请规范注册！'
            }
          },
          clickMe3:function () {
            var storage = window.localStorage;
            var getDate = JSON.parse(storage.getItem('loge'));
            getDate=this.obj;
            storage.setItem('logo',JSON.stringify(getDate))
            this.message='密码修改成功！'
          }
      },
      mounted(){
        // var storage = window.localStorage;
        // storage.setItem('logo',JSON.stringify(this.obj));
        var getDate = window.localStorage;
        var date = JSON.parse(getDate.getItem('logo'));
        if (date&&this.obj.text3){
          this.obj.text1=date.text1;
          this.obj.text2=date.text2;
        }
      }
    }
</script>

<style scoped>
#Logo{
  height: 560px;
  position: relative;
  background: url("../../static/imgs/huanying.jpg");
}
  .div1{
    position: absolute;
    top: 50px;
  }
.div1>h2{
  margin-left: 45px;
}
  .div2{
    position: absolute;
    top: 150px;
    left: 30px;
  }
  .div2>h2{
    margin-left: -25px;
  }
.div2>h4{
  margin-left: -25px;
}
.btn{
  width: 80px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 20px;
}
  .span{
    position: absolute;
    top: 60px;
    right: 5px;
    font-weight: bold;
  }
  /*.div3{*/
    /*display: none;*/
  /*}*/
</style>
