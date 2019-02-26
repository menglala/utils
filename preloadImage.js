// 参数：一组图片或者一个带有url属性的图片对象，加载图片完成的回调函数（可选）
function preLoadImage(images, callback) {
  let type = Object.prototype.toString.call(images).slice(8, -1)

  if (type === 'Array') {
    images.forEach(item => {
      var img = new Image()
      img.src = item.url
      img.onload = function() {
        callback && callback()
      }
    })
    return
  }
  var img = new Image()
  img.src = images.url
  img.onload = function() {
    callback && callback()
  }
}
