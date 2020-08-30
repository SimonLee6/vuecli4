export default {
  formatDate(date, fmt = "YY-MM-DD hh:mm:ss") {
    date = new Date(date);
    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(), // 年
      "M+": (date.getMonth() + 1).toString(), // 月
      "D+": date.getDate().toString(), // 日
      "h+": date.getHours().toString(), // 时
      "m+": date.getMinutes().toString(), // 分
      "s+": date.getSeconds().toString() // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
        );
      }
    }
    return fmt;
  },
  /**
   * @description 获取事件冒泡全部元素
   * @param {*} evt 事件对象
   */
  eventPath(evt) {
    const path = (evt.composedPath && evt.composedPath()) || evt.path,
      target = evt.target;

    if (path != null) {
      return path.indexOf(window) < 0 ? path.concat(window) : path;
    }

    if (target === window) {
      return [window];
    }

    function getParents(node, memo) {
      memo = memo || [];
      const parentNode = node.parentNode;

      if (!parentNode) {
        return memo;
      } else {
        return getParents(parentNode, memo.concat(parentNode));
      }
    }

    return [target].concat(getParents(target), window);
  }
};
