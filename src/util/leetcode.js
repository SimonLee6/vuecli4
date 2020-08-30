(function() {
  /**
   * 两数相加 输入[1, 2, 4, 3], 7  ---> 输出[2, 3]下标数组
   * 4 + 3 = 7
   *@name  sumNum
   *@param numArr 数组
   *@param target 目标数
   */
  function sumNum(numArr, target) {
    let i = numArr.length;
    while (i > 0) {
      let lastNum = numArr.pop();
      let findIndex = numArr.indexOf(target - lastNum);
      if (findIndex > -1) {
        return [findIndex, numArr.length];
      }
      i--;
    }
  }
  console.log(sumNum([1, 2, 4, 9], 10));
  /**
   * 无重复的最长子串长度
   *  输入 abca --> 3 abc
   */
  // function lengthOfLongestSubstring(strArr) {
  //   // console.log(strArr);
  //   let obj = {};
  //   let length;
  //   for (let i = 0; i < strArr.length; i++) {
  //     while (i < strArr.length) {
  //     }
  //   }
  //   return length;
  // }
  // console.log(lengthOfLongestSubstring("str121s"));
  /**
   * 将有序的二维数组变成有序的一维数组 方法一(暴力先扁平化,再排序)
   */
  function flatSortArr(arr) {
    let flatArr = arr.flat(Infinity);
    flatArr.sort((a, b) => {
      return a - b;
    });
    return flatArr;
  }
  console.log(
    flatSortArr([
      [1, 2],
      [2, 4]
    ])
  );
  /**
   * 方法二 (归并排序)
   */
  function merge(arr1, arr2) {
    let result = [];
    arr1.sort((a, b) => {
      return a - b;
    });
    arr2.sort((a, b) => {
      return a - b;
    });
    console.log(arr1, arr2);
    while (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] > arr2[0]) {
        result.push(arr2.shift());
      } else {
        result.push(arr1.shift());
      }
    }
    return result.concat(arr1).concat(arr2);
  }
  function mergeSort(arr) {
    let len = arr.length;
    if (len < 1) return [];
    while (arr.length > 1) {
      let result = merge(arr.shift(), arr.shift());
      arr.push(result);
    }
    return arr[0];
  }
  console.log(
    mergeSort([
      [0, 1, 4, 5],
      [7, 6, 5],
      [2, 3]
    ])
  );
  /**
   * 费布那切数列 [1, 1, 2, 3, 5, 8]
   */
  function fibonacci(n, v1 = 1, v2 = 1) {
    if (n === 1) return v1;
    if (n === 2) return v2;
    return fibonacci(n - 1, v2, v1 + v2);
  }
  console.log("fibonacci-->", fibonacci(4));

  /**
   * 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
   */
  function mySetInterVal(fn, a, b) {
    let count = 0;
    let timer = null;

    let loop = () => {
      timer = setInterval(() => {
        fn();
        count++;
        loop();
        console.log(count);
      }, a + count * b);
    };
    loop();
    return () => {
      clearInterval(timer);
    };
  }
  let clear = mySetInterVal(() => {
    console.log("22222222"), 1000, 2000;
  });
  clear();
  /**
   * 字符串出现的不重复最长长度
   */
  function lengthOfLongestSubstring(str) {
    let len = str.length;
    let arr = [];
    let max = 0;
    // debugger;
    for (let i = 0; i < len; i++) {
      let char = str.charAt(i);
      let index = arr.indexOf(char);
      if (index > -1) {
        arr.splice(0, index + 1);
      }
      arr.push(char);
      max = Math.max(max, arr.length);
    }
    return max;
  }
  console.log("不重复子串", lengthOfLongestSubstring("123411112345"));
  /**对称数 */
  function findSymmetricalNum(nums) {
    let arr = [];
    for (let i = 0; i < nums; i++) {
      let ele = i.toString();
      let reverseStr = ele
        .split("")
        .reverse()
        .join("");

      if (ele === reverseStr) {
        arr.push(ele);
      }
      if (i === nums - 1) {
        return arr;
      }
    }
  }
  findSymmetricalNum(10000);
})();
