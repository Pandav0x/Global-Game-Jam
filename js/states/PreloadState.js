var PreloadState = function(){};

console.log("PreloadState");

PreloadState.prototype = {
	preload: function(){
		console.log("preload preload");
	},
	create: function(){
		console.log("create preload");
	},
	update: function(){}
}
