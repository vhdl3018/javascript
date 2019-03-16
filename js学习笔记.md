[TOC]

# 第一天：js的介绍及基本语法变量，运算符

```
变量-------重点
数据类型---重点
运算符-----重点
```
javascript：简称js
## 1、js分为三个部分
1. ECMAScript 标准                         		js的基本语法
2. DOM--Document Object Model            	文档对象模型
3. BOM--Browser Object Model             		浏览器对象模型

## 2、JavaScript是什么？
是一门脚本语言
是一门解释性语言
是一门动态类型的语言
是一门基于对象的语言

 编译语言：需要把代码翻译成计算机所认知的二进制语言，才能够执行
 脚本语言：不需要编译，直接执行
 常见的脚本语言：t-sql，cmd

 电脑的硬件   系统    客户端的程序    代码
 电脑的软件   系统    浏览器        js代码

 javascript原名不是js  而是livescript

 ## 3、js代码的注意问题
 * 在一对script的标签中有错误的js代码，那么该错误代码的js代码不会执行；
 * 如果第一对的script标签中有错误 ，不会影响后面的js代码执行；
 * script的标签中可以写什么内容：`type="text/javascript"   language="text/javascript"`，有可能会出现两种方式显示，是为兼容问题；
 * script标签可以出现多对；
 * script标签一般是放在body标签最后的，有时候在head中；
## 4、js中的变量
``` javascript
	1、操作数据都是在内存中操作
		js中存储数据使用变量的方式：名字，值--->数据
		js中声明变量都用var-->存储数据，数据应该有对应的数据
	2、变量的作用是存储数据 
		变量声明 （有var 有变量名  没有值  ）
		变量初始化（有var  有变量名 有值 ）
	3、变量声明方式
		var 变量名;
		var number = 10;
		var number2 = 5;
		var name = "小黑";
		var flag = true;
		var nll = null;
		var obj = new Object();		
        //声明多个变量，一个一个的赋值
        var num1,num2,num3;
        num1 = 1;
        num2 = 2;
        num3 = 3;
        //声明多个变量，直接赋值
        var num1 = 1, num2 = 2, num3 = 3;
	3、总结
		- 变量的作用：用来操作数据（可以存储、读取）
		- 变量的声明：没有赋值， var 变量名；
		- 变量的初始化： var 变量名=值;
            js中声明变量都用var；
            js中的每一行代码结束都应该有分号；（写代码的习惯）
            js中的大小写是区分的；变量 a和A  是两个变量
            js中的字符串可以使用单引号，也可以使用双引号，目前我们暂时使用双引号
		- 变量名的注意问题
            1、变量名要有意义；
            2、变量名要有规范：一般以字母，$符号，下划线开头，中间或者后面可以有$、字母和数字；
            3、变量名一般都是小写的；
            4、不能使用关键字；
            5、变量名如果是多个单词，第二个单词首字母，采用驼峰命名法；
```
## 5、js变量相关案例
1、两个变量交换数值		

``` javascript
//1、用中间变量，进行交换数据
var num1 = 10;
var num2 = 20;

var temp = num1;
num1 = num2;
num2 = temp;

console.log(num1);
console.log(num2);
//2、一般适用于数字交换 
var num1 = 10;
var num2 = 20;

num1 = num1 + num2;  	//两个数据求和
num2 = num1 - num2; 	//用和减去num2，差值为num1，并赋值给num2，
num1 = num1 - num2;
console.log(num1,num2);
		
```
## 6、js中的注释
注释：是解释代码的含义，给其他程序员看的
注释方式：
1、单行注释   //
2、多行注释 /**/

注释后的代码不执行。

## 7、变量的类型
js中有哪些数据类型？
原始数据类型：number、string、boolean、null、undefined、object
number：数字类型（整数、小数）
string：字符串类型
boolean：布尔类型
null：空类开
undefined：未定义类型
object：对象类型
nan:不是一个数字

**什么情况下的结果是undefined？**
变量声明了，没有赋值，结果是undefined
函数没有明确返回值，如果接收了，结果也是undefined

如果一个变量的结果是undefined和一数字进行计算，结果是：**NaN**  不是一个数字，也没有意义 

如何获取变量的数据类型是什么？  使用typeof来获取
`typeof(变量名);typeof 变量名;`

``` javascript
var number = 5;
var name = "小黑";
var flag = true;
var nll = null;
var obj = new Object();	
var undef;

//使用typeof获取数据类型
console.log(typeof number);   	//number
console.log(typeof name);		//string
console.log(typeof flag);		//boolean
console.log(typeof nll);		//object
console.log(typeof obj);		//object
console.log(typeof undef);		//undefined

```
## 8、布尔、null及undefined
boolean只有两个值：true\false
null值：只有手动赋值为null才为null

## 9、类型转换
1、其他类型转数字类型

```javascript
parseInt()  //转数字
parseInt("10") //结果为：10
parseInt("10fdsfsdfs")  //结果为：10

parseFloat()  //转小数
parseFloat("10") //结果为：10
parseFloat("10fdsfsdfs")  //结果为：10

Number（）
Number("10") //结果为：10
Number("10fdsfsdfs")  //结果为：NAN
```
**Number转数字，比parseInt、parseFloat要严格**
2、其他类型转字符串类型

*	tostring()	//可以转换成字符串类型
*	String()		//可以转换成字符串类型
*	\+			//用连接符转字符串

3、其他类型转布尔类型
-Boolean()    转换成布尔类型
>"" null  undefined  三个转换成布尔类型，均为false;

# 第二天：js中的流程控制
> ++ --
> if...else   if   if   elseif  else
> while
> for

## 1、一元运算符
num++;  自身加1      **先用后加**
++num;  自身加1      **先加后用**

``` javascript
	var num=100;
	var b = num++;
	console.log(b);		//运行结果：100
	
	var num=100;
	var a = ++num;
	console.log(a);		//运行结果：101
```

## 2、分支运算符
根据不同的条件执行对应的代码，格式如下：
if(条件){
​    代码块;
}
if(条件){
​    代码块;
}else{
​    代码块;
}
if(条件1){
​    代码块;
}elseif(条件2){
​    代码块;
}else{
​    代码块;
}
> 案例：
``` javascript
var age = prompt("请你输入年龄：");
if(parseInt(age) > 18){
    console.log("你可以去看电影。");
}else{
    console.log("你还未成年，不可以看电影。");
}
```
如果是多个if...else语句，连着使用，可以用switch()语句，进行替代。
switch(值){
​    case 值1:
​    代码块；
​    break;
​    case 值2:
​    代码块；
​    break;
​    case 值3:
​    代码块；
​    break;
​    default:
​    代码块；
​    break;
}


## 3、三元表达式
语法：
`var  变量 = 表达式1 ？ 表达式2 ： 表达式3;`
执行过程：
表达式1为真，执行表达式2；
表达式1为假，执行表达式3；

*只要是if...else语句，都可以改为三元表达式来进行运算。*

## 4、循环控制器
1、先判断条件是否成立，在执行
var i =1;
while(条件){
​    循环体;
​    i++;
}
2、先执行，在判断条件是否成立
var i=1;
do{
​    循环体;
​    i++
}while(条件)
**总结**
while
先判断，后循环，可能一次也不执行循环体。
do..while
先循环，后判断，至少执行一次循环体。

