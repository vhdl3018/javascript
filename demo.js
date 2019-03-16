/**
 * 获取指定ID对象
 * @param {对象的id值} id 
 */
function my$(id) {
    return document.getElementById(id);
}

//
/**
 * div移动函数
 * @param {需要移动的对象} element 
 * @param {需要移动的目标位置} target 
 */
function animate(element, target) {
    //点击按钮启动定时器，自动移动div
    //将定时器，先清理一次
    clearInterval(element.timeId);
    //创建一个新的定时器
    element.timeId = setInterval(function () {
        //获取当前位置的left值
        var current = element.offsetLeft;
        //div移动速度 
        var step = 7;
        step = current > target ? -step : step;
        //将当前位置的left  自增
        current += step;
        // 当前 800   790
        // 目标 400
        // margin值会影响移动的方式
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            clearInterval(element.timeId);
            //解决不能到达指定的位置
            element.style.left = target + "px";
        }
    }, 10);
}

/**
 * 获取任意的一个属性的当前的属性值: left--->此时的left属性的值,width---当前的元素的宽
 * @param {元素对象} element 
 * @param {css属性} attr 
 * @returns {css属性对应的值}
 */
function getStyle(element, attr) {
    //判断浏览器是否支持这个方法
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}


/**
 * 支持多属性更改，并可以使用回调函数的动画函数
 * @param {*} element 
 * @param {*} json 
 * @param {*} fn 
 */
function animate2(element, json, fn) {
    //清除定时器
    clearInterval(element.timeId);
    //创建定时器
    element.timeId = setInterval(function () {
        var flag = true; //默认，全部到达目标
        //将所有属性，移动到指定的位置
        for (var attr in json) {
            if (attr == "opacity") { //判断这个属性attr中是不是opactiy
                //获取当前的位置
                var current = getStyle(element, attr) * 100;
                // console.log(current);
                //当前的属性对应的目标值
                var target = json[attr] * 100;
                // alert(current);
                //定义当前移动速度 
                var step = (target - current) / 10;
                //根据当前位置和目标位置，设定step的正负值 =====变速运动
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                //当前位置的加等速度
                current += step;
                element.style[attr] = current / 100;
                //判断当前位置与目标位置是否相等
            } else if (attr == "zIndex") { //判断这个属性attr中是不是zindex
                element.style.zIndex = json[attr];
            } else {
                //获取当前的位置
                var current = parseInt(getStyle(element, attr));
                //当前的属性对应的目标值
                var target = json[attr];
                // alert(current);
                //定义当前移动速度 
                var step = (target - current) / 10;
                //根据当前位置和目标位置，设定step的正负值 =====变速运动
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                //当前位置的加等速度
                current += step;
                element.style[attr] = current + "px";
            }
            console.log(current + "====" + target);
            //判断当前位置与目标位置是否相等
            if (current != target) {
                //只要没有到达目标，就将指示标志指定为false;
                flag = false;
            }
        }
        //全部到达目标，则清理定时器
        if (flag) {
            //清理定时器
            clearInterval(element.timeId);

            //所有属性到达目标后，才使用这个函数，前提是用户传入了这个函数
            if (fn) {
                fn();
            }
        }

        //测试代码:
        console.log("目标位置:" + target + ",当前位置:" + current + ",每次移动步数:" + step);
    }, 20);
}

/**
 * 处理页面滚动距离，浏览器的兼容问题
 * 获取页面滚动出去的距离
 */
function getScroll() {
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    }
}
/**
 * 获取鼠标在页面中的位置，处理浏览器中的兼容问题
 * @param {事件} e 事件对象 
 */
function getPage(e) {
    var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
    var pageY = e.pageY || e.clientY + getScroll().scrollTop;
    return {
        pageX: pageX,
        pageY: pageY
    }
}
function move(ele, json, step, fn) {
    //将定时器添加到元素的定义属性上
    clearInterval(ele.timer);
    //开户定时器
    ele.timer = setInterval(function () {
      // 设置一个表示，所有动作完成的。则终止定时器
      var flag = true;
      //循环json中的数据，把所有需要操作的值都进行更改一遍
      for (var attr in json) {
        if (attr === "opacity") { //属性为透明度时
          //获取元素当前的透明度值
          var current = parseInt(getStyle(ele, attr) * 100);
          //获取json中透明度目标值
          var target = json[attr] * 100;
          //确定改变的速度值
          var speed = (current - target) > 0 ? -step : step;
          //判定current与target值是否到位了
          if (Math.abs(current - target) < Math.abs(speed)) {
            // clearInterval(ele.timer);
            ele.style[attr] = target / 100;
          } else {
            ele.style[attr] = (current + speed) / 100;
          }

          // ele.style[attr] = current / 100;

        } else if (attr === "zIndex") { // 属性为层级时
          ele.style.zIndex = json[attr];
        } else { // 属性为以像素为单位的相关值
          var current = parseInt(getStyle(ele, attr));
          var target = json[attr];
          //这样计算速度存在一个问题，物体到达不了终点
          var speed = (current - target) > 0 ? -step : step;
          // current += speed;

          if (Math.abs(current - target) < Math.abs(speed)) {
            // clearInterval(ele.timer);
            ele.style[attr] = target + "px";
          } else {
            ele.style[attr] = current + speed + "px";
          }
          // ele.style[attr] = current + "px";
        }
        console.log(current + "====" + target);
        if (current != target) {
          flag = false;

        }

      }
      //flag为true，则说明所有的值都达到目标位置，则清除定时 器
      if (flag) {
        clearInterval(ele.timer);
        // 当运动结束后，在调用此函数
        if (fn) {
          fn();
        }
      }
      /*         //获取元素当前位置的值
              var current = getStyle(ele, );
              //先判定ele.offsetLeft与target值的关系
              var step = 0;
              step = (ele.offsetLeft - target) > 0 ? -speed : speed;
              // 用offsetLeft-目标位置，当差值小于speed时，也即是不能进行一次运动，则清除定时器
              // 同时，将left指定到目标位置
              if (Math.abs(ele.offsetLeft - target) < Math.abs(step)) {
                clearInterval(ele.timer);
                ele.style.left = target + "px";
              } else {
                ele.style.left = ele.offsetLeft + step + "px";
              } */
    }, 30);
  }