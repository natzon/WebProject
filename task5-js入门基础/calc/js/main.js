// 全局变量



// 接受计算结果


function calc(){
      var num1 = parseInt(document.getElementById('num1').value);
      var num2 = parseInt(document.getElementById("num2").value);
      var operate = document.getElementById("calculate").value;
      // 开始运算
      if (operate == "+") {

          var str =  num1 + num2;
          document.getElementById("rel").innerText=str;
      }
      else if(operate == "-"){
          var str =  num1 - num2;
          document.getElementById("rel").innerText=str;
      }
      else if(operate == "*"){
          var str =  num1 * num2;
          document.getElementById("rel").innerText=str;
      }
      else if(operate == "/"){
      	  if (num2 == 0) {
      	  	document.getElementById("rel").innerText="NAN";
      	  }
      	  else{
      	  	var str =  num1 / num2;
           document.getElementById("rel").innerText=str;
      	  }
      	  	
      }
    
	
}