for循环：
表达式：
for(表达式1；表达式2；表达式3){
​	循环体;    
}
``` javascript
        //计算用户输入所有数字的总和
        var vUserInput;
        var aNumbers = Array();
        var sMessage="你输入了：<br/>";
        var iTotal=0;
        var iArrayIndex=0;
        do{
            vUserInput = Number(prompt("请输入一个数字，或者'0'退出","0"));
            if(isNaN(vUserInput)){
                document.write("输入错误字符："+vUserInput+"，请输入数字，'0'退出<br>");
                continue;
            }
            aNumbers[iArrayIndex] = vUserInput;
            iArrayIndex++
        }while(vUserInput!=0)

        //用for循环遍历数组
        for(var i=0;i<aNumbers.length;i++){
            iTotal += Number(aNumbers[i]);
            sMessage += aNumbers[i] + "<br>";
        }
        sMessage += "总数：" + iTotal;
        document.write(sMessage);
```

## 5、js中的数组
1、定义
数组是一组有序的数据
2、作用
可以一次性存储多个数据
3、创建方法
​	var 数组名=new Array()； //没有数据的数组，空数组
​	var 数组名=[];   //字面量的方式，创建一个空数组

如果定义数组，默认有长度，那么默认为undefined。
数组的索引和长度的关系：
数组的索引是从0开始的。
长度值为索引最大值加1。长度为：5，则索引为：0-4
数组的长度，可以改变吗？
是可以。

``` javascript
var  aArr = [];
console.log(aArr.length);  //输出为0
aArr[11] = 9;
console.log(aArr.length); //输出为12
```
4、数组案例
``` javascript
//例1：求数组中的所有元素和
var aNumbers = [12, 32, 434, 56, 77, 88, 1, 23, 5, 333, 56, 333];
var iTotal = 0;
for (var i = 0; i < aNumbers.length; i++) {
	iTotal += aNumbers[i];
}
document.write("数组中所有元素的和为：" + iTotal + "<br>");
//例2、求数组中所有元素和的平均值 
document.write("数组中所有元素的平均值为：" + iTotal / aNumbers.length + "<br>");
//例3、求数组中所有元素的最大值
//假设变量是最大值         var max = Number.MIN_VALUE;
var iTemp = aNumbers[0]; //假定当前下标值为最大值或者最小值。
for(var i=0;i<aNumbers.length;i++){
    if(aNumbers[i]>iTemp){  //如果比最大值还大，则把元素的值赋值给临时最大值 
    	iTemp=aNumbers[i];
    }
}
document.write("数组中所有元素的最大值为：" + iTemp + "<br>");
//例4、求数组中所有元素的最小值
for(var i=0;i<aNumbers.length;i++){
    if(iTemp>aNumbers[i]){  //如果下标为i的值，小于下标为i+1的值，则将下标为i的值，赋值给临时变量 
    	iTemp=aNumbers[i];
    }
}
document.write("数组中所有元素的最小值为：" + iTemp + "<br>");

//例5、倒循环数组
document.write("数组中所有元素的倒序输出：");
for(var i=aNumbers.length;i>0;i--){
	document.write(aNumbers[i-1]+",");
}
document.write("<br>");

//例6、将数组中的元素，通过“|”拼接为字符串
var sMessage="";
for(var i=0;i<aNumbers.length;i++){
	sMessage+=aNumbers[i] + "|";
}
document.write("数组中所有元素的拼接字符串：" + sMessage + "<br>");
```
## 6、js中运算符的优先级
**优先级从高到低**
1、()    优先级最高
2、一元运算符   ++  --  ！
3、算数运算符   先  *  /   %  后  +  - 
4、关系运算符   >   >=  <   <=
5、相等运算符	==   !==   ===  !===
6、逻辑运算符	先&&  后||
7、赋值运算符	=

## 7、js中的函数 
函数 ：  可以封装一段有特定功能的代码，然后通过函数名可以重复调用些段代码。
语法 ： 
function 函数名(形参1，形参2，...){
 函数体语句;
}
调用函数：
函数名();
arguments：获取函数传递过来的实参。
**函数的返回值：**
1、所有的函数都默认返回：undefined；
2、return 语句后面的代码，不会执行；
3、return 可以返回任意的数据类型；可以通过函数名()方式，进行访问函数的返回值。


## 8、js代码编写规范
1、命名要规范
	变量、函数的命名，要有意义
	变量的名称一般用名词
	函数的名称一般用动词
2、变量规范
	操作符的前后要有空格 
3、注释规范
	//这里是注释
	/*这里是注释*/
4、空格规范
	代码之间要有空格 
5、换行规范
	var arr = [1,2,3,4];
	if(){
        
	}
	for(;;){
	    
	} 
## 9、js中的作用域 
变量或者函数可以起作用的范围 ；
ECAMscript
全局作用域：在script或者一个独立的js文件中，在全局作用域中定义的变量为全局变量，在任何位置都可以使用；
局部作用域：任何一个函数的内部都有一个局部作用域，在局部作用域中定义的变量，只能在函数中访问；
块级作用域：在js和ECMAscript中没有块级作用域；


# 第三天：js中的对象

**理解
​	面向过程
​	面向对象
​	1、对象
​	重点-->需要写出代码-->能够说出来
​	创建对象的不同方式
​	自定义对象-->重点-->能够写出来	
​	2、数据类型深入：
​	理解-->简单的类型和复杂类型-->画图理解数据的值，在哪个空间中存储
​	重点-->每个对象下的常见方法的使用
​	内置对象
**

## 1、编程思想
把一些生活中做事的经验融入到程序中。
1、面向过程：
​	凡事都要亲力亲为，每件事的具体过程都要知道，注重过程。
2、面向对象：
​	只需要根据需求找对象，所有的事都用对象来做，注重结果。
​	面向对象的特性：封装、继承和多态。（抽象）
​	js不是面向对象的语言，但是可以模拟面向对象的思想。
​	js是一门基于对象的语言。
3、对象
​	有属性和方法。

## 2、js中创建对象的方法
1、第一种创建对象方法
``` javascript
	//1)创建对象
	var obj = new Object();
	//对象有特征和行为
	//2)添加属性
	obj.name = "小王";
	obj.age = 18
	//)添加方法
	obj.eat = function(){
        console.log("小王喜欢吃臭豆腐");
	}
	obj.play= function (){
        console.log("我喜欢玩麻将");
	}
	
	console.log(obj.age);
	console.log(obj.name);
	obj.eat();
	obj.play();
	
	//4)创建一个自定义的对象
	
	function Person(name,age){
        this.name = name;
        this.age = 19;
        this.eat = function(){
            console.log(“我的名字叫”+this.name+",我喜欢吃饭");
        }
        this.paly = function(){
            console.log("我的名字叫："+this.name+",我今年"+this.age+"岁！");
        }
	}
	//5)生成一个自定义对象
	var person1 = new Person("小红","12");
	
```

## 3、js对象总结 
//字面量创建对象：一次性的使用
var obj={
​    name:"小三",
​    age:"38",
​    sex:"妇",
};

//点语法 ： 对象.名字 = 值;   对象.名字 = 函数


