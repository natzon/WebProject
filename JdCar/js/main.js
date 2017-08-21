angular.module('jd',[])
// 初始化一些值先
.factory('Data',function(){
	return{
		goodsChecked:[],
		goodsList:[
		{
		  id: 1,
          name: "涵芊花孕妇装2017夏装新款连衣裙中长款短袖时尚显瘦蕾丝哺乳衣外出孕妇裙子 图片色 M",
          image: "img/goods1.jpg",
          price: 88,
          version: "规格：粉色单件，M"
		},
		{
		  id:2,
          name: "涵芊花孕妇装2017夏装新款连衣裙中长款短袖时尚显瘦蕾丝哺乳衣外出孕妇裙子 图片色 F",
          image: "img/img2.jpg",
          price: 48,
          version: "规格：粉色单件，M"
		},
		{
		  id:3,
          name: "涵芊花孕妇装2017夏装新款连衣裙中长款短袖时尚显瘦蕾丝哺乳衣外出孕妇裙子 图片色 G",
          image: "img/img3.jpg",
          price: 78,
          version: "规格：粉色单件，M"
		},
		{
		  id:4,
          name: "涵芊花孕妇装2017夏装新款连衣裙中长款短袖时尚显瘦蕾丝哺乳衣外出孕妇裙子 图片色 A",
          image: "img/img4.jpg",
          price: 56,
          version: "规格：粉色单件，M"
		},
		{
		  id:5,
          name: "涵芊花孕妇装2017夏装新款连衣裙中长款短袖时尚显瘦蕾丝哺乳衣外出孕妇裙子 图片色 B",
          image: "img/img5.jpg",
          price: 45,
          version: "规格：粉色单件，M"
		},
		{
		  id:6,
          name: "涵芊花孕妇装2017夏装新款连衣裙中长款短袖时尚显瘦蕾丝哺乳衣外出孕妇裙子 图片色 C",
          image: "img/img6.jpg",
          price: 36,
          version: "规格：粉色单件，M"
		}
		]
	}


})
.controller('jdcar',function($scope,Data){
	
	$scope.goodsData = Data.goodsList;// 初始化两个对象用于接收
	$scope.goodsChecked = Data.goodsChecked;
	console.log($scope.goodsData.length);

	$scope.addGoods = function(item){//添加商品到购物车
		var index = $scope.goodsChecked.indexOf(item);// 当为空时，indexof的值为-1，否则返回下标
		if (index != -1) {//商品不为空时
			item.count = ++$scope.goodsChecked[index].count;//数量+1

		}
		else{
			item.count = 0;//相当于添加了一个count属性
			item.count++;//默认数量为1
			item.checked = false;
			$scope.selectAll = false;
			$scope.goodsChecked.push(item);
			
		}
		console.log(Data.goodsChecked);
	}
	
	$scope.addCount = function(item){//增加商品的数量
		 item.count++;
	}
	$scope.decreaseCount = function(item){//减少商品的数量
		if (item.count>1) {
			item.count--;
		}
	}

	$scope.singleCheck = function(item){//单选
		var flag = this.$index;
		var count =0;//用于标记选择数目
		item.checked = !item.checked;
		$scope.goodsChecked.checked = item.checked;

		if (item.checked) {
			$(".icon-check").each(function(index){
			$(".icon-check").eq(flag).removeClass("icon-select").addClass("icon-selectnew");
		});

			for(var i=0;i<$scope.goodsChecked.length;i++){
				if($scope.goodsChecked[i].checked == true){
					count++;
				}
			}
			console.log(count);
			if (count == $scope.goodsChecked.length) {
				$(".icon-select-all").removeClass("icon-select").addClass("icon-selectnew");//打勾勾
				$scope.selectAll = true;
			}
		}
		else{
			$(".icon-check").each(function(index){
			$(".icon-check").eq(flag).removeClass("icon-selectnew").addClass("icon-select");
			$(".icon-select-all").removeClass("icon-selectnew").addClass("icon-select");
			$scope.selectAll = false;
			
		});
		}
		$scope.account();
	}
	$scope.selectAll=false;
	$scope.checkAll = function(){//全选 

		$scope.selectAll = !$scope.selectAll//取非值
		console.log($scope.selectAll);
        
		if($scope.selectAll){
			$(".icon-select-pos").removeClass("icon-select").addClass("icon-selectnew");//通过操控父类达到操控伪类的效果
			for(var i=0;i<$scope.goodsChecked.length;i++){
				$scope.goodsChecked[i].checked = true;
			}
		}
		else{
			for(var i=0;i<$scope.goodsChecked.length;i++){
				$scope.goodsChecked[i].checked = false;
			}
			$(".icon-select-pos").removeClass("icon-selectnew").addClass("icon-select");
		}
		$scope.account();
	}

	$scope.toEdit = false;
	$scope.editFunc = function (){//显示编辑框
		$scope.toEdit = !$scope.toEdit;
		if($scope.toEdit){
			for(var i=0;i<$scope.goodsChecked.length;i++){
				$scope.goodsChecked[i].checked = false;
			}
			$scope.selectAll = false;
			$(".icon-select-pos").removeClass("icon-selectnew").addClass("icon-select");//全部去除对勾
		}

	}

	$scope.deleteGood = function (){//编辑状态删除,需要先给每个赋值，看能不能删除
		if ($scope.toEdit == true && $scope.goodsChecked.length > 0){
			for (var i = 0; i < $scope.goodsChecked.length; i++){
				if ($scope.goodsChecked[i].checked == true){
					$scope.goodsChecked.splice($scope.goodsChecked.indexOf($scope.goodsChecked[i]), 1);
					i--;//因为删除了一项，$scope.goodsChecked的长度就减少了一个
				}
				if ($scope.goodsChecked.length == 0) {
		            $scope.selcetAll = false;
		            $(".icon-select-all").removeClass("icon-selectnew").addClass("icon-select");
		            $scope.toEdit = false;
		          }
			}
		}
		$scope.account();
		
	}
	 $scope.account = function () { //计算总价
      $scope.sum = 0;
      $scope.totalValue = 0;
      for (var i = 0; i < $scope.goodsChecked.length; i++) {
        $scope.goodsChecked[i].singleTotal = 0;
        if ($scope.goodsChecked[i].checked) {
          $scope.goodsChecked[i].singleTotal = $scope.goodsChecked[i].price * $scope.goodsChecked[i].count; //单个商品的总价格
          $scope.sum += $scope.goodsChecked[i].count; //计算总数量
        } else if ($scope.goodsChecked[i].checked == false) {
          $scope.goodsChecked[i].singleTotal = 0;
        }
        $scope.totalValue += $scope.goodsChecked[i].singleTotal; //计算总价
      }
    }

});