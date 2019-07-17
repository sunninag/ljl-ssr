<template>
<div class='login'>
  <div class='login-register'>
    <!-- 头像区域 -->
    <div class='avatar_box'>
      <img src="./logo.png" alt="">
    </div>
    <!-- ref控制DOM的元素 -->
<el-form class="login-form" :model="loginForm" :rules = "loginFormRules" ref="reset">
        <!-- 用户名 -->
       <el-form-item  prop="username">
         <!-- prefix输入框头部图标 -->
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <!-- iconfont字体的图标 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click = "islogin">登录</el-button>
          <el-button type="info" @click = "reset">重置</el-button>
        </el-form-item>
      </el-form>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'zs',
        password: '123'
      },
      // 这是表单验证的规则对象
      loginFormRules: {
        // 这是账号验证
        username: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        // 这是密码验证
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    reset () {
      this.$refs.reset.resetFields()
      this.loginForm.username = this.loginForm.password = ''
    },
    islogin () {
      this.$refs.reset.validate(async valid => {
        if (!valid) return
        const { data: { data, meta } } = await this.$http.post('login', this.loginForm)
        if (meta.status !== 200) return this.$message.error(meta.msg)
        this.$message.success('登录成功')
        sessionStorage.setItem('token', data.token)
        this.$router.push('/home')
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login{
  height: 100%;
  background: #2B4B8B;
  position: relative;
  .login-register {
    width: 600px;
    height: 300px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
  }
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
    .login-form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
        .btns {
        display: flex;
        justify-content: flex-end;
      }
  }
}
</style>
