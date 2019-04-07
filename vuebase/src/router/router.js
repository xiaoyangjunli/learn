import Vue from 'vue';
import vueRouter from 'vue-router';
import Index from '../pages/index';
import Boss from '../pages/Boss';
import Student from '../pages/Student';
import Teacher from '../pages/Teacher';
import student1 from '../child/student/student1';
import student2 from '../child/student/student2';
import student3 from '../child/student/student3';
import student4 from '../child/student/student4';
import teacher1 from '../child/teacher/teacher1';
import teacher2 from '../child/teacher/teacher2';
import teacher3 from '../child/teacher/teacher3';
import teacher4 from '../child/teacher/teacher4';
import other from '../child/other/other';
import boss1 from '../child/boss/boss1';
import boss2 from '../child/boss/boss2';
import boss3 from '../child/boss/boss3';
import boss4 from '../child/boss/boss4';
import Loge from '../pages/Logo';
import query from '../components/query1';
Vue.use(vueRouter);
export default new vueRouter({
  routes:[
        {
          path:'/index',
          redirect:'',
          component:Index
        },
        {
          path:'/boss',
          name:'Boss',
          component:Boss
        },
        {
          path:'/student',
          name:'Student',
          component:Student,
        },
        {
          path:'/teacher',
          name:'Teacher',
          component:Teacher
        },
        {
          path:'/student1',
          component:student1
        },
        {
          path:'/student2',
          component:student2
        },
        {
          path:'/student3',
          component:student3
        },
        {
          path:'/student4',
          component:student4
        },
        {
          path:'/teacher1',
          component:teacher1
        },
        {
          path:'/teacher2',
          component:teacher2
        },

        {
          path:'/teacher3',
          component:teacher3
        },
        {
          path:'/teacher4',
          component:teacher4
        },
        {
          path:'/boss1',
          component:boss1
        },
        {
          path:'/boss2',
          component:boss2
        },
        {
          path:'/boss3',
          component:boss3
        },
        {
          path:'/boss4',
          component:boss4
        },
        {
          path:'/logo',
          component:Loge
        },
        {
          path:'/query',
          component:query
        },
        {
          path:'/other',
          component:other
        }
  ]
})