//js是一门什么语言？
是一门解释性的语言，
是一门脚本语言
是一门弱类型语言，声明变量都用var
是一门基于对象的语言
是一门动态类型的语言：
1、变量（代码）只有执行到这个位置的时候，才知道这个变量中到底存储的是什么，如果是对象，则发生对象的作用；如果是变量，则发生变量的作用。
2、对象没有什么，只要有点了，通过点语法 ，那么就可以访问对象的属性和方法。

## 4、js中的内置对象
Math对象
```javascript
	//获取随机颜色 #333333
	function getHexColor(){
        var str="#";
        var arr=["0","1","2","3",
            "4","5","6","7",
            "8","9", "a","b",
            "c","d","e","f"];
		for(var i=0;i<=5;i++){
            var num = parseInt(Math.random()*16);
            str+=arr[num];           
		}
		return str;
		
	}
    //更改页面的背景颜色,页面加载事件
    window.onload =function(){
    	document.bgColor=getHexColor();
    };

```

## 5、创建对象的三种方式

1、调用系统的构造函数创建对象
var  obj = new Object();
obj.name = "小王";
obj.age = 19;
obj.eat = funciton(){
​    document.write(obj.name + "会吃白饭");
}
2、自定义构造函数的方式创建对象
function Person(name,age){
​    this.name = name;
​    this.age = age;
​    this.eat=function(){
​        document.write(this.name+"会吃饭！");
​    }
}
3、通过字面量的方式创建对象
var person = {
​    "name":"小王",
​    "age":19,
​    "eat":"function(){
​        document.write(person[name]+"会吃饭");
​    }"
}

## 6、js中的Array对象
常见方法：
1、Array.isArray(对象)---->判断这个对象是不是数组
2、instanceof关键字
3、.concat(数组1,数组2,数组3...) 	组合多个数组成为，一个新数组
4、.every(函数)---->返回布尔类型，函数作为参数使用，函数中有三个参数：第一个是元素值，第二个参数是索引值，第三个参数是原来的数组（没用）。如果这个数组中的每个元素值都符合条件，最后才返回true
5、filter(函数)---->返回的是数组中每一个元素都符合条件的元素
6、push(值)--->把值添加到数组中的最后一个值后，返回值为追加数据之后的数组长度
7、pop()----->删除数组中最后一个元素，返回值为删除值
8、shift()---->删除数组中第一个元素值，返回值为删除值
9、unshift（）----->向数组中第一个元素位置，添加一个新元素，返回值为插入后长度。


# 第四天： js中DOM操作
**javascript分为三个部分：**
- ECMAScript标准：JS的基本语法
- DOM：Document Object Model：文档对象模型-------->操作页面的元素
- BOM：Browser Object Model----->浏览器对象模型----->操作的是浏览器

##  1、DOM的作用及概念
DOM是文档对象：把一个html文件看成是一个文档，由于万物皆是对象，所以把这个文档看成是一个对象。
HTML：展示信息
XML：存储数据
html或者xml页面中的每个标签，都看成是一个元素（element），每个元素都可以看成是一个对象。
标签可以嵌套，标签中有标签 ，元素中有元素
DOM的经常操作：
1、获取对象元素
2、改变对象属性
3、对对象元素进行增删改查

## 2、DOM元素添加事件
> 案例
```html
    <!--
        html代码，点击按钮弹出对话框，alert()为js代码。
        点击操作：----》事件，需要触发和响应，事件源.
        第一个版本，没有分享html和js
    -->  
    <input type="button" value="按钮" id="btn" onclick="alert('我是一个按钮，我被点击了~！')">

	//分离html和js
	<script>
    	document.getElementById("btn").onclick=function(){
            alert("我是一个按钮，我被点击了~！");
        };
	</script>
	
	<!--
		html标签中的id属性中存储的值是唯一的，
		id属性就像人的身份证号码一样，不能重复，页面中唯一标识
		从文档中，找到id值为btn的标签元素
	-->
	<script>
		function f1(){
            alert("我是一个按钮，我被点击了~！");
		}
		document.getElememntById("btn").onclick=f1;  //不加括号，只有点击才触发f1()函数
	</script>
	
	<!--最终代码-->
	<input type="button" value="最终版" id="btn">
	<script>
		//根据id属性的值从整个文档中获取这个元素标签	
		var btn = document.getElementById("btn");
		//为当前的这个按钮元素（对象），注册点击事件，添加事件处理函数（匿名函数）
		btn.onclick=function(){
			//响应做的事情
            alert("最终版本的弹出对话框");
		}
	</script>
	<input type="button" value="点击按钮显示图片" id="btn">
    <img src="" id="img">
    <script>
        //点击按钮显示图片：
        //点击按钮的时候设置img标签的src属性值

        // <!-- 1、根据id获取按钮 -->
        var btn = document.getElementById("btn");
        // <!-- 2、为按钮注册点击事件 -->
        btn.onclick = function(){
            // <!-- 3、根据id获取图片的标签，设置图片的scr属性 -->
            var img = document.getElementById("img");
            img.src="images/dog.jpg";
            img.width="300";
            img.height="400";
        }

    </script>    
```
## 3、DOM操作总结 
+ **获取元素：**

	1、根据id从整个文档中获取元素-----返回一个元素对象。
	​	document.getElementById("id值");
	2、根据标签的名字获取元素---------返回元素对象组成的数组
	​	document.getElementByTagName("标签名");
	3、操作基本标签的属性：
	​	src\title\alt\href\id\class\等；
	4、操作表单标签的属性
	​	name\value\type\checked\selected\disabled\readonly
+ **元素操作：**

	对象.style.属性=值;
	对象.className=值;
+ **为元素添加事件的操作：**
  	事件：就是一件事，有事件源，触发和响应。
+ **this关键字**
  如果是当前元素的事件，可以使用this表示当前对象。
  

内置对象：系统自带的对象
自定义对象：自己定的对象
DOM
dom对象：通过dom方式获取元素得到的对象

元素element：页面中的标签
节点node：页面中所有内容、标签、属性和文本
根元素：html标签 
页面中的顶级对象：document

## 4、元素样式的操作案例
innerText和textContent：
innerText和innerHtml：
****兼容代码****  
****自定义属性****
****节点操作****
```html
	//点击按钮禁用文本框和改变列表背景色
	<input type="button" value="禁用文本框" id="btn">
	<input type="text" value="文本框" id="txt">
	<script>
		var btn = document.getElementById("btn");
		btn.onclick=function(){
            var txt=document.getElementById("txt");
            txt.disabled = true;
		}
	</script>
	
	<ul>
        <li>1111</li>
        <li>3333</li>
        <li>dfgdg</li>
        <li>dfgdfgdfg</li>
        <li>fdgdfgdfg</li>
        <li>fdsfdsf</li>
        <li>fsdfsdfsd</li>
    </ul>

    <script>
        //先获取所有的li元素
        var liObjs = document.getElementsByTagName("li");
        //给所有的li标签添加滑过事件
        for(var i=0;i<liObjs.length;i++){
            //鼠标划过，添加事件
            liObjs[i].onmouseover = function (){
                //为当前的li标签添加背景颜色
                this.style.backgroundColor = "#00ffff";
            }
            //鼠标离开，添加事件
            liObjs[i].onmouseout = function (){
                this.style.backgroundColor = "";
            }

        }
    </script>

```
##  5、innerText和innerHTML的区别
1、如果使用innerText主要设置文本的，设置标签内容，是没有标签效果的
2、innerHTML是可以设置文本内容的。
3、innerHTML主要的作用是在标签中设置新的html标签内容，是有标签效果的。

