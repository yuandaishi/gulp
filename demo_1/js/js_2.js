(function (){
	var foo=function(){//这个函数不会被其他同名的函数覆盖
		console.log("aaaaa")
	}
	window.foo=foo;
})()
function foo(){
	console.log("js_2");
}
foo()