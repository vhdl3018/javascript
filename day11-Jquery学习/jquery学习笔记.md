# 第一天：Jquery简介
>jquery是一个javascript库，封装了很多的JavaScript函数和方法。
>免费的开源的js库。
>中大型网站的首选。
>www.jquery.com
>**write less，do more~！**

## 1、Jquery的功能
DOM中一个简单的功能需要大量的代码
DOM中兼容的问题很多
DOM中代码的容错性很差
DOM中window.onload也只能有一个
问题很多，总之学习Jquery之后，你会感到自己从地狱升到了天堂，而企业里都用这玩意。
**特点：**
1、解决了兼容性问题
2、体积小，只有几十KB
3、插件丰富、开源、免费
4、写得少，做得多，链式编程，隐式迭代
5、让写javascript程序更简单、更强大！

## 2、Jquery初次体验
1、引入jQuery库（本地引入）
```
第一种方式：<script src="./jquery-1.12.4.js"></script>
```
2、选程引入（CND引入）
```
第二种方式：使用bootCDN的服务器引入
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.js"></script>

```
3、jQuery库初次使用
```html
    <input type="button" value="显示效果" id="btn">
    <div id="dv"></div>
    <script src="./jquery-1.12.4.js"></script>
    <script>
        //点击按钮设置div的宽和高，背景颜色
        //1、引入JQuery的js文件
        $("#btn").click(function(){
            $("#dv").css({"width":"200px","height":"200px","background-color":"red"});
        });    
    </script>
```

## 3、jQuery中的顶级对象---jQuery或者$
可以用$符号来代替，为了方便jQuery中所有的东西都是jQuery或者$
简单的写法：$.属性   或者  $.方法名()
或者：jQuery.属性  或者  jQuery.方法名()
jQuery中几乎把DOM中的事件都封装成了一个方法
例如：
DOM中的注册事件
document.getElementById("id属性值").onclick=匿名函数
jQuery中
$("#id属性").click(匿名函数);
主要功能：
1、作为一般函数使用：$(param)或者jQuery(param)
​	1）、参数为函数：当dom加载完成后，执行此回调函数
​	2）、参数为选择器：查找所有茶 杯的标签，并将它们封装成jQuery对象
​	3）、参数为dom对象：将dom对象封装成jQuery对象
​	4）、参数为html标签字符串（用得少）：创建标签对象并封装成jQuery对象
2、作为对象使用：$.xxx()或者jQuery.xxx();
​	1）、$.each()：隐式遍历数组
​	2）、$.trim()：去除字符串两端的空格 
```javascript
    <script>
        /*
 需求1. 点击按钮: 显示按钮的文本, 显示一个新的输入框
 需求2. 遍历输出数组中所有元素值
 需求3. 去掉"  my atguigu  "两端的空格
 */
        /*需求1. 点击按钮: 显示按钮的文本, 显示一个新的输入框*/
        //1). 参数为函数 : 当DOM加载完成后，执行其中的函数     回调函数
        $(function(){
            $("#btn").click(function(){
                //访问当前按钮的value值
                console.log($(this).html());
            });
        });

        /*需求2. 遍历输出数组中所有元素值*/
        var arr = [123, 'atguigu', true]
        // 1). $.each() : 隐式遍历数组
        $.each(arr, function (index, item) {
            console.log('第' + (index + 1) + '个元素的值为' + item)
        })

        /*需求3. 去掉"  my atguigu  "两端的空格*/
        var str = "  my atguigu  "
        // 2). $.trim() : 去除两端的空格
        console.log(str.trim() === 'my atguigu')
        console.log($.trim(str) === 'my atguigu') //true
    </script>
```
**jQuery核心对象：**  执行$()返回的对象。

## 4、js对象和jquery对象的区别
jquery就是js中new Object生成的普通对象.
```javascript
//jQuery的基本框架模式
(function(window){
    var jQuery=function(){
    	return xxx();  
    };
    //向外部暴露一个可访问的属性
    window.$=window.jQuery=jQuery;
})(window);
```
## 5、js对象和jquery对象能不能共用？ 
**不能共用**

## 6、js对象和jquery对象，能不能互相转换？
>可以互相转换
如何转换？
1、js对象-->jquery对象
$(dom)

2、jquery对象-->js对象
$("a")[1];
$("a").get(1);

