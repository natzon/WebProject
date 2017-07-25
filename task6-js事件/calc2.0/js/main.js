// 初始化
// 为什么document.getElementById("screen").innerText=str;改变不了屏幕的值
var num = 0; //作为计算的寄存值
var numshow = '0'; // 放屏幕显示的数值
var result = 0
var operate = 0; //判断有没有按运算符
var quit = 0; //防止重复按钮
var calcul = 0;



// 输入数字,显示数字
function inputNum(e) {
    var str = document.getElementById("screen").value; //获取当前屏幕的值
    //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值;
    str = (str != "0") ? ((operate == 0) ? str : "") : "";
    str += String(e); //给字符追加当前值
    // 接受下屏幕id
    var ScreenId = document.getElementById("screen");
    ScreenId.value = str;
    operate = 0;
    quit = 0;
}

//清除数据，全部初始化
function clearscreen() {
    num = 0;
    result = 0;
    numshow = "0";
    document.getElementById("screen").value = "0";
}
// 小数点
function dot() {
    var str = String(document.getElementById("screen").value);
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号 
        if (str.substr(i, 1) == ".") return false; //如果有则不再插入 
    }
    str = str + ".";
    document.getElementById("screen").value = str;
    operate = 0;
}
//退格
function del() {
    var str = String(document.getElementById("screen").value);
    str = (str != "0") ? str : "";
    // 截取
    str = str.substr(0, str.length - 1);
    str = (str != "") ? str : "0";
    document.getElementById("screen").value = str;
}

//运算
//plus
function plus() {
    calculate();
    operate = 1; //更改输入状态 
    calcul = 1; //更改计算状态为加

}
//减法
function minus() {
    calculate();
    operate = 1;
    calcul = 2;
}
//乘法
function multi() { //乘法 
    calculate();
    operate = 1;
    calcul = 3;
}
//除法
function divide() { //除法 
    calculate();
    operate = 1;
    calcul = 4;
}
//求余 


function persent() {
    calculate();
    operate = 1;
    calcul = 5;
}
//求根
function square(){
	calculate();
	operate = 1;
	calcul = 6;
}
//求sin
function bsin(){
	calculate();
	operate = 1;
	calcul = 7;
}
//求cos
function bcos(){
	calculate();
	operate = 1;
	calcul = 8;
}


//equal
function equal() {
    calculate();
    operate = 1;
    num = 0;
    result = 0;
    numshow = "0";
}


//计算函数
function calculate() {
    numshow = Number(document.getElementById("screen").value);
    // tofixed(8)保留小数点8位，四舍五入
    if (num != 0 && quit != 1) {
        switch (calcul) { //判断输入状态
            case 1:
                result = parseFloat((parseFloat(num) + numshow).toFixed(8));
                quit = 1; 
                break;
            case 2:
                result = parseFloat((parseFloat(num) - numshow).toFixed(8));
                quit = 1; 
                break;
            case 3:
                result = parseFloat((parseFloat(num) * numshow).toFixed(8));
                quit = 1; 
                break;
            case 4:
                if (numshow != 0) {
                    result =parseFloat((parseFloat(num) / numshow).toFixed(8));
                } else {
                    result = "NAN";
                }
                quit = 1; 
                break;
            case 5:
                result = parseFloat((parseFloat(num) % numshow).toFixed(8));
                quit = 1; 
                break;
            case 6:
                result = Math.sqrt(numshow);
                console.log(result);
                break;
            case 7:
                result = Math.sin(numshow);
                break;
            case 8:
                result = Math.cos(numshow);break;
            default:
                alert("别乱输入好嘛");
                quit = 1; 
                break;
        }
        //避免重复按键
    } else { result = numshow };
    numshow = String(result);
    document.getElementById("screen").value = numshow;
    num = numshow;
}
