Page({
  data: {

  },
  touchstart() {
    console.log("bindtouchstart")

  },
  touchend() {
    console.log("bindtouchend")

  },

  touchmove() {
    console.log("bindtouchmove")
  },

  bindtap() {
    console.log("bindtap")
  },
  bindlongpress() {
    console.log("bindlongpress")
  },
  btnClick(event) {
   console.log(event)
  },
  findDiff(event) {
    console.log(event)
  },
  passParams(event) {
    console.log(event.currentTarget.dataset)
  },
  view1() {
    console.log('abc')
  },
  view2() {
    console.log('def')
  },
  view3() {
    console.log('ghi')
  },
  tap1() {
    console.log('123')
  },
  tap2() {
    console.log('456')
  },
  tap3(){
    console.log('789')
  },
  fatherEvent(event) {
    console.log(event)
  },
  sonEvent(event) {
    console.log(event)
  }
})