**总结：** 
想要设置标签内容，使用innerHTML，
想要设置文本内容，innerText或者textContent，或者innerHTML，推荐使用innerHTML。

获取的时候:

innerText可以获取标签中间的文本内容，但是标签中如果不有标签,那么最里面的标签，只能获取文本内容，而不能获取到标签。
innerHTML才是真正的获取标签中间的所有内容，包括文本和html标签。

**结论：**
- 想要文本内容，用innerText
- 想要文本和标签，用innerHTML
- 想要设置文件，用innerText或者innerHTML或者textContent

## 6、自定义属性值
```html
	<script
        //获取所有li标签
        var list = document.getElementsByTagName("li");
        //循环遍历
        for(var i=0;i<list.length;i++){
            list[i].setAttribute("score",(i+1)*10);

            //点击每个标签，显示自定义属性值
            list[i].onclick = function(){
                alert(this.getAttribute("score"));
            }
        }
        </script>
```
总结：
1、setAttribute("属性名",属性值)
2、getAttribute("属性名");
3、removeAttribute("属性名");
**自定义象的方式来直接获取该属性的值。只能通过getAtrribute()方式来访问。**

## 7、实现tab切换标签
```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style-type: none;
        }

        .box {
            width: 400px;
            height: 300px;
            border: 1px solid #ccc;
            margin: 100px auto;
            overflow: hidden;
        }

        .hd {
            height: 45px;
        }

        .hd span {
            display: inline-block;
            width: 90px;
            background-color: pink;
            line-height: 45px;
            text-align: center;
            cursor: pointer;
        }

        .hd span.current {
            background-color: purple;
        }

        .bd li {
            height: 255px;
            background-color: purple;
            display: none;
        }

        .bd li.current {
            display: block;
        }
    </style>
    <div class="box" id="box">
        <div class="hd">
            <span class="current">体育</span>
            <span>娱乐</span>
            <span>新闻</span>
            <span>综合</span>
        </div>
        <div class="bd">
            <ul>
                <li class="current">我是体育模块</li>
                <li>我是娱乐模块</li>
                <li>我是新闻模块</li>
                <li>我是综合模块</li>
            </ul>
        </div>
    </div>

    <script>
        //1、获取id为box的DOM标签
        var box = document.getElementById("box");
        //2、获取box下的所有span的标签
        var spans = box.getElementsByTagName("span");
        //3、获取box下的所有li的标签
        var lists = box.getElementsByTagName("li");
        //4、循环所有的span标签
        for (var i = 0; i < spans.length; i++) {
            //5、获取当前span的值，并该值，重新给span添加一个自定义属性
            //点击前就添加自定义属性和值
            spans[i].setAttribute("index", i);
            //6、给每个span添加一个点击事件
            spans[i].onclick = function () {
                //7、将所有的span、li标签，去除class属性
                for (var j = 0; j < spans.length; j++) {
                    spans[j].removeAttribute("class");
                    lists[j].removeAttribute("class");
                }
                //8、为当前的span、li标签添加class属性和值
                this.setAttribute("class", "current");
                //9、获取当前span的i值，并通过index值，设置i值对应的li标签class属性和值
                var index = this.getAttribute("index");
                lists[index].setAttribute("class", "current");
            }
        }

    </script>

```
## 8、获取标签元素的方式总结
1、根据id获取元素
document.getElementById();
2、根据标签名获取元素
document.getElementsByTagName()
3、有兼容性  ie9之前的不能用
document.getElementsByClassName('class名');   
4、利用表单名获取标签元素，
document.getElementsByName()
5、利用（id）选择器;  兼容性  ie8以后都能适用 
document.querrySelector('可以写任何选择器   只能选择一个')
6、利用（class）选择器兼容性  ie8以后都能适用 
document.querrySelectorAll('可以写任何选择器，可以选择多个'); 



# 第五天、节点的相关操作

节点：
为什么要学节点 ？
节点操作的相关属性---->作用
12行代码    有用的    熟练的问题

节点案例

元素的创建：三种方式
为什么要有元素的创建
添加、删除

## 1、节点的介绍
获取div标签中所有标签，并给它们添加背景颜色。

| 节点类型 | nodeName | nodeType | nodeValue              |
| -------- | -------- | -------- | -----------------|
| 元素     | 元素名称 | 1        | null                   |
| 属性     | 属性名称 | 2        | 属性值                 |
| 文本     | #text    | 3        | 文本内容（不包含html） |

**节点操作**

1.节点查找

    document.getElementById，document.getElementByTagName，			document.getElementByName ，document.getElementByClassName
    document.querySelector() 参数为选择器
    document.forms 选取页面中的所有表单元素
2.增加节点

    增加节点前必须先使用document.createElement()创建元素节点，参数为标签名
    m.appendChild(n) 为m元素在末尾添加n节点
    m.insertBefore(k,n) 在m元素的k节点前添加n节点
3.删除节点

    m.removeChild(n)删除m元素中的n节点
    m.replaceChild(k,n)用n节点取代m元素中的k节点
4.复制节点

    m.cloneChild() 复制m节点，并将复制出来的节点作为返回值
    参数为true时，则将m元素的后代元素也一并复制。否则，仅复制m元素本身

**节点属性操作**

1.节点属性选取

    m.属性名  ：驼峰形式         m.className
    m[“属性名”] ：加引号，驼峰形式       m.['className']
    m.getAttribute(“属性名”)  ：加引号，html的形式       m.getAttribute("class")
2.节点属性修改

    前两种选取方法时，直接赋值即可
    m.setAttribute("属性名"，“值”) 

## 2、单选和全选点击实现
```html
    <style>
        * {
          padding: 0;
          margin: 0;
        }
    
        .wrap {
          width: 300px;
          margin: 100px auto 0;
        }
    
        table {
          border-collapse: collapse;
          border-spacing: 0;
          border: 1px solid #c0c0c0;
          width: 300px;
        }
    
        th,
        td {
          border: 1px solid #d0d0d0;
          color: #404060;
          padding: 10px;
        }
    
        th {
          background-color: #09c;
          font: bold 16px "微软雅黑";
          color: #fff;
        }
    
        td {
          font: 14px "微软雅黑";
        }
    
        tbody tr {
          background-color: #f0f0f0;
        }
    
        tbody tr:hover {
          cursor: pointer;
          background-color: #fafafa;
        }
      </style>
      
        <div class="wrap">
        <table>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" id="j_cbAll" />
                    </th>
                    <th>菜名</th>
                    <th>饭店</th>
                </tr>
            </thead>
            <tbody id="j_tb">
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>红烧肉</td>
                    <td>田老师</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>西红柿鸡蛋</td>
                    <td>田老师</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>油炸榴莲</td>
                    <td>田老师</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>清蒸助教</td>
                    <td>田老师</td>
                </tr>

            </tbody>
        </table>
    </div>
    
    <script>
        /**
        实现全选和单选框的所有功能
        */

        var j_cbAll = document.getElementById("j_cbAll");
        var inputs = document.getElementById("j_tb").getElementsByTagName("input");

        //为全选框添加点击事件，点击或者取消状态，对应的子选择框状态，同步
        j_cbAll.onclick = function () {
            // alert(this.checked);
            for (var i = 0; i < inputs.length; i++) {
                //将全选框的状态，赋值给所有的单选框
                inputs[i].checked = this.checked;
            }
        }

        //为tbody中的单选框，添加点击事件

        for (var j = 0; j < inputs.length; j++) {
            //为每次一个单选框注册点击事件
            inputs[j].onclick = function () {
                var flag = true; //默认都被选中了
                //判断是否所有的复选框都选中了
                for (var k = 0; k<inputs.length; k++) {
                    if (!inputs[k].checked) { //如果没有选中，则将标志置为false
                        flag = false;
                        // j_cbAll.checked = flag;
                        break;  //并跳出当前循环
                    }
                }
                //并将flag标志值，赋值给全选状态框
                j_cbAll.checked = flag;
            }
        }


    </script>

```
## 3、页面上创建元素
1、通过document.write()方式创建元素
```javascript
var btn = document.getElementById("btn");
btn.onclick=function(){
	document.write("<p>创建一个p标签</p>");
}
```
**结论**
> document.write()创建元素：
> 缺陷，如果是在页面加载完毕后，此时通过这种方式创建元素，
> 那么，页面上存在的所有内容全部会覆盖掉。

