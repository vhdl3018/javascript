var container = document.getElementById("container");

var arr = [];
for(var i=0;i<10;i++){
  var r = tools.getRandom(0,255);
  var g = tools.getRandom(0,255);
  var b = tools.getRandom(0,255);

  var box =new Box(container,{
    backgroundColor:'rgb('+r+',' +g +',' +b+')'
  })
  //报创建好的box 放入了数组中
  arr.push(box);
}

//开启定时器

setInterval(randomBox, 500);
randomBox();
function randomBox(){
  //随机生成方块的坐标
  for(var i=0;i<10;i++){
    var box = arr[i];
    box.random();
  }
}