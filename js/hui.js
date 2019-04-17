$(function(){
	
	
	
	var timer=null;
	$(".btn").click(function (){
		 play();
		 wolfImg();
	});
	$(".btn1").click(function(){
		$(".end").stop().fadeOut(100);
		play();
		wolfImg();
	});
	
	function play(){
		//关掉开始按钮
		$(".btn").hide();
		
		//重新设置宽度
		$(".tiao").css({
			width:180
		})
		timer=setInterval(function(){
			var offset=$(".tiao").width();
			offset-=1;
			
		$(".tiao").css({
			width:offset
		});
		if (offset<=0) {
			clearInterval(timer);
			$Img.remove();
			clearInterval(wolftimer);
			$(".end").stop().fadeIn("slow");
			
		} 
		},50);
		
	}
	
	$(".rules_1").click(function(){
		$(".rules_show").fadeIn("slow");
		$(".btn").stop().fadeOut("slow");
		$(".close").click(function(){
			$(".rules_show").stop().fadeOut("slow");
			$(".btn").stop().fadeIn("slow");
			
			
		})
		
	});
	var wolftimer=null;
	//处理灰太狼动画
	function wolfImg(){
		//用数组将灰太狼和小灰灰图片存起来
	var wolf_1=["img/h0.png","img/h1.png","img/h2.png","img/h3.png","img/h4.png","img/h5.png","img/h6.png","img/h7.png","img/h8.png","img/h9.png"]
	
	var wolf_2=["img/x0.png","img/x1.png","img/x2.png","img/x3.png","img/x4.png","img/x5.png","img/x6.png","img/x7.png","img/x8.png","img/x9.png"]
	
	//将位置存起来
	var weizhi=[
	{left:"100px",top:"115px"},
	{left:"20px",top:"160px"},
	{left:"190px",top:"142px"},
	{left:"105px",top:"193px"},
	{left:"19px",top:"221px"},
	{left:"202px",top:"212px"},
	{left:"120px",top:"275px"},
	{left:"30px",top:"295px"},
	{left:"209px",top:"297px"},
	];
	//随机位置
	var wolfweizhi=Math.round(Math.random()*8);
//	alert(wolfweizhi);
	
	
	
	//创建图片
	$Img=$("<img src=''/>");
	
	//设置图片显示位置
	$Img.css({
		position:"absolute",
		left:weizhi[wolfweizhi].left,
		top:weizhi[wolfweizhi].top
		
		
	});
	//随机图片
	var wolfindex=Math.round(Math.random())==0?wolf_1:wolf_2;
	
	//设置图片内容
	
	window.wolftype=0;
	window.wolftypeend=5;
	 wolftimer=setInterval(function(){
		$Img.attr("src",wolfindex[wolftype]);
		wolftype++;
		if (wolftype>wolftypeend) {
			$Img.remove();
			clearInterval(wolftimer);
			wolfImg();
		}
		
		
	},300);
	//将图片添加到页面上
	$(".center").append($Img);
		//		alert(wolfweizhi);
		//调用
	gamescore($Img);
	};
	function gamescore($Img){
		$Img.one("click",function(){
			//修改索引
			window.wolftype=5;
			window.wolftypeend=9;
			
			//拿到当前图片位置
			
			var $src=$(this).attr("src");
			//判断图片是否为灰太狼
			var flag=$src.indexOf("h")>=0;
			if (flag) {
				//+10
				$(".score").text(parseInt($(".score").text())+10);
				
			} else{
				//-10
				$(".score").text(parseInt($(".score").text())-10);
				
			}
		})
		
		
		
	}
})