# 第二天、jQuery的选择器
1、基本选择器
    id选择器，$("#id");
    类选择器，$(".class");
    标签选择器，$("div")
    任意选择器，$("*")
    并集选择器，$("div,p,.div");
2、层次选择器
    * 找子孙后代, 兄弟元素
    * selector1>selector2: 子元素
    * selector1 selector2: 后代元素
3、过滤选择器
    * 在原有匹配元素中筛选出其中一些
    * :first
    * :last
    * :eq(index)
    * :lt
    * :gt
    * :odd
    * :even
    * :not(selector)
    * :hidden
    * :visible
    * [attrName]
    * [attrName=value]
```javascript
    //:eq  索引值 
    $(function(){
      //点击按钮显示效果
      $("#btn").click(function(){
        //索引等于3的背景颜色改变 
        // $("ul>li:eq(3)").css("background","red");
        //索引值小于3的背景颜色改变 
        // $("ul>li:lt(3)").css("background","red");
        //索引值大于3的背景颜色改变
        // $("ul>li:gt(3)").css("background","red");
        //索引值小于5大于3的背景颜色改变（只能小于写在前面）
        $("ul>li:lt(5):gt(2)").css("background","red");
      });
    });
```
4、表单选择器
    * :input
    * :text
    * :checkbox
    * :radio
    * :checked: 选中的
5、属性/文本
  * 操作标签的属性, 标签体文本
  * attr(name) / attr(name, value): 读写非布尔值的标签属性
  * prop(name) / prop(name, value): 读写布尔值的标签属性
  * removeAttr(name)/removeProp(name): 删除属性
  * addClass(classValue): 添加class
  * removeClass(classValue): 移除指定class
  * val() / val(value): 读写标签的value
  * html() / html(htmlString): 读写标签体文本

# 第三天，jQuery元素的创建和事件绑定

## 1、元素的创建 
**方法**
$("html代码及内容")；
对象.html("html代码及内容");

## 2、元素的添加 
父级元素.append("子级元素");
子级元素.appendTo("父级元素");
父级元素.prepend("子级元素");
子级元素.prependTo("父级元素");
父级元素.after("子级元素");
子级元素.before("父级元素");

## 3、元素的移除
父级元素.html("");
父级元素.empty("");     --->清空， 
父级元素.remove("");   --->自杀，删除自己。

## 4、读取元素的值 
val()：可以设置表单的value属性值 
val()：可以设置下拉框某个option值

## 5、自定义属性操作
attr("属性","值");  设置属性的值 
attr("属性"); 读取属性的值

## 6、元素选中操作
prop()方法
prop("checked");  
prop("checked","true/false");

## 7、元素样式的操作
设置或者获取元素的宽、高
.width()	--->获取宽度值 
.width(值)	--->设置宽度值 
.height()	--->获取高度值 
.height(值)	--->设置高度值

设置或者获取元素的left、top
.offset()	---> 返回的是一对象 ，该对象中有两个属性，left和top
在offset()方法获取，left和top时，包括margin值
.offset({"left":值,"top":值});   设置

.scrollLeft();  ---->向左卷曲出去的值
.scrollTop(); ---->向上卷曲出去的距离

## 8、事件的绑定
元素.事件名字(事件处理函数);
元素.bind("事件名字",事件处理函数)
元素.bind({"事件名字",事件处理函数})

父元素.delegate("子元素的选择器"，"事件名字"，事件处理函数);


# 第四天、jQuery中的事件绑定和解绑操作
## 1、元素的事件绑定
1、对象.事件名字(事件处理函数);		普通的方法
2、对象.bind(参数1，参数2);			参数1：事件名字   参数2：事件处理函数
前两种方式只能为存在的元素绑定事件，后添加的元素没有事件

3、对象.delegate("选择器","事件名字",事件处理函数);
父级元素调用方法，代理子级元素绑定事件
4、对象.on("事件名字"，“选择器”，事件处理函数);
父级元素调用方法，代理子级元素绑定事件

**因为delegate方法中是调用的on方法，所以，可以直接使用on方法**

事件绑定的区别
元素的事件绑定，哪个是重点？
案例------用到事件的绑定，体现出事件不同绑定方式的区别 
元素的事件解绑，不同方式

按键改变元素的背景颜色 

事件的参数
事件的触发
链式编程原理
each方法的使用
包装集
多库共存
插件的使用
自己做插件











































# 第二天：Jquery知识讲解
