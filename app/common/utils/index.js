// 是否输出debug信息
let isDebug = true;

class Utils {
  constructor() {

  }
  // demo,and coding here
  formatTime(time) {
    return time;
  }
  /**
   * @desc 检测元素是否在viewport中
   * @elem 带检测DOM元素
   * @type 1，检测垂直方向范围；2，检测水平范围方向
   * @offset {number} 距离可视区域多高（多远），主要用于稍微提前加载资源
   * @result true，标识元素已进入viewport；false，标识元素未进入viewport
   */
  isDomInViewport(elem, type = 1, offset = 0) {
    if (isDebug) {
      console.group('isDomInViewport logs begin:')
    }
    if (typeof elem !== 'object'){
      let error = new TypeError('参数elem类型错误');
      throw error;
    }
    if (typeof type !== 'number') {
      let error = new TypeError('参数type类型错误');
      throw error;
    }
    if (typeof offset !== 'number') {
      let error = new TypeError('参数offset类型错误');
      throw error;
    }
    let viewportHeight = window.innerHeight;
    let viewportWidth = window.innerWidth;
    let scrollTop = window.pageYOffset ? window.pageYOffset : window.scrollY;
    let scrollLeft = window.pageXOffset ? window.pageXOffset : window.scrollX;
    let { top, left, width, height } = elem.getBoundingClientRect();
    let result = false;

    switch (type) {
      case 1:
        if (viewportHeight + offset + scrollTop >= top) {
          result = true;
        }
        else {
          result = false;
        }
        break;
      case 2:
        if (viewportWidth + offset + scrollLeft >= left) {
          result = true;
        }
        else {
          result = false;
        }
        break;

    }

    return result;
  }
}

export default new Utils();