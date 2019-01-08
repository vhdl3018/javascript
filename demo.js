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
        var flag = true;//默认，全部到达目标
        //将所有属性，移动到指定的位置
        for (var attr in json) {
            if (attr == "opacity") {//判断这个属性attr中是不是opactiy
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
            } else if (attr == "zIndex") {//判断这个属性attr中是不是zindex
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