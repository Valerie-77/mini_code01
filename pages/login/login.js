// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roleKey: "collect",
    username: "",
    password: "",
    isLoading: false,
    errorMessage: ""
  },

  changeRole(e) {
    console.log("123", e);
    
    let id = e.currentTarget.dataset.id
    
    if (id == "2") {
      this.setData({
        roleKey: "handle"
      })
    } else {
      this.setData({
        roleKey: "collect"
      })
    }
  },

  // 账号输入处理
  onUsernameInput(e) {
    this.setData({
      username: e.detail.value,
      errorMessage: ""
    })
  },

  // 密码输入处理
  onPasswordInput(e) {
    this.setData({
      password: e.detail.value,
      errorMessage: ""
    })
  },

  // 登录处理
  onLogin() {
    const { username, password } = this.data;
    
    // 表单验证
    if (!username) {
      this.setData({
        errorMessage: "请输入账号"
      });
      return;
    }
    
    if (!password) {
      this.setData({
        errorMessage: "请输入密码"
      });
      return;
    }
    
    // 显示加载状态
    this.setData({
      isLoading: true,
      errorMessage: ""
    });
    
    // 模拟登录请求
    setTimeout(() => {
      // 这里可以替换为实际的登录API调用
      console.log("登录请求", {
        username,
        password,
        role: this.data.roleKey
      });
      
      // 模拟登录成功
      this.setData({
        isLoading: false
      });
      
      // 登录成功后跳转到首页
      wx.switchTab({
        url: '/pages/index/index'
      });
    }, 1500);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})