
/**
 * 手写promise
 *  pending   --- 等待状态(可以状态迁移)
 *  Fulfilled --- 执行状态(不可迁移态)
 *  Rejected  --- 拒绝状态(不可迁移态)
 */
const STATUS = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected"
};
class My_Promise {
  constructor(excutor) {
    this.status = STATUS.PENDING; // 初始状态
    this.value = null; // 终值
    this.reason = null; // 拒因
    this.onFulfilledCallbacks = []; // 成功回调队列
    this.onRejectedCallbacks = []; // 失败回调队列

    let resolve = value => {
      if (this.status === STATUS.PENDING) {
        this.value = value;
        this.status === STATUS.FULFILLED;
        this.onFulfilledCallbacks.forEach(fn => {
          fn();
        });
      }
    };
    let reject = reason => {
      if (this.status === STATUS.PENDING) {
        this.reason = reason;
        this.status = STATUS.REJECTED;
        this.onRejectedCallbacks.forEach(fn => {
          fn();
        });
      }
    };
    try {
      excutor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  resolvePromise(newPromise, x, resolve, reject) {
    if (newPromise === x) {
      return reject(new TypeError("Circular reference"));
    }
  }
  // then(onFulfilled, onRejected) {
  //   onFulfilled =
  //     typeof onFulfilled === "function" ? onFulfilled : value => value;
  //   onRejected =
  //     typeof onRejected === "function"
  //       ? onRejected
  //       : error => {
  //           throw error;
  //         };
  //   let newPromise;
  //   if (this.status === STATUS.FULFILLED) {
  //     return newPromise = new My_Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         try {
  //           let x = onFulfilled(this.value);
  //         // eslint-disable-next-line no-empty
  //         } catch (error) {}
  //       });
  //     });
  //   }
  // }
  catch() {}
}

let promise = new My_Promise();

console.log(promise);

/**
 * 防抖函数 --
 */
function debounce(fn, time) {
  let timer = null;
  return () => {
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      // 清除定时器
      clearTimeout(timer);
      timer = null;
    }, time);
  };
}
debounce();

function test(nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        res = [i, j];
        break;
      }
    }
  }
  return res;
}

export { debounce, test };
