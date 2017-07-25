//初始化
var a = localStorage.getItem('a');
var stylecss = document.getElementById("style");
//判断localStorage是否存在 
if (a == null && a == undefined) {
    //如果不存在 将默认样式设置为样式一 
    //  $('.test').attr('href', 'css/style1.css');
    stylecss.href = "./css/main.css";

} else {
    //如果存在 将样式设置为a的样式 
    stylecss.href = a;
}

// 换肤代码
var yellow = document.getElementById('btn-yellow');
yellow.onclick = function changeyellow() {
    //创建localStorage对象 
    var storage=window.localStorage;
    storage.a ="./css/mainy.css";
    stylecss.href = "./css/mainy.css";
}
var green = document.getElementById('btn-green');
green.onclick = function changegreen() {
    //创建localStorage对象 
    var storage=window.localStorage;
    storage.a ="./css/main.css";
    stylecss.href = "./css/main.css";
}

var blue = document.getElementById('btn-blue');
blue.onclick = function changegreen() {
    //创建localStorage对象 
    var storage=window.localStorage;
    storage.a ="./css/mainb.css";
    stylecss.href = "./css/mainb.css";
}

