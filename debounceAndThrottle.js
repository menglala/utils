function throttle(func, delay) {
  let last, deferTimer
  return function(args) {
    let _this = this
    let _args = args
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        func.call(_this, _args)
      }, delay)
    } else {
      last = now
      func.call(_this, _args)
    }
  }
}

function debounce(func, delay) {
  return function(args) {
    let _this = this
    let _args = args
    clearTimeout(func.request)
    func.request = setTimeout(() => {
      func.call(_this, _args)
    }, delay)
  }
}
