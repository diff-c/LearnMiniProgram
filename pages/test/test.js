Page({
  //初始化一些数据，以方便被wxml引用展示
  msg: "diff，你好",
  //监听页面加载
  onLoad() {
    //发送网络请求
    wx.request({
      url: 'https://baidu.com',
      sucess(res) {
        console.log(res)
      }
      })
     
  },
  //监听页面显示
  onShow() {
    console.log('onShow')

  },
  //页面初次渲染完成时
  onReady() {
    console.log('onReady')

  },
  //监听页面隐藏时
  onHide() {
    console.log('onHide')

  },
  //监听下拉刷新
  onPullDownRefresh() {
    console.log('onPullDownRefresh')

  },
  //监听达到底部
  onReachBottom() {
    console.log('到达底部')
  },
  //监听页面卸载
  onUnLoad() {
    console.log('onUnLoad')
  },
  onPageScroll() {

  }
})