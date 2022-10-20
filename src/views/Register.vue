<template>
  <div id="register">
    <div id="regiform">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="email" label="用户名" >
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="submitForm"
            >注册</el-button
          >
          <el-button @click="toLogin">去登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {postregister} from "../internet/register";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        username:""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
        
      },
    };
  },
  methods: {
    submitForm() {
      let rule = {
        username:this.ruleForm.username,
        password:this.ruleForm.checkPass
      }
      postregister(this.$qs.stringify(rule)).then(res=>{
        // if(res.d)
        console.log(res);
        if(res.data.status == 0)
        {
            alert("注册成功！")
            this.$router.push('/login');
        }

      })
      .catch(err=>{
        console.log(err);
      })
    },
    toLogin(){
        this.$router.push('/login');
    }
  },
};
</script>

<style lang="scss" scoped>
#register {
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: linear-gradient(45deg, #d04b8c, #8f54be, #7258d5);
  #regiform {
    width: 500px;
    height: 600px;
    margin: 0 auto;
    margin-top: 200px;
    border: 1px solid rgb(255, 255, 255, 0.5);
    border-radius: 6px;
    .el-form-item{
        margin-top: 40px;
        margin-left: 20px;
        // margin: auto;
    }
   
    .el-input{
        width: 240px;
        margin: 0 auto;
    }
    
    
  }
  .el-form button:first-child{
    margin-right: 75px;
  }
  .el-form-item__label{
        color: black;
    }
}
</style>