2、通过innerHTML方式，创建标签元素
```html
    <style>
    div{
        width: 300px;
        height: 300px;
        background: #445566;
    }
    </style>
    <input type="button" value="创建一个div标签" id="btn">
    <div id="dv"></div>
    <script>
        var btn = document.getElementById("btn");
        var dv = document.getElementById("dv");

        btn.onclick=function (){
            dv.innerHTML="<div style='background:red'>我是一个新div</div>"
        }

    </script>
```

3、通过document.createElement("标签名")创建标签元素
​	1、创建元素
​		document.createElement("标签名");
​	2、把元素追加到父级元素中
​		点击按钮，在div中创建一个p标签
​		var btn = document.getElementById("btn");
​		btn.onclick=function(){
​            var p = document.createElement("p");
​            setInnerText(p,"我是一个p标签");
​            var div = document.getElementById("div");
​            div.appendChild(p);
​		}



# 第六天、js中的事件

## 1、绑定事件的区别
为按钮绑定多个点击事件
```html
	<input type="button" value="按钮" id="btn">
	
	
	<script>
		
	<script>

```

总结绑定事件的区别
​    addEventListener()
​    attachEvent() 

* 相同点：都可以为元素绑定事件
* 不同点：
    1、方法名不一样
    2、参数个数不一样
    3、addEventListener  谷歌  火狐  ie11支持，ie8不支持
    ​    attachEvent  谷歌  火狐  ie11不支持，ie8支持
    4、this不同，addEventListener中的this是当前绑定事件的对象
    ​    attachEvent中的this是window
    5、addEventListener：事件类型（事件的名字）没有on
    ​    attachEvent：事件类型（事件的名字）有on

## 2、解绑事件
注意：用什么方式绑定事件，就应该用什么方式解绑事件
1、第一种方式
对象.on事件名字 = 事件处理器----->绑定事件
对象.on事件名 = null;
2、第二种方式
对象.addEventListener("没有on事件类型",函数名,false)  绑定事件
对象.removeEventListener("没有on事件类型",函数名,false)  解绑事件
3、第三种方式
对象.attachEvent("没有on事件类型",函数名,false)  绑定事件
对象.deAttachEvent("没有on事件类型",函数名,false)  解绑事件


## 3、事件的兼容性



## 4、百度搜索框
```html
 <style>
        #box {
          width: 450px;
          margin: 200px auto;
        }
    
        #txt {
          width: 350px;
        }
    
        #pop {
          width: 350px;
          border: 1px solid red;
        }
    
        #pop ul {
          margin: 10px;
          padding: 0px;
          width: 200px;
          list-style-type: none;
    
        }
    
        #pop ul li {
    
        }
      </style>
    <script src="../demo.js"></script>
    <div id="box">
        <input type="text" id="txt" value="">
        <input type="button" value="搜索" id="btn">
    </div>
    <script>
        var keyWords = ["小杨才是最纯洁的", "小杨才是最帅的", "小段是最猥琐的", "小超是最龌龊的", "传智播客是一个培训机构", "传说在传智有个很帅很纯洁的小杨", "苹果好吃", "苹果此次召回还是没有中国"];
        //获取文本框键盘抬起事件
        my$("txt").onkeyup = function () {
            //每一次的键盘抬起都判断页面中有没有这个div
            if (my$("dv")) {
                //删除一次
                my$("box").removeChild(my$("dv"));
            }
            //获取文本框的内容
            var text = this.value;
            var tempArr = []; //临时空数组，存放对应上的数据
            //把文本框输入的内容和数组中的每个数据对比
            for (var i = 0; i < keyWords.length; i++) {
                if (keyWords[i].indexOf(text) == 0) {
                    //是否最开始出现的
                    tempArr.push(keyWords[i]); //追加到临时数组
                }
            }
            //如果文本框为空或者临时数组为空，不用创建div
            if (this.value.length == 0 || tempArr.length == 0) {
                //如果页面中有这个div，删除这个div
                if (my$("dv")) {
                    my$("box").removeChild(my$("dv"));
                }
                return;
            }

            //创建div，把div追加到id为box的div中
            var dvObj = document.createElement("div");
            my$("box").appendChild(dvObj);
            dvObj.id = "dv";
            dvObj.style.width = "350px";
            // dvObj.style.height = "100px";  高度自动获取
            dvObj.style.border = "1px solid green";


            //循环遍历临时数组，创建对应的p标签
            for (var i = 0; i < tempArr.length; i++) {
                //创建p标签
                var pObj = document.createElement("p");
                dvObj.appendChild(pObj);
                pObj.innerText = tempArr[i];
                pObj.style.margin = 0;
                pObj.style.padding = "5px";
                pObj.style.cursor = "pointer";
                //鼠标进入
                pObj.onmouseover = function () {
                    this.style.backgroundColor = "yellow";
                };
                //鼠标离开
                pObj.onmouseout = function () {
                    this.style.backgroundColor = "";
                };

            }
        }
    </script>

```

## 5、BOM介绍
BOM主要是操作浏览器的。
浏览器中有个顶级对象：window
页面中顶级对象：document

页面中所有的内容都是属于浏览器的，页面中的内容也都是window

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
    //页面加载的时候，按钮还没有出现 ，所以会报错是.
    document.getEelementById("btn").onclick=function(){
        alert(1111);
    }
    </script>
</head>
<body>
    <input type="button" value="按钮" id="btn">
    
</body>
</html>

