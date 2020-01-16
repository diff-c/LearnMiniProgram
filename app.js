//注册小程序示例

//onPageNotFound
//onLaunch和onShow都有options参数

App({
  //生命周期函数
  //小程序初始化
  onLaunch() {
    // console.log('小程序初始化')
    //网络请求
    //获取用户的信息

    //wx是系统API
    wx.getUserInfo({
     success(res) {
      //  console.log(res)
     }
    })
  },
  //小程序显示出来时
  onShow(options) {
    //1.判断小程序的进入场景

    // console.log(options)
    // console.log('页面显示')
  },
  //小程序隐藏时
  onHide() {
    console.log('小程序隐藏或者关闭')
  },
  //小程序发生一些错误时
  onError() {
    console.log('程序出现错误')
  },
  globalData:{
    name: 'diff',
    age: 22
  }
})

//小程序注册App四个阶段,onLaunch,onShow,onHide,onError
