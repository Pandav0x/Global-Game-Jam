var CreditState = function(){};

console.log("CreditState");

CreditState.prototype = {
	preload: function(){
		console.log("preload Credit");
	},
	create: function(){
		console.log("create Credit");
	},
	update: function(){}
}
