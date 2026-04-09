// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roleKey: "collect",  // ← 添加逗号
    username: "",        // ← 添加逗号
    password: ""
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