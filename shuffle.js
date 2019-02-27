// 数组乱序
function shuffle(arr) {
  arr.sort(() => {
    return Math.random() - 0.5
  })
}
