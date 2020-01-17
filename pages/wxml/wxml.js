Page({
  data: {
    age: 20,
    nowTime: new Date().toLocaleString(),  //转换成本地时间并且是字符串的
    isActive: false
  },
  onLoad() {
    // setInterval(() => {
    //   this.setData({
    //     nowTime:new Date().toLocaleString()
    //   })
    // })
  },
  btnClick() {
    this.setData({
      isActive: !this.data.isActive
    })
  }
})