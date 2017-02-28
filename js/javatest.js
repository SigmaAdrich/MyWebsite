/**
*效率计算
*@xupeng
*/

function cal(){
	var ped=parseInt(document.getElementById("ped").value);
	var per=parseInt(document.getElementById("per").value);
	var time=parseInt(document.getElementById("time").value);
	var pcb=parseInt(document.getElementById("pcb").value);


	var standar=num();
	b=jisuan(ped,per,time,pcb,standar);
	b=b.toString();
	b=b.substring(0,6);
	document.getElementById("result").value=b+"%";
};


//最优参数生成函数
var num=function(){
	var source=Math.random();
	var PedotNum=source*1000+3000;
	var PerovskiteNum=source*1000+6000;
	var PcbmNum=source*1000+3000;
	var time=source*10+10;
	var Num=[];
	Num[0]=PedotNum;
	Num[1]=PerovskiteNum;
	Num[2]=PcbmNum;
	Num[3]=time;
	return Num;
};


//效率计算公式
var jisuan=function(ped,per,time,pcb,array){
	var star= ped+per+time+pcb;
	var end=array[0]+array[1]+array[2]+array[3];
	var sum=Math.abs(star-end);
	var eff=17*(1-sum/end);
	return eff;
};