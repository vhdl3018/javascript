/**
 * 自定义绑定事件函数，兼容ie8
 * @param {*} obj 
 * @param {*} event 
 * @param {*} handle 
 */
function bindEvent(obj, event, handle) {
  if (obj.addEventListener) {
    obj.addEventListener(event, function(ev){
      if(handle.call(obj) == false){
        ev.cancelBubble = true;
        ev.preventDefault();
      }
    }, false);
  } else if (obj.attachEvent) {
    obj.attachEvent('on' + event, function (ev) {
      if(handle.call(obj) == false){
        window.event.cancelBubble = true;
        return false;
      }
      handle.call(obj);
    });
  }

}
/**
 * 获取指定父类下的，类名为sClass的所有元素
 * @param {*} oParent 
 * @param {*} sClass 
 */
function getByClass(oParent, sClass) {
  var arr = [];
  var eles = oParent.getElementsByTagName("*");

  for (var i = 0; i < eles.length; i++) {
    if (eles[i].className == sClass) {
      arr.push(eles[i]);
    }
  }
  return arr;
}
/**
 * 将一个对象数组，转化为数组
 * @param {*} elems 
 */
function toArray(elems) {
  var arr = [];
  for (var i = 0; i < elems.length; i++) {
    arr.push(elems[i]);
  }
  return arr;
}

function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  } else {
    return getComputedStyle(obj, false)[attr];
  }
}
/**
 * 创建Vquery对象
 * @param {} vArg 
 */
function Vquery(vArg) {
  //自定义元素数组属性：用来保存选中的元素
  this.elements = [];
  //对传参数进形分类处理
  switch (typeof vArg) {
    case 'function': //vArg  :  function
      bindEvent(window, "load", vArg);
      break;
    case 'string':
      switch (vArg.charAt(0)) {
        case "#": //id选择器
          var obj = document.getElementById(vArg.substring(1));
          this.elements.push(obj);
          break;

        case '.': //类选择器
          var aObj = getByClass(document, vArg.substring(1));
          this.elements = aObj;
          break;

        default:
          this.elements = toArray(document.getElementsByTagName(vArg));
          break;
      }
      break;
    case 'object': //是一个对象，直接添加到属性中
      if (vArg.constructor == Array) {
        this.elements = vArg;
      } else {
        this.elements.push(vArg);
      }

      break;
  }
}
Vquery.prototype.attr = function (name, value) {
  //setAttribute
  //getAttribute
  if (arguments.length == 2) {  //设置
    for (var i = 0; i < this.elements.length; i++) {
      // alert(this.elements[i]);
      this.elements[i].setAttribute(name, value);
    }
  } else if (arguments.length == 1) { //获取

    return this.elements[i].getAttribute(name);
  }
}
Vquery.prototype.css = function (attr, value) {
  if (arguments.length == 2) {
    for (var i = 0; i < this.elements.length; i++) {
      // alert(this.elements[i]);
      this.elements[i].style[attr] = value;
    }
  } else if (arguments.length == 1) {
    if (typeof attr == 'object') { //json对象
      for (var json in attr) {
        // console.log(json);
        for (var i = 0; i < this.elements.length; i++) {
          // alert(this.elements[i]);
          // console.log(attr[json]);sss
          console.log(this.elements);
          this.elements[i].style[json] = attr[json];
        }
      }
    } else {
      return getStyle(this.elements[0], attr);
    }

  }
};

Vquery.prototype.click = function (fn) {
  // for(var i=0;i<this.elements.length;i++){
  //   bindEvent(this.elements[i],'click',fn);
  // }
  this.on("click", fn);
}

Vquery.prototype.mouseover = function (fn) {
  // for(var i=0;i<this.elements.length;i++){
  //   bindEvent(this.elements[i],'mouseovers',fn);
  // }

  this.on("mouseover", fn);
}

Vquery.prototype.on = function (events, fn) {
  for (var i = 0; i < this.elements.length; i++) {
    bindEvent(this.elements[i], events, fn);
  }
};
Vquery.prototype.html = function (str) {
  // alert(str);
  if (str) { //有参数，进行设置
    for (var i = 0; i < this.elements.length; i++) {
      // alert(this.elements[i]);
      this.elements[i].innerHTML = str;
    }
  } else {  //无参数，则读取innerHTML的值
    return this.elements[0].innerHTML;
  }
};
Vquery.prototype.hide = function () {
  for (var i = 0; i < this.elements.length; i++) {
    // alert(this.elements[i]);
    this.elements[i].style.display = "none";
  }
}
Vquery.prototype.show = function () {
  for (var i = 0; i < this.elements.length; i++) {
    // alert(this.elements[i]);
    this.elements[i].style.display = "block";
  }
}
Vquery.prototype.hover = function (fnOver, fnOut) {
  // alert(111);
  this.on("mouseover", fnOver);
  this.on("mouseout", fnOut);
}
Vquery.prototype.eq = function (n) {
  return $(this.elements[n]);
}
Vquery.prototype.index = function () {
  //找到所有的兄弟元素
  var elems = this.elements[0].parentNode.children;
  console.log(elems);
  for (var i = 0; i < elems.length; i++) {
    if (elems[i] == this.elements[0]) {
      return i;
    }
  }
}
Vquery.prototype.find = function (sel) {
  var arr = [];
  if (sel.charAt(0) == '.') {
    for (var i = 0; i < this.elements.length; i++) {
      arr = arr.concat(getByClass(this.elements[i], sel.substring(1)));
    }
  } else {
    for (var i = 0; i < this.elements.length; i++) {
      arr = arr.concat(toArray(this.elements[i].getElementsByTagName(sel)));
    }
  }

  return $(arr);
}
/**
 * 返回一个vQuery对象
 * @param {*} vArg 
 */
function $(vArg) {
  return new Vquery(vArg);
}