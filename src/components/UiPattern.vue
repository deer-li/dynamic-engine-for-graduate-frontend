<template>
  <!-- 现在什么都不用做，只要把表单做出来，然后提交给后台保存就好了-->
  <div>
    <el-form  ref="el-form" :model="form">
      <el-row class="el">
        <el-col :span="6"><span class="s1">属性id</span></el-col>
        <el-col :span="18">
          <el-input placeholder="please input cid" v-model="form.cid"></el-input>
        </el-col>
      </el-row>
      <br>
      <el-row class="e1">
        <el-col :span="6"><span class="s1">属性名</span></el-col>
        <el-col :span="18">
          <el-input placeholder="please input cid" v-model="form.cname"></el-input>
        </el-col>
      </el-row>
      <br>
      <el-row class="e1">
        <el-col :span="6"><span class="s1">创建时间</span></el-col>
        <el-col :span="18">
          <el-date-picker v-model="form.createTime"></el-date-picker>
        </el-col>
      </el-row>
      <br>
      <span>
        <el-button type="primary" class="el-button01" @click="onSubmit">提交</el-button>
        <el-button type="primary" class="el-button02">重置</el-button>
      </span>
    </el-form>
  </div>


</template>
<script>
import {addComponentType} from '@/api/api.js'
export default {
  name: "UiPattern",
  props: {
    ui: {

    }
  },
  data() {
    return {
      form:{
        cid: '',
        cname: '',
        createTime: ''
      }
    }
  },
  mounted() {

  },
  methods:{
    onSubmit(){
      let componentByType = JSON.stringify(this.form);
      //const parse = JSON.parse(componentByType);
      console.log('data====>',componentByType)
      addComponentType(componentByType).then(response=>{
          if (response.status==0){
            this.$message.success("添加数据成功");
          }else {
            this.$message.error("添加数据失败");
          }
      })
    }
  }

};
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,                 //月份
    "d+": this.getDate(),                    //日
    "h+": this.getHours(),                   //小时
    "m+": this.getMinutes(),                 //分
    "s+": this.getSeconds(),                 //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}
</script>
<style scoped>
.el-button01 {
  display: inline-block;
  margin-left: 100px;
}
.s1 {
  display: block;
  height: 32px;
  padding-top: 6px;
}
</style>

