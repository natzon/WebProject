function find() {
	
// 初始化数组来放次数和地址索引
 var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p","p", "j", "a"];
 var count = new Array(); 
 var add = {}; 


 // 给数组赋值
 arr.forEach(function(value,index){
 	// count[value不为0时候]
        if (count[value]) { 
            count[value]++; 
            add[value] += "," + index; 
        } else {
            count[value] = 1;  
            add[value] = index; 
        }
    });

 // 比较大小
 // 初始化两个值来放最大次数，和字母
 var max = 0;
 var letter;
 for (var d in count) { 
        if (count[d] > max) {
            max = count[d]; 
            letter = d; 
        }
    }
 // 打印
var i=document.getElementById('result');
var j=document.getElementById('result1');
var k=document.getElementById('result2');
i.innerText="出现最多次数的字母为:"+letter;
j.innerText="出现的次数为:"+max;
k.innerText="出现的位置为:"+add[letter];
}
	