```
 页面加载的时候,按钮还没出现,页面没有加载完毕

    页面加载完毕了,再获取按钮
    只要页面加载完毕,这个事件就会触发-----页面中所有的内容,标签,属性,文本,包括外部引入js文件
   window.onload=function () {
​     document.getElementById("btn").onclick=function () {
​       alert("您好");
​     };
   };


    很重要
   onload=function () {
​     document.getElementById("btn").onclick=function () {
​       alert("您好");
​     };
   };

    扩展的事件---页面关闭后才触发的事件
   window.onunload=function () {

   };
​    扩展事件---页面关闭之前触发的
   window.onbeforeunload=function () {
​     alert("哈哈");
   };

## 1、location对象
    //对象中的属性和方法
    //location对象
    //console.log(window.location);

//    //地址栏上#及后面的内容
//    console.log(window.location.hash);
//    //主机名及端口号
//    console.log(window.location.host);
//    //主机名
//    console.log(window.location.hostname);
//    //文件的路径---相对路径
//    console.log(window.location.pathname);
//    //端口号
//    console.log(window.location.port);
//    //协议
//    console.log(window.location.protocol);
//    //搜索的内容
//    console.log(window.location.search);
```javascript
    onload=function () {
      document.getElementById("btn").onclick=function () {
        //设置跳转的页面的地址
       //location.href="http://www.jd.com";//属性----------------->必须记住
       //location.assign("http://www.jd.com");//方法
        //location.reload();//重新加载--刷新
        //location.replace("http://www.jd.com");//没有历史记录
      };
    };
```
##  2、history对象介绍

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>title</title>

</head>
<body>
<input type="button" value="跳过去" id="btn1"/>
<input type="button" value="前进" id="btn2"/>
<script src="common.js"></script>
<script>
  //跳转的
  my$("btn1").onclick = function () {
    window.location.href = "15test.html";
  };
  //前进
  my$("btn2").onclick = function () {
    window.history.forward();
  };
</script>
</body>
</html>

```

# 第七天：js中scroll系列
封装scroll系列的相关属性，固定导航栏
封装动画函数----缓动动画----变速动画 
筋斗云
升级变速动画
手风琴
开机动画案例
旋转木马案例
另一个系列：
图片跟着鼠标飞



## 1、三个系列
offset系列：获取元素的位置  width,height，left  top  parent    (有边框)
scroll系列：卷曲出去的值 width,height，left  top
client系列：
clientWidth：可视区的宽度，没有边框，
clienHeight：可视区的高度
clientLeft：左边边框的宽度
clientTop：上边框的宽度

```html
  <style>
    body {
      margin: 0;
      height: 2000px;
    }
    #box {
      position: relative;
      width: 300px;
      height: 300px;
      background-color: red;
      overflow: hidden;
      margin: 50px;
      border:3px solid black;
      top:100px;
      left: 50px;
    }
    #child {
      width: 100px;
      height: 100px;
      background-color: blue;
      margin: 50px;
      border: 10px solid yellow;
      padding: 10px;
    }
  </style>
  <div id="box">
    <div id="child">
      
    </div>
  </div>

  <script>
    var box = document.getElementById("box");
    //获取当前div的位置,包含margin、left和top的值
    console.log(box.offsetLeft);  //  100 = margin:50+left:50
    console.log(box.offsetTop);   //  120 = margin:50+top:100
    //获取当前div的宽度和高度，包含边框的大小、内边距的大小
    console.log("box的高度为："+box.offsetHeight+"px");  //box的高度为：306px
    console.log("box的宽度为："+box.offsetWidth+"px");  //box的宽度为：306px
  </script>
  
    <style>
      body {
        margin: 0;
      }
  
      #box {
        width: 100px;
        height: 100px;
        margin: 50px;
        border: 20px solid red;
        padding: 10px;
        background-color: green;
      }
    </style>
    <div id="box">
      
    </div>
<script>
var box = document.getElementById("box");
//box可视区域的边框宽度
console.log("box的top值："+box.clientTop);
console.log("box的left值："+box.clientLeft);

//box可视区域的宽度和高度值，包括padding，不包括border
console.log("box的Height值："+box.clientHeight);   //  120 = 100 + 上、下padding
console.log("box的Width值："+box.clientWidth);    //    120 = 100  + 左右padding
  
  
  
```


# 第八天：  js面向对象编程
对象：特指的某个事件，具有属性和方法（一组无序的属性集合）；
特征：属性
行为：方法
对象----->抽象----->实例化

## 1、创建对象的三种方式
	1、字面量方式创建
```javascript
	var person={
        name:"张三",
        age:20,
        eat:function(){
            console.log("吃饭");
        },
       	readBook:function(){
            console.log("看书");
       	}
	}
```
	2、调用系统的构造函数
```javascript
	var person = new Object();
	person.name="李四";
	person.age=10;
	pseron.eat=function(){
        console.log("吃饭");
	}
```
	3、自定义构造函数
```javscript
	//构造函数方式创建对象
	funtcion Person(name,age){
        this.name = name;
        this.age = age;
        this.say=function(){
            console.log("你好");
        }
	}
	
	
	//工厂模式创建对象
	function createObject(name,age){
        var person = new Object();
        person.name="李四";
        person.age=10;
        person.eat = function(){
            console.log("吃饭了");
        }
        
        return person;
	}
```
工厂模式和构造函数创建对象对比：
**工厂模式：**
1、函数名小写
2、有new
3、有返回值 
4、new之后的对象是当前对象
5、直接调用函数就可以创建对象

**构造函数**
1、函数名大写（首字母）
2、没有new
3、没有返回值
4、this是当前对象
5、通过new来实例化对象
## 2、构造函数和实例之间的关系
>面向对象的思想是----抽象过程---实例化过程
//自定义构造函数---->实例化对象

function Person(name,age){
​    this.name = name;
​	this.age = age;
​	this.eat=function(){
​        console.log("我会吃帅哥");
​	}
}

构造函数---创建对象
var p1 = new Person("李四",122);
p1.eat();

实例对象是通过构造函数来创建的。
```javascript
function Person(name,age){
    this.name=name;
    this.age=age;
}
function Animal(name){
    this.name=name;
    this.wang=function(){
    	console.log("汪汪");
    };
}
var dog = new Animal("小黄");

console.dir(dog);  //实例对象
console.dir(Animal);//构造函数

console.log(dog.__proto__.constructor == Person);
console.log(dog.__proto__.constructor == Animal);

console.log(dog.constructor == Animal);
console.log(dog instanceof Animal);
```
实例对象和构造函数之间的关系：
1、实例对象是通过构造函数来创建的---创建的过程叫实例化
2、如何判断对象是不是当前的实例对象
​	1）通过构造函数  对象.构造函数 == 类
​	2) 对象 instanceof  构造函数 
​	尽可能使用第二种方式来识别，为什么？
原型对象：__proto__,prototype
1、实例对象中有个属性：__proto__，也是对象，叫原型，不是标准的属性，浏览器使用；
2、构造函数中有个属性：prototype，也是对象，叫原型，是标准的属性，程序员使用； 
原型的作用，共享数据，节省内存空间。
## 3、对象原型方法解决数据共享问题
```javascript
function Person(name,age){
    this.name = name;
    this.age=age;
    this.eat=myEat;
}

function myEat(){
    console.log("吃涉折小白");
}

var per1 = new Person("小刚",22);
var per2 = new Person("小黑",12);
per1.eat();
per2.eat();
console.dir(per1);
console.dir(per2);
//不是同一个方法
console.log(per1.eat == per2.eat);



//浪费空间，通过对象原型来解决这个问题
function Person(name,age){
    this.name=name;
    this.age=10;
}

//通过数据原型来添加方法，节省内存空间
Person.prototype.eat=function(){
    console.log("吃饭");
}

var p1 = new Person("小明",23);
var p2 = new Person("小红",24);
```

