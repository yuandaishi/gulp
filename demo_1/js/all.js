function foo(){
	console.log("js_1")
}
function foo_1(){
	return 'it is a demo'
}
(function (c){
	let a=100;
	let b=100;
	var k=c;
})(100);//立即执行函数后面必须要有分号，不然合并的时候会报错

(function (){
	var foo=function(){//这个函数不会被其他同名的函数覆盖
		console.log("aaaaa")
	}
	window.foo=foo;//但是这样的话，还是会暴露在外面，会覆盖或者被覆盖
})()
function foo(){
	console.log("js_2");
}
foo()