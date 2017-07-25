// 点击事件函数
function calculate(){

	var i = parseInt(document.getElementById("grade").value);
	
    var j = 6;

    if (i>=90 && i<=100) {
    	j = 1;
    }
    else if (i>=80 && i<90) {
    	j = 2;
    }
    else if (i>=70 && i<80){
    	j = 3;
    }
    else if (i>=60 && i<70) {
    	j = 4;
    }
    else if(i<60 && i>0){
    	j =5;
    }
    else{
    	j = 6;
    }

    

    switch(j){
    	case(1):document.getElementById("level").innerText="一等生";
    	break;
    	case(2):document.getElementById("level").innerText="二等生";
    	break;
    	case(3):document.getElementById("level").innerText="三等生";
    	break;
    	case(4):document.getElementById("level").innerText="四等生";
    	break;
    	case(5):document.getElementById("level").innerText="不及格，重修吧";
    	break;
    	default:document.getElementById("level").innerText="出错了，你输入的是什么";
    	break;

    }

    
}