**体验点击按钮改变div的背景颜色**

```javascript
//面向对象思想----初级的
//按钮是一个对象，div是一个对象，颜色是一个属性
function ChangeStyle(btnId,dvId,color){
    this.btnId=document.getElementById(btnId);
    this.dvId = document.getElementById(dvId);
    this.color=color;    
}

//数据共享   改变背景颜色 
ChangeStyle.prototype.init=function(){
    console.log(this);//就是实例对象---即当前对象
    var 
}

```


## 4、js中体验面向对象编程
```html
<div id="dv"></div>
<input type="button" value="改变颜色" id="btn">
<script>
// //点击按钮，改变div的背景颜色
// document.getElementById("btn").onclick=function(){
// document.getElementById("dv").style.backgroundColor="red";
// }

//面向对象初级
//按钮是一个对象，div是一个对象，颜色是一个属性
function ChangeStyle(btnId,dvId,color){
    this.btnObj = document.getElementById(btnId);
    this.dvObj = document.getElementById("dv");
    this.color = color;
}

//数据共享来改变背景颜色 
ChangeStyle.prototype.init = function(){
    // console.log(this);  //就是实例对象----就是当前对象
    var that = this;
    //点击按钮，改变div的背景颜色
	this.btnObj.onclick=function(){
    	that.dvObj.style.backgroundColor=that.color;
    }
}

//实例化对象
var cs = new ChangeStyle("btn","dv","red");
cs.init();
</script>

```

## 5、构造函数、实例对象和原型对象之间的关系
//通过构造函数实例对象，并初始化
var arr = new Array(10,20,30,40);
//join是方法，实例对象调用的方法
arr.join("|");
console.dir(arr);
//join方法在实例对象\__proto\__原型
console.log(arr.\__proto\__ == Array.prototype);

​    构造函数可以实例化对象
​    构造函数中有一个属性叫prototype，是构造函数对象
​    构造函数的原型对象（prototype）中有一个constructor构造器，
​    这个构造器指向的就是自己所在的原型对象所在的构造函数
​    实例对象的原型对象（__proto__）指向的是该构造函数的原型对象
​    构造函数的原型对象（prototype）中的方法是可以被实例对象直接访问的


## 6、利用原型共享数据
什么样子的数据 需要写在原型中？
需要共享的数据就可以写在原型中
原型作用之一：数据共享 

属性需要共享 ，方法也需要共享 
不需要共享的数据写在构造函数中，需要共享的数据写在原型中

```javascript
//构造函数  
function Student(name,age,sex){
     this.name=name;
     this.age=age;
     this.sex=sex;
}
/*
所有学生的身高都是188，所有人的体重都是55
所有学生都要每天500行代码
所有学生每天都要吃一个10斤西瓜

*/

Student.prototype.height="188";
Student.prototype.weight="55kg";
Student.prototype.study=function(){
	console.log("学习，so easy");
}
Student.prototype.eat=function(){
    console.log("都要吃饭才行");
}

//上面的写法，可以改造成简单的写法
Student.prototype={
    height:"188",
    weight:"55kg",
    study:function(){
        console.log("学习，so easy");
    },
    eat:function(){
        console.log("随便吃，没问题");
    }
}
//实例化对象，并初始化
var person = new Student("小网","24","男");
person.study();
person.eat();
console.dir(Student);
console.dir(person);

```
## 7、什么叫原型？

实例对象中proto这个属性，叫原型，也是一个对象，这个是给浏览器使用，不是标准的属性。
构造函数中prototype这个属性，叫原型，也是一个对象，这个是给程序员使用，是标准的属性。
实例对象的proto和构造函数中的prototype相等---->true
面向过程和面向对象都是编程的思想,方式不一样
​      面向过程:凡事都是亲力亲为,所有的代码都要自己写,每一步都要很清楚,注重的是过程
​      面向对象:执行者成为指挥者,只要找对象,然后让对象做相关的事情,注重的是结果
​      面向对象的特性:封装,继承,多态
​      封装；就是代码的封装,把一些特征和行为封装在对象中.
​      面向对象的编程思想:根据需求,抽象出相关的对象,总结对象的特征和行为,把特征变成属性，行为变成方法,然后定义(js)构造函数,实例化对象,通过对象调用属性和方法,完成相应的需求.---编程的思想
​     
​      对象:具体特指的某个事物,有特征(属性)和行为(方法)，对象可以看成是一坨无序属性的集合
​     
​      如何创建对象?
​      通过调用new Object(),还有{},自定义构造函数
​     

## 8、创建对象的方式
1. 调用系统Object()----->创建出来的对象都是Object类型的,不能很明确的指出这个对象是属于什么类型
2. 字面量的方式{}----->只能创建一个对象(一次只能创建一个)

3.工厂模式创建对象----->----->推论---->自定义构造函数的方式
自定义构造函数(优化后的工厂模式)

自定义构造函数创建对象:4件事
1.在内存中申请一块空闲的空间,存储创建的对象
2.this就是当前实例化的对象
3.设置对象中的属性和方法(为对象添加属性和方法,为属性和方法赋值)
4.把创建后的对象返回
都是需要通过new的方式


​      什么是原型?
​      构造函数中有一个属性prototype,是原型,程序员使用的
​      实例对象中有一个属性proto,是原型,浏览器使用的,不是很标准的,
​      实例对象中的proto指向的就是该实例对象中的构造函数中的prototype
​      构造函数中的prototype里面的属性或者方法,可以直接通过实例对象调用
​      正常的写法:实例对象.proto才能访问到构造函数中的prototype中的属性或者方法
​      per.proto.eat();//proto不是标准的属性
​      per.eat();
​      原型就是属性,而这个属性也是一个对象
​      Person.prototype--->是属性
​      Person.prototype.属性或者Person.ptototype.方法()
​     
​      本身在构造函数中定义的属性和方法,当实例化对象的时候,实例对象中的属性和方法都是在自己的空间中存在的,如果是多个对象。这些属性和方法都会在单独的空间中存在,浪费内存空间,所以,为了数据共享,把想要节省空间的属性或者方法写在原型对象中,达到了数据共享，实现了节点内存空间

​      原型的作用之一:数据共享,节省内存空间
​     
​      原型的写法:
​      构造函数.prototype.属性=值
​      构造函数.prototype.方法=值---->函数.prototype,函数也是对象,所以,里面也有proto
​      实例对象.prototype-------->实例对象中没有这个属性,只有proto(暂时的)
​     
​      简单的原型的写法
​      缺陷:--->新的知识点---->原型直接指向{}---->就是一个对象,没有构造器
​      构造函数.prototype={
​      切记:如果这这种写法,要把构造器加上
};
​      通过原型为内置对象添加原型的属性或者方法----->原因:
​      系统的内置对象的属性和方法可能不满足现在需求,所以,可以通过原型的方式加入属性或者方法,为了方便开发
​     
​      为内置对象的原型中添加属性和方法,那么这个内置对象的实例对象就可以直接使用了
​      String.prototype.方法=匿名函数;
​      var str="哈哈";
​      str.方法();---->实例对象可以直接调用原型中的属性或者方法

# 第九天：js中的正则表达式

## 1、什么是正则表达式
	也叫规则表达式，按照一定的规则组成的一个表达式，这个表达式的主要功能是匹配字符串的；
	比如：我的电话号码是：10086，可以写一个正则表达式，把这个电话号码拿出来；
	作用：匹配字符串的。
**在大多数的编程语言中都可以使用。**

字符串的相关操作：
search：方法执行正则表达式和 String对象之间的一个搜索匹配。
charAt：方法从一个字符串中返回指定的字符。
split：方法使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。 
subString：方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
```javascript
    var str = "abcdefg";
    alert(str.search('g'));
```

##	2、正则表达式的组成
  由元字符或者是限定符组成的一个式子

```html
元字符
. 	表示除 \n 以外的任意的一个字符。

[]	表示范围，[0-9]，表示0到9之间的任意一个数字。
	[a-z]表示所有的小写字母中任意一个
	[A-Z]表示所有的大写字母中任意一个
	[] 另一个函数，把正则表达式中元字符的意义干掉 ，[.]就是一个.
	
|	或者，[0-9]|[a-z] 表示要么是一个数字，要么是一个字母 

()	分组，提升优先级，[0-9]|([a-z])|[A-Z]
	([0-9])([1-5])([a-z])	三组，从最左边开始计算
	
*	表示：前面的表达式出现了0次到多次
	[a-z][0-9]* 小写字母中任意一个，后面是要么有数字，要么没有数字
	比如：“fdfa2222”,"fsdfsd"都可以和上面进行匹配
	
+	表示：前面的表达式出现1次到多次
	[a-z][0-9]+	小写字母中任意一个，后面可以有大于等1个数字
	
?	表示：前面的表达式出现了0次到1次，最少0次，最多1次
	另一个涵义：阻止贪婪模式

限定符：限定前面的表达式出现的次数
{}		更加明确前面的表达式出现的次数
{0,}	表示前面的表达式出现了0次到多次，和 * 一样
{1,}	表示前面的表达式出现了1次到多次，和 + 一样
{0,1}	表示前面的表达式出现了0次到1次，和 ？ 一样	
{5,10}	表示前面的表达式出现了5次到10次
{4}		表示前面的表达式出现了4次
{,10}	错误写法

^	表示是以开始，或者取非（取反）^[0-9]以数字开头
^[a-z]	以小写字母开始
[^0-9]	取反，非数字
[^a-z]	非小写字母

$	表示的是以什么结束	
[0-9][a-z]$	必须以小写字母结束

\d	数字中任意一个
\D	非数字中的一个
\s	空白符中的一个
\S	非空白符
\w	非特殊符号
\W	特殊符号
\b	单词的边界	“what are you ok?”;
```

## 3、正则表达式的创建方式
1、通过构造函数创建对象
	var reg=new RegExp(/\d{5}/);
	var str="我的电话是10086";
	//调用方法验证字符串是否匹配
	reg.test(str); //true
2、字面量的方式创建对象


# 第十天、js运动专题详解

## 1、基础运动
1、让div运动起来：定时器+left/top即可搞定
	div.style.left = div.offsetLeft+speed+"px";
2、速度-物体运动的快慢:
	如何让物体在单位时间内自动的运动起来，就需要用到定时器功能 
	setInterval(function(){},3000);
	表示：每3秒钟自动调用一次匿名函数
3、运动中常见的bug
	1）、不会停止：添加定时器
	2）、速度取某些值的时候无法停止：停止条件设置有问题，不能用==
	3）、到达位置后还会运动，点击一下就运动一下：设置定时器和运动的代码要放到
	if(){}else{}里面，也就是说需要把运动和停止隔开
	4）、重复点击速度加快：每次运动之前没有清除定时器
```html
<style>
	div{
        widht:150px;
        height:100px;
        backgroud:green;
        position:absolute
	}
</style>
<input type="button" value="点击按钮div运动" id="btn">
<div id="dv"></div>

<script>
  /**
   *  1、物体运动的基础
   *  div是创建在页面body中的，如何让它动起来的呢？ 
   *  1）、让div脱离body的文档流，设置div的position属性为：absolute/relative
   *  2）、改变div的left或者top值，可以让div向右或者向下移动
   *  2、物体运动的速度
   *  自定义一个速度speed，让div的left或者top值，根据speed值，进行改变
   *  3、物体自动的运动
   *  需要物体自动的运动，则需要设置一个定时器，让物体每隔几秒运动一次
   * 
   */ 
  var dv = document.getElementById("dv");
  var btn = document.getElementById("btn");
  var speed = 10;
  //按钮被点击后，则让div向右移动10px
  btn.onclick=function(){
    //当按钮被点击后，则将left的值，增加一个speed
    dv.style.left = dv.offsetLeft + speed +"px";
  }


function getStyle(obj,styleName){
            return obj.currentStyle ? obj.currentStyle[styleName] : getComputedStyle(obj)[styleName];

/**
* 取得当前css值的写法需要额外注意：
* 1、一定要判断obj.currentStyle是否存在，而不能判断getComputedStyle是否存在，
*  因为判断一个对象的某个熟悉是否存在的结果最多是undefined，但是直接判断一个函数是否存在（注意，当写成window.getComputedStyle
*  这样的时候，是可以的，结果最多也就是undefined，但是直接写getComputedStyle的话，没有就会报错）
*  2、getComputedStyle()是window下的一个方法，主流浏览器支持，ie浏览器不支持，ie需要使用currentStyle这个属性来获取
*/
}

</script>
```
## 2、匀速运动
## 3、缓冲运动：最为常见
	特点
	1、逐渐变慢，最后停止
	2、距离target越元，速度越大
	3、速度由距离决定
	4、速度=(目标值-当前值)/缩放系数
	常见bug
	1、速度取整
	缓冲运动中速度是必须取整的，否则会出现问题
	还有就是目标值有可能不是整数，也需要取整，比如侧边栏随着页面滚动而滚动的例子就是这样的
4、代码中永远不要使用小数，任何语言，任何操作系统，都不要使用小数，小数不精确，会产生很多问题
	那么要怎么做呢，比如我要存储3.14     使用整数去除314/100
5、运动终止条件
	1、匀速运动：距离足够近
	2、缓冲运动，两点重合

6、布局转换:把文档流布局转换成绝对定位
	css中使用浮动方便
	js中使用绝对定位方便，那么该怎么办
	使用offset进行转换
	再看一遍这个地方
7、mspaint 画图
8、从中心放大：
	建议margin配合
	为什么不用left和top，因为这样需要取出老的left和top值
9、z-index最大值就是int的最大值，2的32次方，所以使用不会出问题

10、无缝滚动原理：走到一半拉回来

11、弹性公式：
	速度+=(目标值-oDiv.offsetLeft)/5;
	速度*=0.7;
	常见问题：
	1、无法到达指定位置----小数误差问题
		解决方法：速度无法取整，使用变态方法----变量
	2、运动过界的问题：
	
	3、运动终止条件的判断
		弹性运动：距离足够近，并且速度足够小
	
	4、弹性运动的bug
		可能产生运动过界的bug
12、碰撞运动
13、运动终止条件
	匀速运动：距离足够近
	缓冲运动：两点重合